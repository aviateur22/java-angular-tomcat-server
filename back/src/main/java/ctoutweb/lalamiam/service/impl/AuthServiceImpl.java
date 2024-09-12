package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.*;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.ActivateAccountFactory;
import ctoutweb.lalamiam.factory.ChangePasswordFactory;
import ctoutweb.lalamiam.factory.MessageResponseFactory;
import ctoutweb.lalamiam.model.*;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import ctoutweb.lalamiam.security.jwt.JwtIssuer;
import ctoutweb.lalamiam.service.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final AuthenticationManager authenticationManager;
  private final UserService userService;
  private final JwtService jwtService;
  private final JwtIssuer jwtIssuer;
  private final CaptchaService captchaService;
  private final AccountService accountService;
  private final ApplicationMessageService applicationMessageService;
  public AuthServiceImpl(
          AuthenticationManager authenticationManager,
          UserService userService,
          JwtService jwtService,
          JwtIssuer jwtIssuer,
          CaptchaService captchaService,
          AccountService accountService,
          ApplicationMessageService applicationMessageService
  ) {
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtService = jwtService;
    this.jwtIssuer = jwtIssuer;
    this.captchaService = captchaService;
    this.accountService = accountService;
    this.applicationMessageService = applicationMessageService;
  }

  @Override
  @Transactional(dontRollbackOn = AuthException.class)
  public LoginResponseDto login(LoginDto loginDto) {

    // Destruction JWT existant
    jwtService.deleteJwtByUserEmail(loginDto.email());

    Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginDto.email(), loginDto.password())
    );

    SecurityContextHolder.getContext().setAuthentication(auth);
    UserPrincipal userPrincipal = (UserPrincipal) auth.getPrincipal();

    JwtIssue jwtIssue = jwtIssuer.issue(userPrincipal);

    jwtService.saveJwt(userPrincipal.getId(), jwtIssue, loginDto.email() );

    String responseMessage = applicationMessageService.getMessage("login.success").replace(
            "!%!nickname!%!", userPrincipal.getUsername());
    return new LoginResponseDto(
            jwtIssue.getJwtToken(),
            userPrincipal.getEmail(),
            userPrincipal.getId(),
            userPrincipal.getAuthorities().stream().map(authority->authority.getAuthority()).collect(Collectors.toList()),
            responseMessage);
  }

  @Override
  public MessageResponse register(RegisterDto registerDto) {

    boolean isCaptchaResponseValid = captchaService.validateResponse(registerDto.captchaClientResponseDto());
    LOGGER.debug("Réponse client au captcha: " + isCaptchaResponseValid);

    if (!isCaptchaResponseValid)
      throw new AuthException(applicationMessageService.getMessage("captcha.invalid.response"), HttpStatus.UNAUTHORIZED);

    UserEntity findUser = userService.getUserInformationByEmail(registerDto.email());

    if (findUser != null && findUser.getAccount() != null && findUser.getAccount().getIsAccountActive())
      throw new AuthException(applicationMessageService.getMessage("email.exist"), HttpStatus.CONFLICT);

    // Suppression de l'ancien user si existant
    if (findUser != null) {
      userService.deleteUserByEmail(findUser.getEmail());
    }

    UserEntity registerUser = userService.registerUser(registerDto);

    String responseMessage = applicationMessageService.getMessage("register.success");
    return MessageResponseFactory.getMessageResponse(responseMessage);


  }

  @Override
  public ActivateAccountResponseDto activateAccount(ActivateAccountDto activateAccount) {

    UserEntity findUser = userService.getUserInformationByEmail(activateAccount.email());

    if(findUser == null)
      throw new AuthException(applicationMessageService.getMessage("account.not.existing"), HttpStatus.BAD_REQUEST);

    if(findUser != null && findUser.getAccount() != null && findUser.getAccount().getIsAccountActive())
      throw new AuthException(applicationMessageService.getMessage("account.already.activate"), HttpStatus.BAD_REQUEST);

    String activateAccountToken = activateAccount.token();

    boolean isAccountActivable = accountService.isAccountActivatable(findUser, activateAccountToken);

    if(!isAccountActivable)
      throw new AuthException(applicationMessageService.getMessage("account.activate.failure"), HttpStatus.BAD_REQUEST);

    return ActivateAccountFactory.getActivateAccountDto(applicationMessageService.getMessage("account.activation.success"), ActivateAccountStatus.SUCCESS);
  }

  @Override
  @Transactional
  public MessageResponse logout(Long userId) {
    jwtService.deleteJwtByUserId(userId);
    return new MessageResponse(applicationMessageService.getMessage("logout"));
  }

  @Transactional
  @Override
  public MessageResponse sendLostPasswordMail(LostPasswordMailingDto lostPasswordMailingDto) {
    UserEntity user = userService.findUserByEmail(lostPasswordMailingDto.email());

    if(user == null) {
      throw new AuthException(applicationMessageService.getMessage("send.reset.passord.error"), HttpStatus.BAD_REQUEST);
    }

    // Envoie le mail pour réinitialiser le mot de passe
    accountService.accountLostPasswordMailing(user);

    return MessageResponseFactory.getMessageResponse(applicationMessageService.getMessage("mail.send"));
  }

  @Transactional
  @Override
  public ChangePasswordResponseDto changePassword(ChangePasswordDto changePasswordDto) {
    UserEntity user = userService.findUserByEmail(changePasswordDto.email());

    if(user == null) {
      throw new AuthException(applicationMessageService.getMessage("change.password.error"), HttpStatus.BAD_REQUEST);
    }
    boolean isAccountPasswordEditable = accountService.isAccountPasswordEditable(user, changePasswordDto);

    if(!isAccountPasswordEditable) {
      throw new AuthException(applicationMessageService.getMessage("change.password.error"), HttpStatus.BAD_REQUEST);
    }

    // Mise a jour de l'utilisateur
    userService.updateUser(user);

    return ChangePasswordFactory.getChangePasswordResponse(applicationMessageService.getMessage("change.password.success"), true);
  }


}
