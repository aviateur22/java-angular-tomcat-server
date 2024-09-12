package ctoutweb.lalamiam.util;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

public class TextUtililityTest {
  @Test
  public void replaceWordInText_should_replace_word() {

    String wordToreplace = "!%!name!%!";
    String word = "pupuce";
    String textToBeUpdated = "bonjour, comment vas tu !%!name!%!?";

    String textUpdated = TextUtility.replaceWordInText(textToBeUpdated, wordToreplace, word);

    String textExpected = "bonjour, comment vas tu pupuce?";
    Assertions.assertEquals(textExpected, textUpdated);
  }
}
