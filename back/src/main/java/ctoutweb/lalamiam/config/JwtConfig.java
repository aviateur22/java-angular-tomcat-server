package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.security.filter.FilterJwtHelper;
import ctoutweb.lalamiam.security.filter.FullJwtAuthFilter;
import ctoutweb.lalamiam.security.filter.PartialJwtAuthFilter;
import ctoutweb.lalamiam.security.jwt.JwtDecode;
import ctoutweb.lalamiam.security.jwt.JwtToUserPrincipal;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {

  private final FilterJwtHelper filterJwtHelper;
  private final JwtToUserPrincipal jwtToUserPrincipal;
  private final JwtDecode jwtDecode;

  public JwtConfig(FilterJwtHelper filterJwtHelper, JwtToUserPrincipal jwtToUserPrincipal, JwtDecode jwtDecode) {
    this.filterJwtHelper = filterJwtHelper;
    this.jwtToUserPrincipal = jwtToUserPrincipal;
    this.jwtDecode = jwtDecode;
  }

  @Bean
  public FullJwtAuthFilter fullJwtAuthFilter() {
    return new FullJwtAuthFilter(jwtToUserPrincipal, jwtDecode, filterJwtHelper);
  }

  @Bean
  public PartialJwtAuthFilter partialJwtAuthFilter() {
    return new PartialJwtAuthFilter(jwtDecode, filterJwtHelper);
  }
}
