package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.*;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.RegisterFactory;
import ctoutweb.lalamiam.model.*;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import ctoutweb.lalamiam.security.jwt.JwtIssuer;
import ctoutweb.lalamiam.service.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Properties;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl extends BaseService implements AuthService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final AuthenticationManager authenticationManager;
  private final UserService userService;
  private final JwtService jwtService;
  private final JwtIssuer jwtIssuer;
  private final CaptchaService captchaService;
  public AuthServiceImpl(
          AuthenticationManager authenticationManager,
          UserService userService,
          JwtService jwtService,
          JwtIssuer jwtIssuer,
          CaptchaService captchaService,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("apiMessageSource") MessageSource messageSource) {
    super(messageSource, messageExceptions);
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtService = jwtService;
    this.jwtIssuer = jwtIssuer;
    this.captchaService = captchaService;
  }

  @Override
  @Transactional
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

    String responseMessage = getApiMessage("login.success").replace(
            "!%!nickname!%!", userPrincipal.getUsername());
    return new LoginResponseDto(
            jwtIssue.getJwtToken(),
            userPrincipal.getEmail(),
            userPrincipal.getId(),
            userPrincipal.getAuthorities().stream().map(authority->authority.getAuthority()).collect(Collectors.toList()),
            responseMessage);
  }

  @Override
  public RegisterResponse register(RegisterDto registerDto) {

    boolean isCaptchaResponseValid = captchaService.validateResponse(registerDto.captchaClientResponseDto());
    LOGGER.debug("isCaptchaResponseValid: " + isCaptchaResponseValid);

    if (!isCaptchaResponseValid)
      throw new AuthException(getExceptionMessage("captcha.invalid.response"), HttpStatus.UNAUTHORIZED);

    UserEntity findUser = userService.getUserInformationByEmail(registerDto.email());

    if (findUser != null && findUser.getAccount() != null && findUser.getAccount().getIsAccountActive())
      throw new AuthException(getExceptionMessage("email.exist"), HttpStatus.CONFLICT);

    // Suppression de l'ancien user si existant
    if (findUser != null) {
      userService.deleteUserByemail(findUser.getEmail());
    }

    UserEntity registerUser = userService.registerUser(registerDto);

    return RegisterFactory.getRegisterResponse("Enregistrement utilisateur " + registerUser.getEmail());


  }

  @Override
  public MessageResponse activateAccount(ActivateAccountDto activateAccount) {

    UserEntity findUser = userService.getUserInformationByEmail(activateAccount.email());

    if(findUser != null && findUser.getAccount() != null && findUser.getAccount().getIsAccountActive())
      throw new AuthException("Votre compte est déjà activé", HttpStatus.CONFLICT);

    return null;
  }

  @Override
  @Transactional
  public MessageResponse logout(Long userId) {
    jwtService.deleteJwtByUserId(userId);
    return new MessageResponse(getApiMessage("logout"));
  }



}
