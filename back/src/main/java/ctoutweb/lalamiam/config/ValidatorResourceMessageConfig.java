package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

/**
 * Gestion des messages de @Javax.validation.constraint.message
 * Cette classe permets de charger les messages de validation à partir d'un fichier properties.
 *
 * ex:
 * @NotNull(message = "{email.missing}")
 * @NotBlank(message = "{email.missing}")
 * @Email(message = "{email.bad.format}")
 * String email,
 */
@Configuration
public class ValidatorResourceMessageConfig {
  @Bean
  public MessageSource messageSource() {
    DynamicMessageSource dynamicMessageSource = new DynamicMessageSource();
    // Par default le fichier chargé est: loginMessage
    dynamicMessageSource.setBasename("classpath:message/validatorErrorMessage");
    dynamicMessageSource.setDefaultEncoding("UTF-8");
    return dynamicMessageSource;
  }

  @Bean
  public LocalValidatorFactoryBean getValidator() {
    LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
    bean.setValidationMessageSource(messageSource());
    return bean;
  }
}
