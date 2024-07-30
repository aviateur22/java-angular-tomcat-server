package ctoutweb.lalamiam.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.util.PropertiesUtility;
import org.springframework.stereotype.Component;

@Component
public class JwtDecode {
  public DecodedJWT decode(String token) {

    String jwtSecret = PropertiesUtility.getPropertyValue("application.properties", "jwt.secret.key");

    return JWT.require(Algorithm.HMAC256(jwtSecret))
            .build()
            .verify(token);
  }
}
