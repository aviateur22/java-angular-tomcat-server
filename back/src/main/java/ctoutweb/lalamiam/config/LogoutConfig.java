package ctoutweb.lalamiam.config;


import ctoutweb.lalamiam.security.filter.OnLogoutFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LogoutConfig {


  @Bean
  public OnLogoutFilter getLogoutFilter() {
    return new OnLogoutFilter();
  }
}
