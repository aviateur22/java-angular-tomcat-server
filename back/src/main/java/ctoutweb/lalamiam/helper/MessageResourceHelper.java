package ctoutweb.lalamiam.helper;

import ctoutweb.lalamiam.config.ApiLanguageConfig;
import ctoutweb.lalamiam.model.ValidateLanguage;
import ctoutweb.lalamiam.util.PropertiesUtility;
import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import ctoutweb.lalamiam.util.message.Language;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Properties;

@Component
public class MessageResourceHelper {

  private final DynamicMessageSource messageSource;
  private final Properties messageExceptions;
  private final ValidateLanguage apiValidateLanguage;
  private static final Logger LOGGER = LogManager.getLogger();

  public MessageResourceHelper(
          DynamicMessageSource messageSource,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          ValidateLanguage validateLanguage
         ) {
    this.messageSource = messageSource;
    this.messageExceptions = messageExceptions;
    this.apiValidateLanguage = validateLanguage;
  }

  /**
   * Chargement des messages
   * @param resourceBaseName String - Nom du fichier de base de la resource message
   * @param userLanguage String - Language demandé par l'utilisateur
   */
  public void loadMessageResource(String resourceBaseName, String userLanguage) {

    // Controle du language
    String validateLanguage = validateUserLanguage(userLanguage);

    // Mise à jour du language global
    this.apiValidateLanguage.setLanguage(validateLanguage);

    // Chargement des messages
    this.messageSource.updateMessageSource(this.getMessageResourcePath(resourceBaseName, validateLanguage));

    // Chargment des messges exception
    Properties messages = PropertiesUtility.getProperties(this.getMessageExceptionName(validateLanguage));
    this.loadExceptionMessage(messages);
  }

  /**
   * Renvoie le path de la resource a charger
   * @param resourceBaseName String
   * @param language String
   * @return String
   */
  public String getMessageResourcePath(String resourceBaseName, String language) {
    final String BASE_FOLDER = "classpath:message/";
    return BASE_FOLDER + resourceBaseName +"_"+ language;
  }

  /**
   * Récuperation du nom du fichier exception à charger
   * @param language string - language validé
   * @return String
   */
  public String getMessageExceptionName(String language){
    return "message/exceptionMessage_"+language+".properties";
  }

  /**
   * Chargement des messages d'exception
   * @param exceptionMessagesToBeLoad Properties
   */
  public void loadExceptionMessage(Properties exceptionMessagesToBeLoad) {
    this.messageExceptions.clear();
    exceptionMessagesToBeLoad.entrySet().stream().forEach(entry->{
      this.messageExceptions.put(entry.getKey(), entry.getValue());
    });
  }

  /**
   * Valide le language demandé par l'utilisateur
   * @param userLanguage String - Language demandé par l'utilisateur
   * @return String - Renvoie le language validé
   */
  public String validateUserLanguage(String userLanguage) {
    final String DEFAULT_LANGUAGE = "fr";

    // Controlle language
    if(userLanguage == null || !Language.isLanguageValid(userLanguage)) {
      LOGGER.error(()->String.format("Le language demandé par l'utilisateur n'est pas valide. Sélection: %s", DEFAULT_LANGUAGE));
      return DEFAULT_LANGUAGE;
    }

    return userLanguage;

  }

}
