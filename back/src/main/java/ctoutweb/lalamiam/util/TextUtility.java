package ctoutweb.lalamiam.util;

import java.util.Random;

public class TextUtility {

  /**
   * Generation text aléatoire
   * @param textLength INTEGER - longueur du text
   * @return String
   */
  public static String generateText(int textLength) {
    Random rand = new Random();
    String str = rand.ints(48, 123)
            .filter(num->(num < 58 || num > 64) && (num < 91 || num > 96))
            .limit(textLength)
            .mapToObj(c->(char) c)
            .collect(StringBuffer::new , StringBuffer::append, StringBuffer::append)
            .toString();
    return str.toLowerCase();
  }

  /**
   * Génération INTEGER aléatoire
   * @param textLength Integer - Nombre de chiffre à générer
   * @return String
   */
  public static String generateInteger(int textLength) {
    Random rand = new Random();
    String str = rand.ints(0, 10)
            .limit(textLength)
            .mapToObj(Integer::toString)
            .collect(StringBuffer::new, StringBuffer::append, StringBuffer::append)
            .toString();
    return str.toLowerCase();
  }
}
