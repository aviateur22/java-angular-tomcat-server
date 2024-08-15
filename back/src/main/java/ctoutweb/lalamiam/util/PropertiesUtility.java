package ctoutweb.lalamiam.util;

import java.io.InputStream;
import java.util.Properties;

public class PropertiesUtility {

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
}
