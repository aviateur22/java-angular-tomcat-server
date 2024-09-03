package ctoutweb.lalamiam.service.impl;

import org.springframework.context.MessageSource;

import java.util.Properties;

public abstract class BaseService {
  private final MessageSource messageSource;
  private final Properties messageExceptions;

  protected BaseService(
          MessageSource messageSource,
          Properties messageExceptions) {
    this.messageSource = messageSource;
    this.messageExceptions = messageExceptions;
  }

  /**
   * Renvoie le contenu d'un message
   * @param messageKey String - clé du message
   * @return String
   */
  public String getApiMessage(String messageKey) {
    return messageSource.getMessage(messageKey, null, null);
  }

  /**
   * Renvoie un message exception
   * @param messageKey String
   * @return String
   */
  public String getExceptionMessage(String messageKey) {
    return messageExceptions.getProperty(messageKey);
  }
}
