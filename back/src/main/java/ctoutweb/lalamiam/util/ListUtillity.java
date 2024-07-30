package ctoutweb.lalamiam.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;
import java.util.List;

public class ListUtillity {
  private static final Logger LOGGER = LogManager.getLogger();
  public static boolean areElementInText(String text, List<String> list) {
    return list.stream().anyMatch(listElement-> {
      LOGGER.debug(String.format("areElementInText: text: %s  Element: %s => resultat: %s" , text, listElement, text.contains(listElement)));
      return text.contains(listElement);
    });
  }

  public static boolean areListElementMatchesText(String text, List<String> list) {
    return list.stream().anyMatch(listElement-> {
      LOGGER.debug(String.format("areElementInText: text: %s  Element: %s => resultat: %s" , text, listElement, text.matches(listElement)));
      return text.matches(listElement);
    });
  }
  public static boolean areTextStartWithListElement(String text, List<String> list) {
    return list.stream().anyMatch(listElement-> {
      LOGGER.debug(String.format("areElementInText: text: %s  Element: %s => resultat: %s" , text, listElement, text.startsWith(listElement)));
      return text.startsWith(listElement);
    });
  }
  public static boolean areElementInSplitText(String splitCharac, String text, List<String> list) {
    return Arrays.stream(text.split(splitCharac))
            .flatMap(textElement-> list.stream()
                    .filter(listElement->textElement.contains(listElement)))
            .findAny()
            .isPresent();
  }
}
