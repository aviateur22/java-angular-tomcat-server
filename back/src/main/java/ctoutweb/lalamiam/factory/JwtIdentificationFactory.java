package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationStrategy;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationType;
import ctoutweb.lalamiam.security.strategy.jwt.impl.JwtIdentificationLogout;
import ctoutweb.lalamiam.security.strategy.jwt.impl.JwtIdentificationStandard;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class JwtIdentificationFactory {

  private final JwtIdentificationStandard jwtIdentificationStandard;
  private final JwtIdentificationLogout jwtIdentificationLogout;
  private static JwtIdentificationFactory instance;

  public JwtIdentificationFactory(JwtIdentificationStandard jwtIdentificationStandard, JwtIdentificationLogout jwtIdentificationLogout) {
    this.jwtIdentificationStandard = jwtIdentificationStandard;
    this.jwtIdentificationLogout = jwtIdentificationLogout;
    instance = this;
  }


  /**
   * Renvoie JwtIdentificationStrategy suivant le JwtIdentificationType
   * @param urlPath String
   * @return JwtIdentificationStrategy
   * @throws AuthException
   */
  public static JwtIdentificationStrategy getJwtIdentification(String urlPath) throws AuthException {

    JwtIdentificationType type = JwtIdentificationType.getType(urlPath);

    if (type == null) throw new AuthException("Strategie JWT identification inexistante", HttpStatus.UNAUTHORIZED);

    return switch  (type) {
      case JWT_FULL_AUTH -> instance.jwtIdentificationStandard;
      case JWT_PARTIAL_AUTH -> instance.jwtIdentificationLogout;
      default -> null;
    };
  }
}
