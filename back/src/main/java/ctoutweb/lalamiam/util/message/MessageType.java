package ctoutweb.lalamiam.util.message;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;

public enum MessageType {
  LOGIN(0),
  REGISTER(1),
  USER_ACCOUNT(2),
  HOME(3),
  EXCEPTION(4);

  private int value;
  private MessageType(int value) {
    this.value = value;
  }

  public static File getFileMessage(MessageType type) throws IOException, URISyntaxException {

    return switch (type) {
      case LOGIN ->  loadFileFromResource("message/loginMessage.json");
      case REGISTER -> loadFileFromResource("message/registerMessage.json");
      case USER_ACCOUNT -> loadFileFromResource("message/userAccountMessage.json");
      case HOME ->  loadFileFromResource("message/homeMessage.json");
      case EXCEPTION -> loadFileFromResource("message/exceptionMessage.json");
    };
  }

  public static Map<String, String> extractMessageByLanguage(File messageFile, String language, String section) throws IOException {

    ObjectMapper objectMapper = new ObjectMapper();

    // Récupération des données intégral du fichier
    JsonNode jsonNode = objectMapper.readTree(messageFile);

    // Récupération des données liées a une section
    JsonNode target = jsonNode.path(section);

    Map<String, String> messagesMap = new HashMap<>();
    Iterator<Map.Entry<String, JsonNode>> fields = target.fields();

    while (fields.hasNext()) {
      Map.Entry<String, JsonNode> entry = fields.next();
      String messageKey = entry.getKey();
      JsonNode translations = entry.getValue();

      // Récuperation du message suivant un language
      JsonNode languageNode = translations.path(language);
      if (!languageNode.isMissingNode()) {
        messagesMap.put(messageKey, languageNode.asText());
      }
    }

    return messagesMap;
  }

  public static File loadFileFromResource(String filePath) throws IOException, URISyntaxException {
    // Load the file from the resources/message directory using ClassLoader
    URL resource = MessageType.class.getClassLoader().getResource(filePath);

    if (resource == null) {
      throw new IOException("File not found: " + filePath);
    }

    // Read the content of the file
    return new File(Objects.requireNonNull(resource).toURI());
  }
}
