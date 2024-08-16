package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.annotation.AnnotationValidator;
import ctoutweb.lalamiam.dto.LoginDto;
import ctoutweb.lalamiam.dto.LoginResponseDto;
import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.RegisterFactory;
import ctoutweb.lalamiam.model.*;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import ctoutweb.lalamiam.security.jwt.JwtIssuer;
import ctoutweb.lalamiam.service.AuthService;
import ctoutweb.lalamiam.service.CaptchaService;
import ctoutweb.lalamiam.service.JwtService;
import ctoutweb.lalamiam.service.UserService;
import ctoutweb.lalamiam.util.message.Language;
import ctoutweb.lalamiam.util.message.Message;
import ctoutweb.lalamiam.util.message.MessageType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final AuthenticationManager authenticationManager;
  private final UserService userService;
  private final JwtService jwtService;
  private final JwtIssuer jwtIssuer;
  private final CaptchaService captchaService;
  private final Message message;

  public AuthServiceImpl(
          AuthenticationManager authenticationManager,
          UserService userService,
          JwtService jwtService,
          JwtIssuer jwtIssuer, CaptchaService captchaService, Message message) {
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtService = jwtService;
    this.jwtIssuer = jwtIssuer;
    this.captchaService = captchaService;
    this.message = message;
  }

  @Override
  @Transactional
  public LoginResponseDto login(LoginDto loginDto) {

    final String DEFAULT_LANGUAGE = "fr";

    if(loginDto.language() == null) {
      LOGGER.error(()->String.format("Aucun language de défini. Sélection: ", DEFAULT_LANGUAGE));
    }
    String language = loginDto.language() != null ? loginDto.language() : DEFAULT_LANGUAGE;

    // Controlle language
    if(!Language.isLanguageValid(language)) {
      throw new RuntimeException("Language pas valide");
    }

    // Chargement des messages
    try{
      this.loadMessage(MessageType.LOGIN, language);
    } catch (IOException exception) {
      LOGGER.error(()->String.format("Erreur chargement message: %s", exception));
    } catch (URISyntaxException e) {
      throw new RuntimeException(e);
    }

    LOGGER.debug(message.getExceptionMessages().get("emailExist"));

    // Validation des données
    validateInputData(loginDto);

    // Destruction JWT existant
    jwtService.deleteJwtByUserEmail(loginDto.email());


    Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginDto.email(), loginDto.password())
    );

    SecurityContextHolder.getContext().setAuthentication(auth);
    UserPrincipal userPrincipal = (UserPrincipal) auth.getPrincipal();

    LOGGER.debug("userPrincipal: " + userPrincipal);

    JwtIssue jwtIssue = jwtIssuer.issue(userPrincipal);

    LOGGER.debug("jwt connexion: " + jwtIssue);

    jwtService.saveJwt(userPrincipal.getId(), jwtIssue, loginDto.email() );

    return new LoginResponseDto(
            jwtIssue.getJwtToken(),
            userPrincipal.getEmail(),
            userPrincipal.getId(),
            userPrincipal.getAuthorities().stream().map(authority->authority.getAuthority()).collect(Collectors.toList()),
            "Bienvenu " + userPrincipal.getUsername());
  }

  @Override
  public RegisterResponse register(RegisterDto registerDto) {

    // Validation des données
    validateInputData(registerDto);

    boolean isCaptchaResponseValid = captchaService.validateResponse(registerDto.captchaClientResponseDto());
    LOGGER.debug("isCaptchaResponseValid: " + isCaptchaResponseValid);
    UserEntity findUser = userService.getUserInformationByEmail(registerDto.email());

    if(findUser != null) throw new AuthException("Email déja existant", HttpStatus.CONFLICT);

    UserEntity registerUser = userService.registerUser(registerDto);

    return RegisterFactory.getRegisterResponse("Enregistrement utilisateur " + registerUser.getEmail());
  }

  @Override
  @Transactional
  public String logout(Long userId) {
    jwtService.deleteJwtByUserId(userId);
    return "Au revoir";
  }

  /**
   * Validation des inputs Client
   * @param inputData
   * @param <T>
   */
  private <T> void validateInputData(T inputData) {
    AnnotationValidator<T> registerValidator = new AnnotationValidator<>();
    registerValidator.validate(inputData);
  }

  /**
   * Chargement des Messages
   */
  private void loadMessage(MessageType type, String language) throws IOException, URISyntaxException {
   this.message.loadMessages(type, language);
  }
}
