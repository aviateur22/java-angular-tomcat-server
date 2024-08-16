package ctoutweb.lalamiam.util.message;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

@Component
public class Message {

  private final Map<String, String> apiResponseMessages;

  private final  Map<String, String> annotationMessages;

  private final Map<String, String> exceptionMessages;

  public Message(
          @Qualifier("apiResponseMessage" )Map<String, String> apiResponseMessages,
          @Qualifier("annotationMessage")  Map<String, String> annotationMessages,
          @Qualifier("exceptionMessage") Map<String, String> exceptionMessages
  ) {
    this.apiResponseMessages = apiResponseMessages;
    this.annotationMessages = annotationMessages;
    this.exceptionMessages = exceptionMessages;
  }

  /**
   * Récuperation d'un message parmis les messages de dispo
   * @param messageName
   * @param messageType
   * @return
   */
  public static String getMessage(String messageName, String messageType) {
    return null;
  }

  /**
   * Chargement des messages pouvant etre renvoyé vers IHM
   */
  public void loadMessages(MessageType type, String language) throws IOException, URISyntaxException {

    // Chargement réponse API
    File messageFile = MessageType.getFileMessage(type);

    // Chargement mesage exception
    File exceptionFile = MessageType.getFileMessage(MessageType.EXCEPTION);

    String annotationSectionName = MessageSection.ANNOTATION_RESPONSE_MESSAGE.getSectionName();
    String apiResponseSectionName = MessageSection.API_RESPONSE_MESSAGE.getSectionName();
    String exceptionSectionName = MessageSection.EXCEPTION_RESPONSE_MESSAGE.getSectionName();

    Map<String, String> apiResponseMessageTemp  = MessageType.extractMessageByLanguage(messageFile, language, apiResponseSectionName);
    Map<String, String> annotationMessageTemp  = MessageType.extractMessageByLanguage(messageFile, language, annotationSectionName);
    Map<String, String> exceptionMessageTemp  = MessageType.extractMessageByLanguage(exceptionFile, language, exceptionSectionName);

    this.addMessage(apiResponseMessageTemp, annotationMessageTemp, exceptionMessageTemp);
  }

  /**
   * Chargement des messages
   * @param apiResponseMessageTemp
   * @param annotationMessageTemp
   * @param exceptionMessageTemp
   * @throws IOException
   */
  private void addMessage(
          Map<String, String> apiResponseMessageTemp,
          Map<String, String> annotationMessageTemp,
          Map<String, String> exceptionMessageTemp) throws IOException {

    apiResponseMessageTemp.entrySet().stream().forEach(data->{
      this.apiResponseMessages.put(data.getKey(), data.getValue());
    });

    annotationMessageTemp.entrySet().stream().forEach(data->{
      this.annotationMessages.put(data.getKey(), data.getValue());
    });

    exceptionMessageTemp.entrySet().stream().forEach(data->{
      this.exceptionMessages.put(data.getKey(), data.getValue());
    });
  }

  public Map<String, String> getApiResponseMessages() {
    return this.apiResponseMessages;
  }

  public Map<String, String> getAnnotationMessages() {
    return this.annotationMessages;
  }

  public Map<String, String> getExceptionMessages() {
    return this.exceptionMessages;
  }



}
