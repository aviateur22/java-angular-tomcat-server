package ctoutweb.lalamiam.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Properties;

public class PropertiesUtility {
  private static final Logger LOGGER = LogManager.getLogger();

  /**
   * Récupération d'un valeur d'une propriété
   * @param fileName  String - Ficher properties
   * @param propertyName String - Clé dela propriété
   * @return String
   */
  public static String getPropertyValue(String fileName, String propertyName) {
    try (InputStream input = PropertiesUtility.class.getClassLoader().getResourceAsStream(fileName)) {
      if (input == null) {
          System.out.println("fichier " + fileName + "non présent");
          return null;
      }

      Properties properties = new Properties();
      properties.load(input);

      return properties.getProperty(propertyName);

    } catch (Exception ex) {
      ex.printStackTrace();
      return null;
    }
  }

  /**
   * Chargement des propriétés d'un ficher .properties
   * @param fileName String - Nom du fichier properties
   * @return Properties
   */
  public static Properties getProperties(String fileName) {

    try (InputStream input = PropertiesUtility.class.getClassLoader().getResourceAsStream(fileName)) {

      if (input == null) {
        LOGGER.info(String.format("Aucun fichier de propriété %s de disponible", fileName));
        return null;
      }

      // Chargement des données avec un encodage en UTF-8
      try (InputStreamReader reader = new InputStreamReader(input, StandardCharsets.UTF_8)) {
        Properties properties = new Properties();
        properties.load(reader);

        return properties;
      }
    } catch (IOException exception) {
      throw new RuntimeException(exception);
    }
  }
}
