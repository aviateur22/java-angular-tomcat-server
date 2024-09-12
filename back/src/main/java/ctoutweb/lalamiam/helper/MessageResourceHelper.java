package ctoutweb.lalamiam.helper;

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
  private final Properties emailParameterMessages;
  private final ValidateLanguage apiValidateLanguage;
  private static final Logger LOGGER = LogManager.getLogger();

  public MessageResourceHelper(
          DynamicMessageSource messageSource,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("emailParameterMessages") Properties emailParameterMessages,
          ValidateLanguage validateLanguage
         ) {
    this.messageSource = messageSource;
    this.messageExceptions = messageExceptions;
    this.apiValidateLanguage = validateLanguage;
    this.emailParameterMessages = emailParameterMessages;
  }

  /**
   * Chargement des messages pour @Javax.validation.constraint.message
   * @param resourceBaseName String - Nom du fichier de base de la resource message
   * @param userLanguage String - Language demandé par l'utilisateur
   */
  public void loadValidatorResourceMessage(String resourceBaseName, String userLanguage) {

    // Controle du language
    String validateLanguage = validateUserLanguage(userLanguage);

    // Mise à jour du language global
    this.apiValidateLanguage.setLanguage(validateLanguage);

    // Chargement des messages
    this.messageSource.updateMessageSource(this.getFileResourceMessagePath(resourceBaseName, validateLanguage));

    // Chargment des messges exception
    Properties messages = PropertiesUtility.getProperties(this.getMessageExceptionName(validateLanguage));
    this.loadExceptionMessage(messages);

    // Chargement des message de l'email
    Properties emailParamMessages = PropertiesUtility.getProperties(this.getEmailParamFileName(validateLanguage));
    this.loadEmailParameterMessage(emailParamMessages);
  }

  /**
   * Renvoie le path de la resource a charger
   * @param resourceBaseName String
   * @param language String
   * @return String
   */
  public String getFileResourceMessagePath(String resourceBaseName, String language) {
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
   * Récuperation du nom du fichier email à charger
   * @param language string - language validé
   * @return String
   */
  public String getEmailParamFileName(String language) {
    return "message/emailParameterMessage_"+language+".properties";
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
   * Chargement des messages mail
   * @param emailParameterMessagesToBeLoad Properties
   */
  public void loadEmailParameterMessage(Properties emailParameterMessagesToBeLoad) {
    this.emailParameterMessages.clear();
    emailParameterMessagesToBeLoad.entrySet().stream().forEach(entry->{
      this.emailParameterMessages.put(entry.getKey(), entry.getValue());
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
      LOGGER.debug(()->String.format("Le language demandé par l'utilisateur n'est pas valide. Sélection: %s", DEFAULT_LANGUAGE));
      return DEFAULT_LANGUAGE;
    }
    LOGGER.debug(()->String.format("Language selectionné OK : %s", userLanguage));
    return userLanguage;

  }

}
