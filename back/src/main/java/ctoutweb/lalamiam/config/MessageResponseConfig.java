package ctoutweb.lalamiam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * Map pour stocker les differents message devant etre renvoyé vers IHM
 */
@Configuration
public class MessageResponseConfig {

  @Bean(name = "apiResponseMessage")
  public Map<String, String> getApiResponseMessage() {
    return new HashMap<>();
  }

  @Bean(name = "annotationMessage")
  public Map<String, String> getAnnotationMessage() {
    return new HashMap<>();
  }

  @Bean(name = "exceptionMessage")
  public Map<String, String> getExceptionMessage() {
    return new HashMap<>();
  }
}
