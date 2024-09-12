package ctoutweb.lalamiam.service;

/**
 * Gestion des messages renvoyé au client
 */
public interface ApplicationMessageService {

  /**
   * Validation du language client
   * @param userRequestedLanguage String - Language demandé par le client
   * @return String - Language validé
   */
  public String validateUserLanguage(String userRequestedLanguage);

  /**
   * Mise a jour du language pour la réponse client
   * @param validatedLanguage String - Language validé pour la réponse
   */
  public void setValidatedLanguage(String validatedLanguage);

  /**
   * Chargement de tous les messages pour la réponse client
   * @param userRequestedLanguage String - Language demandé par le client
   */
  public void loadApplicationMessages(String userRequestedLanguage);

  /**
   * Renvoie la valeur du message à partir de sa clé
   * @param messageKey String - Clé du message
   * @return String - Message
   */
  public String getMessage(String messageKey);
}
