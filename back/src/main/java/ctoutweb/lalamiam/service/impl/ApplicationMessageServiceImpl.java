package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.model.ValidateLanguage;
import ctoutweb.lalamiam.service.ApplicationMessageService;
import ctoutweb.lalamiam.util.PropertiesUtility;
import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import ctoutweb.lalamiam.util.message.Language;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import static ctoutweb.lalamiam.constant.ApplicationConstant.*;
import static ctoutweb.lalamiam.util.TextUtility.*;

import java.util.Properties;

@Service
public class ApplicationMessageServiceImpl implements ApplicationMessageService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final DynamicMessageSource validatorMessage;
  private final Properties exceptionMessages;
  private final Properties emailParameterMessages;
  private final Properties successMessages;
  private final ValidateLanguage validatedRequestLanguage;

  /**
   * Text a remplacer dans les URL
   */
  private final String wordToReplace = "!%!language!%!";

  public ApplicationMessageServiceImpl(
          DynamicMessageSource validatorMessage,
          @Qualifier("exceptionMessages") Properties exceptionMessages,
          @Qualifier("emailParameterMessages") Properties emailParameterMessages,
          @Qualifier("successMessages") Properties successMessages,
          ValidateLanguage apiValidateLanguage
  ) {
    this.validatorMessage = validatorMessage;
    this.exceptionMessages = exceptionMessages;
    this.emailParameterMessages = emailParameterMessages;
    this.successMessages = successMessages;
    this.validatedRequestLanguage = apiValidateLanguage;
  }

  /**
   * Chargement des messages pour la
   */
  @Override
  public void loadApplicationMessages(String userLanguage) {
    // Controle du language
    String validateLanguage = validateUserLanguage(userLanguage);

    // Mise a jour du language demandé pour la requête
    setValidatedLanguage(validateLanguage);

    this.loadValidatorResourceMessage(validateLanguage);
    this.loadEmailParamMessages(validateLanguage);
    this.loadSuccessMessages(validateLanguage);
    this.loadExceptionMessages(validateLanguage);
  }

  /**
   * Mise a jour du language pour la réponse API
   * @param validateLanguage String - Language validé
   */
  @Override
  public void setValidatedLanguage(String validateLanguage) {
    // Mise à jour du language global
    this.validatedRequestLanguage.setLanguage(validateLanguage);
  }

  /**
   * Chargement des messages d'exception
   * @param validateLanguage String language
   */
  private void loadExceptionMessages(String validateLanguage) {
    // Mise à jour du path du fichier à charger
    String filePath = replaceWordInText(EXCEPTION_MESSAGE_FILE, wordToReplace, validateLanguage);

    Properties exceptionMessagesToBeLoad = PropertiesUtility.getProperties(filePath);
    this.exceptionMessages.clear();
    exceptionMessagesToBeLoad.entrySet().stream().forEach(entry->{
      this.exceptionMessages.put(entry.getKey(), entry.getValue());
    });
  }

  /**
   * Chargement des messages sucess de l'api
   * @param validateLanguage String
   */
  private void loadSuccessMessages(String validateLanguage) {
    // Mise à jour du path du fichier à charger
    String filePath = replaceWordInText(SUCCESS_MESSAGE_FILE, wordToReplace, validateLanguage);

    Properties successMessagesToBeLoad = PropertiesUtility.getProperties(filePath);
    this.successMessages.clear();
    successMessagesToBeLoad.entrySet().stream().forEach(entry->{
      this.successMessages.put(entry.getKey(), entry.getValue());
    });
  }

  /**
   * Chargement des messages parametres d'un email (Sujet, ...)
   * @param validateLanguage String
   */
  private void loadEmailParamMessages(String validateLanguage) {
    // Mise à jour du path du fichier à charger
    String filePath = replaceWordInText(EMAIL_PARAM_MESSAGE_FILE, wordToReplace, validateLanguage);

    Properties emailParameterMessagesToBeLoad = PropertiesUtility.getProperties(filePath);
    this.emailParameterMessages.clear();
    emailParameterMessagesToBeLoad.entrySet().stream().forEach(entry->{
      this.emailParameterMessages.put(entry.getKey(), entry.getValue());
    });
  }

  /**
   * Chargement des messages pour @Javax.validation.constraint.message
   * @param validateLanguage String - Language demandé par l'utilisateur
   */
  public void loadValidatorResourceMessage(String validateLanguage) {
    String filePath = replaceWordInText(VALIDATOR_ERROR_MESSAGE_FILE, wordToReplace, validateLanguage);

    // Mise a jour de la resource et chargement des messages
    this.validatorMessage.updateMessageSource(getFileResourceMessagePath(filePath));

  }

  /**
   * Renvoie le path de la resource a charger
   * @param resourceBaseName String
   * @return String
   */
  public String getFileResourceMessagePath(String resourceBaseName) {
    final String BASE_FOLDER = "classpath:";
    final String stringToRemove = ".properties";
    return (BASE_FOLDER + resourceBaseName).replace(stringToRemove,"");
  }

  /**
   * Valide le language demandé par l'utilisateur
   * @param userLanguage String - Language demandé par l'utilisateur
   * @return String - Renvoie le language validé
   */
  @Override
  public String validateUserLanguage(String userLanguage) {

    // Controlle language
    if(userLanguage == null || !Language.isLanguageValid(userLanguage)) {
      LOGGER.debug(()->String.format("Le language demandé par l'utilisateur n'est pas valide. Sélection: %s", DEFAULT_LANGUAGE));
      return DEFAULT_LANGUAGE;
    }
    LOGGER.debug(()->String.format("Language selectionné OK : %s", userLanguage));

    return userLanguage;
  }

  /**
   * Renvoie d'un message
   * @param messageKey
   * @return String
   */
  @Override
  public String getMessage(String messageKey) {
    String message = successMessages.getProperty(messageKey);
    if(message != null)
      return message;

    message = exceptionMessages.getProperty(messageKey);
    if(message != null)
      return message;

    message = emailParameterMessages.getProperty(messageKey);
    if(message != null)
      return message;

    return null;
  }
}
