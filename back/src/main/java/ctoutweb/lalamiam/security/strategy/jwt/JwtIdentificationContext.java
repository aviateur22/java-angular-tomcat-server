package ctoutweb.lalamiam.security.strategy.jwt;

import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JwtIdentificationContext {
  private JwtIdentificationStrategy jwtIdentificationStrategy;

  public void SetJwtIdentification(JwtIdentificationStrategy jwtIdentificationStrategy) {
    this.jwtIdentificationStrategy = jwtIdentificationStrategy;
  }

  public boolean executeJwtIdentification(DecodedJWT decodedJWT, String urlPath) {
    return this.jwtIdentificationStrategy.isJwtValid(decodedJWT, urlPath);
  }


}
