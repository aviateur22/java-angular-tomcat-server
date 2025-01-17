package ctoutweb.lalamiam.security.jwt;

import com.auth0.jwt.interfaces.DecodedJWT;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JwtToUserPrincipal {

  public UserPrincipal convert(DecodedJWT jwt) {
    List<SimpleGrantedAuthority> authorities = getGrantedAuthoritiesFromClaim(jwt);

    return UserPrincipal.UserPrincipalBuilder.anUserPrincipal()
            .withId(jwt.getClaim("id").asLong())
            .withAuthorities(authorities)
            .withEmail(jwt.getSubject())
            .build();
  }

  private List<SimpleGrantedAuthority> getGrantedAuthoritiesFromClaim(DecodedJWT jwt) {
    var claim = jwt.getClaim("authorities");

    if(claim.isNull() || claim.isMissing()) {
      return List.of();
    }
    return claim.asList(SimpleGrantedAuthority.class);
  }
}
