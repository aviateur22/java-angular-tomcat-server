package ctoutweb.lalamiam.security.authentication;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.mapper.UserEntityMapper;
import ctoutweb.lalamiam.model.UserLoginInformation;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthProvider implements AuthenticationProvider {
  private final PasswordEncoder passwordEncoder;
  private final UserDetailsService userDetailsService;
  private final LoginService loginService;

  public CustomAuthProvider(
          PasswordEncoder passwordEncoder,
          UserDetailsService userDetailsService,
          LoginService loginService
  ) {
    this.passwordEncoder = passwordEncoder;
    this.userDetailsService = userDetailsService;
    this.loginService = loginService;
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
    if (user != null)
      isAuthenticationValid =this.passwordEncoder.matches(presentedPassword, user.getPassword());

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
      throw new AuthException("identifiant ou mot de passe invalide", HttpStatus.BAD_REQUEST);
    }

    return new UsernamePasswordAuthenticationToken(user, authentication.getCredentials().toString());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return authentication.equals(UsernamePasswordAuthenticationToken.class);
  }
}
