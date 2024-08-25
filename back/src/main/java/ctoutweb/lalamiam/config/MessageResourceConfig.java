package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
public class MessageResourceConfig {
  @Bean(name = "apiMessageSource")
  public MessageSource messageSource() {
    DynamicMessageSource dynamicMessageSource = new DynamicMessageSource();
    dynamicMessageSource.setBasename("classpath:message/loginMessage");
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
