package ctoutweb.lalamiam.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import ctoutweb.lalamiam.model.JwtIssue;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import ctoutweb.lalamiam.util.PropertiesUtility;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class JwtIssuer {

  /**
   * Generation JWT
   * @param user
   * @return
   */
  public JwtIssue issue(UserPrincipal user) {

    Long jwtValidity = Long.valueOf(PropertiesUtility.getPropertyValue("application.properties", "jwt.validity.hour"));
    String jwtSecret = PropertiesUtility.getPropertyValue("application.properties", "jwt.secret.key");
    String jwtIssuer = PropertiesUtility.getPropertyValue("application.properties", "jwt.issuer");
    String zoneId = PropertiesUtility.getPropertyValue("application.properties", "zone.id");

    Instant expiredAt = Instant.now().plus(Duration.ofHours(jwtValidity));
    byte[] timeNow = ("time now" +" " + System.currentTimeMillis()).getBytes();
    String jwtId = UUID.nameUUIDFromBytes(timeNow).toString();

    List<String> authorities = user.getAuthorities()
            .stream()
            .map(auth->auth.toString())
            .collect(Collectors.toList());

    String token = JWT.create()
            .withSubject(user.getUsername())
            .withJWTId(jwtId)
            .withIssuer(jwtIssuer)
            .withExpiresAt(expiredAt)
            .withClaim("id", user.getId())
            .withClaim("authorities", authorities)
            .sign(Algorithm.HMAC256(jwtSecret));

    return new JwtIssue(jwtId, token, LocalDateTime.ofInstant(expiredAt, ZoneId.of(zoneId)));
  }
}
