package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.security.csrf.CookieCsrfTokenRepository;
import ctoutweb.lalamiam.security.csrf.CustomCsrfTokenRepository;
import ctoutweb.lalamiam.security.filter.*;
import ctoutweb.lalamiam.security.jwt.JwtDecode;
import ctoutweb.lalamiam.security.jwt.JwtToUserPrincipal;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

  private final FilterJwtHelper filterJwtHelper;
  private final JwtToUserPrincipal jwtToUserPrincipal;
  private final JwtDecode jwtDecode;

  public FilterConfig(FilterJwtHelper filterJwtHelper, JwtToUserPrincipal jwtToUserPrincipal, JwtDecode jwtDecode) {
    this.filterJwtHelper = filterJwtHelper;
    this.jwtToUserPrincipal = jwtToUserPrincipal;
    this.jwtDecode = jwtDecode;
  }

  /**
   * CsrfTokenRepository pour les cookies
   * @return
   */
  @Bean
  public CustomCsrfTokenRepository customCookieCsrfTokenRepository() {
    return new CookieCsrfTokenRepository();
  }

  /**
   * Filtre pour verifier Cookies + Header
   * @return CookieCsrfFilter
   */
  @Bean
  public CookieCsrfFilter cookieCsrfFilter() {
    return new CookieCsrfFilter(customCookieCsrfTokenRepository());
  }

  /**
   * Filtre Controlle JWT
   * @return FullJwtAuthFilter
   */
  @Bean
  public FullJwtAuthFilter fullJwtAuthFilter() {
    return new FullJwtAuthFilter(jwtToUserPrincipal, jwtDecode, filterJwtHelper);
  }

  /**
   * Filtre Controlle JWT
   * @return PartialJwtAuthFilter
   */
  @Bean
  public PartialJwtAuthFilter partialJwtAuthFilter() {
    return new PartialJwtAuthFilter(jwtDecode, filterJwtHelper);
  }

  /**
   * Filtre de sortie pour supprimer les cookies
   * @return OnLogoutFilter
   */
  @Bean
  public OnLogoutFilter getLogoutFilter() {
    return new OnLogoutFilter();
  }
}
