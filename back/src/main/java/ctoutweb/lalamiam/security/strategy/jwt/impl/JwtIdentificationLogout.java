package ctoutweb.lalamiam.security.strategy.jwt.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationStrategy;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class JwtIdentificationLogout implements JwtIdentificationStrategy {
  @Override
  public Boolean isJwtValid(DecodedJWT jwt, String urlPath) throws AuthException {
    Long userId = jwt.getClaim("id").asLong();

    // Récupération userId depuis urlPath
    Long userIdFromUrl = getUserIdFromUrl(urlPath);

    if (userId != userIdFromUrl) throw new AuthException("echec de deconnexion", HttpStatus.BAD_REQUEST);

    return true;
  }

  /**
   * Récuperation userId depuis url de logout
   * @param urlPath String - Url logout
   * @return Long
   */
  private Long getUserIdFromUrl(String urlPath) throws AuthException {
    return Arrays.stream(urlPath.split("/"))
      .reduce((first, second)-> second)
      .map(Long::valueOf)
      .orElseThrow(()-> new AuthException("Echec de deconnexion", HttpStatus.BAD_REQUEST));
  }
}
