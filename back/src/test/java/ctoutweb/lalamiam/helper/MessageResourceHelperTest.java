package ctoutweb.lalamiam.helper;

import ctoutweb.lalamiam.model.ValidateLanguage;
import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Properties;

class MessageResourceHelperTest {
  @Mock
  DynamicMessageSource dynamicMessageSource;
  @Mock
  Properties messageException;

  @Mock
  Properties emailsParamMessages;

  @Mock
  ValidateLanguage validateLanguage;

  @BeforeEach
  void setUp(){
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void getMessageResourcePath() {
    MessageResourceHelper messageResourceHelper = new MessageResourceHelper(dynamicMessageSource, messageException, emailsParamMessages, validateLanguage);
    String baseResourceName = "messageResource";
    String validateLanguage = "fr";
    String resourcePath = messageResourceHelper.getFileResourceMessagePath(
            baseResourceName, validateLanguage
    );
    Assertions.assertEquals("classpath:message/"+baseResourceName+"_"+validateLanguage, resourcePath);
  }

  @Test
  void validateUserLanguage_should_load_fr_language() {
    MessageResourceHelper messageResourceHelper = new MessageResourceHelper(dynamicMessageSource, messageException, emailsParamMessages, validateLanguage);
    String language = messageResourceHelper.validateUserLanguage("fr");
    Assertions.assertEquals("fr", language);
  }

  @Test
  void validateUserLanguage_should_load_en_language() {
    MessageResourceHelper messageResourceHelper = new MessageResourceHelper(dynamicMessageSource, messageException, emailsParamMessages, validateLanguage);

    String language = messageResourceHelper.validateUserLanguage("en");
    Assertions.assertEquals("en", language);

  }

  @Test
  void validateUserLanguage_should_load_fr_because_user_language_not_exist() {
    MessageResourceHelper messageResourceHelper = new MessageResourceHelper(dynamicMessageSource, messageException, emailsParamMessages, validateLanguage);

    String language = messageResourceHelper.validateUserLanguage("eg");

    Assertions.assertEquals("fr", language);

  }

  @Test
  void validateUserLanguage_should_load_fr_because_user_language_is_null() {
    MessageResourceHelper messageResourceHelper = new MessageResourceHelper(dynamicMessageSource, messageException, emailsParamMessages, validateLanguage);

    String language = messageResourceHelper.validateUserLanguage(null);

    Assertions.assertEquals("fr", language);

  }
}