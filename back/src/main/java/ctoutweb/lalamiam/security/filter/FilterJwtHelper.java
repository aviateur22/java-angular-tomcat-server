package ctoutweb.lalamiam.security.filter;

import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.JwtIdentificationFactory;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationContext;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationStrategy;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Component
public class FilterJwtHelper {
  private static final Logger LOGGER = LogManager.getLogger();
  private final JwtIdentificationContext jwtIdentificationContext;

  public FilterJwtHelper(JwtIdentificationContext jwtIdentificationContext) {
    this.jwtIdentificationContext = jwtIdentificationContext;
  }

  protected DecodedJWT validateJwt(String urlPath, DecodedJWT decodedJWT) throws AuthException {
    // Recherche stratégie pour la vérification du JWT
    JwtIdentificationStrategy jwtStrategy = JwtIdentificationFactory.getJwtIdentification(urlPath);

    LOGGER.debug(String.format("Strategie JWT: %s", jwtStrategy));

    if(jwtStrategy == null) throw new AuthException("Strategie JWT inexistante", HttpStatus.UNAUTHORIZED);

    this.jwtIdentificationContext.SetJwtIdentification(jwtStrategy);

    if(!this.jwtIdentificationContext.executeJwtIdentification(decodedJWT, urlPath))
      throw new AuthException("Le JWT n'est pas valide", HttpStatus.UNAUTHORIZED);

    return decodedJWT;
  }
  protected Optional<String> extractJwtFromHeaders(HttpServletRequest request) {
    // Todo faire test
    var token = request.getHeader("authorization");
    if(!StringUtils.hasText(token) || !token.startsWith("Bearer ")) return Optional.empty();
    return Optional.of(token.substring(7));
  }
}
