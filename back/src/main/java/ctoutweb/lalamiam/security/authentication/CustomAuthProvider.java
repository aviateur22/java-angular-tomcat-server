package ctoutweb.lalamiam.security.authentication;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.mapper.UserEntityMapper;
import ctoutweb.lalamiam.model.UserLoginInformation;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.LoginService;
import ctoutweb.lalamiam.service.MailService;
import ctoutweb.lalamiam.service.impl.MessageService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Properties;

@Component
public class CustomAuthProvider extends MessageService implements AuthenticationProvider {
  private final PasswordEncoder passwordEncoder;
  private final UserDetailsService userDetailsService;
  private final LoginService loginService;
  private final MailService mailService;

  public CustomAuthProvider(
          PasswordEncoder passwordEncoder,
          UserDetailsService userDetailsService,
          LoginService loginService,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("apiMessageSource") MessageSource messageSource,
          MailService mailService) {
    super(messageSource, messageExceptions);
    this.passwordEncoder = passwordEncoder;
    this.userDetailsService = userDetailsService;
    this.loginService = loginService;
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
      boolean isLoginAuthorize = loginService.isLoginAuthorize(userLogin.getId());

      if(!isLoginAuthorize) {
        throw new AuthException(getExceptionMessage("login.not.authorize"), HttpStatus.BAD_REQUEST);
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
      throw new AuthException(getExceptionMessage("email.unvalid"), HttpStatus.BAD_REQUEST);
    }

    return new UsernamePasswordAuthenticationToken(user, authentication.getCredentials().toString());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return authentication.equals(UsernamePasswordAuthenticationToken.class);
  }
}
