package ctoutweb.lalamiam.security.strategy.jwt.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.UserEntityFactory;
import ctoutweb.lalamiam.repository.JwtRepository;
import ctoutweb.lalamiam.repository.entity.JwtEntity;
import ctoutweb.lalamiam.security.strategy.jwt.JwtIdentificationStrategy;
import ctoutweb.lalamiam.security.jwt.JwtDecode;
import org.springframework.stereotype.Component;

@Component
public class JwtIdentificationStandard implements JwtIdentificationStrategy {

  private final JwtRepository jwtRepository;
  private final JwtDecode jwtDecode;

  public JwtIdentificationStandard(JwtRepository jwtRepository, JwtDecode jwtDecode) {
    this.jwtRepository = jwtRepository;
    this.jwtDecode = jwtDecode;
  }

  @Override
  public Boolean isJwtValid(DecodedJWT jwt, String urlPath) throws AuthException {

    Long userId = jwt.getClaim("id").asLong();

    String jwtToken = jwt.getToken();

    String jwtId = jwt.getId();

    JwtEntity findJwt = jwtRepository.findOneByUser(UserEntityFactory.getUserEntity(userId)).orElse(null);

    return (findJwt != null && findJwt.getJwtId().equals(jwtId) && findJwt.getIsValid() == true && findJwt.getJwtToken().equals(jwtToken));
  }
}
