package ctoutweb.lalamiam.security.authentication;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.mapper.UserEntityMapper;
import ctoutweb.lalamiam.model.login.UserLoginInformation;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.entity.UserEntity;
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

    // Possibilité connexion au compte client
    boolean isLoginPossible = true;

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
      isAuthenticationValid =this.passwordEncoder.matches(presentedPassword, user.getPassword());
    }

    // Ajout des information du login en base
    if(user != null) {
      UserEntity loginUser = UserEntityMapper.map((UserPrincipal) user);

      // Ajout du login en base
      loginService.addLoginInformation(isAuthenticationValid, loginUser);

      // Récuération des données de connexion client
      UserLoginInformation userLoginInformation = loginService.updateUserLoginInformation(loginUser, isAuthenticationValid);
    }

    // Login erreur
    if(!isAuthenticationValid) {
      throw new AuthException(applicationMessageService.getMessage("email.unvalid"), HttpStatus.BAD_REQUEST);
    }

    return new UsernamePasswordAuthenticationToken(user, authentication.getCredentials().toString());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return authentication.equals(UsernamePasswordAuthenticationToken.class);
  }
}
