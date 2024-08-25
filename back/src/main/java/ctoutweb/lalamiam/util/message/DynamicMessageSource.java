package ctoutweb.lalamiam.util.message;

import org.springframework.context.support.ReloadableResourceBundleMessageSource;

public class DynamicMessageSource extends ReloadableResourceBundleMessageSource {
  /**
   * Mise a jour de la resource des messages
   * @param messageSource
   */
  public void updateMessageSource(String messageSource) {
    clearCache();
    super.setBasename(messageSource);
  }
}
