package ctoutweb.lalamiam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

@Configuration
public class ApplicationMessageConfig {
  private Properties emailParameterMessages = new Properties();
  private Properties exceptionMessages = new Properties();
  private Properties successMesages = new Properties();

  @Bean(name = "emailParameterMessages")
  public Properties getEmailParamterMessages() {
    return this.emailParameterMessages;
  }

  @Bean(name = "exceptionMessages")
  public Properties getExceptionMessages() {
    return this.exceptionMessages;
  }

  @Bean(name = "successMessages")
  public Properties getSuccessMesages() {
    return this.successMesages;
  }
}
