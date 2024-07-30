package ctoutweb.lalamiam.security.strategy.jwt;

import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.exception.AuthException;

public interface JwtIdentificationStrategy {
  Boolean isJwtValid(DecodedJWT jwt, String urlPath) throws AuthException;
}
