package ctoutweb.lalamiam.security.authentication;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.mapper.UserEntityMapper;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;
import ctoutweb.lalamiam.service.ApplicationMessageService;
import ctoutweb.lalamiam.service.LoginService;
import ctoutweb.lalamiam.service.MailService;
import ctoutweb.lalamiam.util.TextUtility;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

import static ctoutweb.lalamiam.constant.ApplicationConstant.LOGIN_ERROR_ATTEMPT_AVAILABLE;
import static ctoutweb.lalamiam.util.DateUtility.*;



@Component
public class CustomAuthProvider implements AuthenticationProvider {
  private final PasswordEncoder passwordEncoder;
  private final UserDetailsService userDetailsService;
  private final LoginService loginService;
  private final ApplicationMessageService applicationMessageService;
  private final MailService mailService;

  public CustomAuthProvider(
          PasswordEncoder passwordEncoder,
          UserDetailsService userDetailsService,
          LoginService loginService,
          ApplicationMessageService applicationMessageService,
          MailService mailService) {

    this.passwordEncoder = passwordEncoder;
    this.userDetailsService = userDetailsService;
    this.loginService = loginService;
    this.applicationMessageService = applicationMessageService;
    this.mailService = mailService;
  }

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthException {
    // Authentification utilisateur
    boolean isAuthenticationValid = authentication.getCredentials() != null;

    // List des dernieres connexions du client
    List<UserLoginEntity> lastUserLoginList = List.of();

    // Client souhaitant se connecter
    UserEntity loginUser = null;

    String presentedPassword = authentication.getCredentials().toString();
    UserDetails user = userDetailsService.loadUserByUsername(authentication.getName());


    // Récupération utilisateur
    if(user == null)
      isAuthenticationValid = false;

    // Vérification MDP
    if (user != null) {
      UserPrincipal userLogin = (UserPrincipal) user;

      // Vérification si connxion au compte possible
      UserLoginStatus userLoginStatus = loginService.isLoginAuthorize(userLogin.getId());

      if(!userLoginStatus.isLoginAuthorize()) {
        // Heure de reprise
        LocalDateTime recoveryLoginTime = userLoginStatus.recoveryLoginTime();

        String errorMessage = TextUtility.replaceWordInText(
                applicationMessageService.getMessage("login.not.authorize"),
                "!%!recoveryLoginTime!%!",
                toDateHour(recoveryLoginTime)
        );
        throw new AuthException(errorMessage, HttpStatus.BAD_REQUEST);
      }
      // Vérification mot de passe
      isAuthenticationValid = this.passwordEncoder.matches(presentedPassword, user.getPassword());
    }

    // Ajout des informations du login en base
    if(user != null) {
      loginUser = UserEntityMapper.map((UserPrincipal) user);

      // Mise a jour des informations de connexion du client
      lastUserLoginList = loginService.updateUserLoginInformation(loginUser, isAuthenticationValid);
    }

    // Login erreur
    if(!isAuthenticationValid) {
      long loginAttemptErrorCount = lastUserLoginList.stream()
              .filter(login-> !login.getIsLoginSuccess() && login.getHasToBeCheck())
              .count();

      // Nombre de tentative de connexion disponible
      int loginRemaining = loginService.getUserRemainingLogin(loginUser);

      // Ajout d'un delai de connexion
      if(loginAttemptErrorCount >= LOGIN_ERROR_ATTEMPT_AVAILABLE)
        loginService.addDelayOnLogin(loginUser, lastUserLoginList);

      throw new AuthException(getExceptionMessage(loginRemaining), HttpStatus.BAD_REQUEST);
    }

    return new UsernamePasswordAuthenticationToken(user, authentication.getCredentials().toString());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return authentication.equals(UsernamePasswordAuthenticationToken.class);
  }


  /**
   * Message sur le nombre de connexion disponible
   * @param remainigLogin Integer - Nombre de conexion disponible en cas d'erreur
   * @return String
   */
  public String getExceptionMessage(int remainigLogin) {

    return switch (remainigLogin) {
      case 4 -> applicationMessageService.getMessage("email.unvalid");
      case 3,2 -> applicationMessageService.getMessage("email.unvalid.attempt.message").replace("!%!number!%!", String.valueOf(remainigLogin));
      case 1 -> applicationMessageService.getMessage("email.unvalid.last.attempt.message");
      case 0 -> applicationMessageService.getMessage("email.unvalid.login.delay");
      default-> applicationMessageService.getMessage("email.unvalid");
    };
  }

}
