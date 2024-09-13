package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.model.ValidateLanguage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static ctoutweb.lalamiam.constant.ApplicationConstant.*;

/**
 * Permets d'enregistrer la Langue retenu pour envoyer la réponse client
 * Par default ca valeur est DEFAULT_LANGUAGE
 */
@Configuration
public class ValidateLanguageConfig {
  private ValidateLanguage language = new ValidateLanguage(DEFAULT_LANGUAGE);

  @Bean(name = "validateLanguage")
  public ValidateLanguage getLanguage() {
    return this.language;
  }
}
