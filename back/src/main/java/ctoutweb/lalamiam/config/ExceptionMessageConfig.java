package ctoutweb.lalamiam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

@Configuration
public class ExceptionMessageConfig {

  private Properties exceptionMessages = new Properties();

  @Bean(name = "exceptionMessages")
  public Properties getExceptionMessages() {
    return this.exceptionMessages;
  }


}
