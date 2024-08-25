package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.model.ValidateLanguage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiLanguageConfig {
  private final String DEFAULT_LANGUAGE = "fr";
  private ValidateLanguage language = new ValidateLanguage(DEFAULT_LANGUAGE);

  @Bean(name = "validateLanguage")
  public ValidateLanguage getLanguage() {
    return this.language;
  }
}
