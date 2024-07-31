package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.security.csrf.CookieCsrfTokenRepository;

import ctoutweb.lalamiam.security.csrf.CustomCsrfTokenRepository;
import ctoutweb.lalamiam.security.filter.CookieCsrfFilter;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class CsrfConfig {


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
}
