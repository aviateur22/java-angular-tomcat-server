package ctoutweb.lalamiam.helper;

import ctoutweb.lalamiam.model.ValidateLanguage;
import ctoutweb.lalamiam.service.impl.ApplicationMessageServiceImpl;
import ctoutweb.lalamiam.util.message.DynamicMessageSource;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Properties;

import static ctoutweb.lalamiam.constant.ApplicationConstant.*;

class MessageResourceHelperTest {
  @Mock
  DynamicMessageSource dynamicMessageSource;
  @Mock
  Properties exceptionMessages;

  @Mock
  Properties emailsParamMessages;

  @Mock
  Properties successMessages;

  @Mock
  ValidateLanguage validateLanguage;

  @BeforeEach
  void setUp(){
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void getMessageResourcePath() {
    ApplicationMessageServiceImpl applicationMessageService = new ApplicationMessageServiceImpl(
            dynamicMessageSource,
            exceptionMessages,
            emailsParamMessages,
            successMessages,
            validateLanguage
    );

    String resourcePathCaluculated = applicationMessageService.getFileResourceMessagePath(EXCEPTION_MESSAGE_FILE);
    String resourcePathExpected = "classpath:" + EXCEPTION_MESSAGE_FILE.replace(".properties", "");

    Assertions.assertEquals(resourcePathExpected, resourcePathCaluculated);
  }

  @Test
  void validateUserLanguage_should_load_fr_language() {
    ApplicationMessageServiceImpl applicationMessageService = new ApplicationMessageServiceImpl(
            dynamicMessageSource,
            exceptionMessages,
            emailsParamMessages,
            successMessages,
            validateLanguage
    );

    String language = applicationMessageService.validateUserLanguage("fr");
    Assertions.assertEquals("fr", language);
  }

  @Test
  void validateUserLanguage_should_load_en_language() {
    ApplicationMessageServiceImpl applicationMessageService = new ApplicationMessageServiceImpl(
            dynamicMessageSource,
            exceptionMessages,
            emailsParamMessages,
            successMessages,
            validateLanguage
    );

    String language = applicationMessageService.validateUserLanguage("en");

    Assertions.assertEquals("en", language);

  }

  @Test
  void validateUserLanguage_should_load_fr_because_user_language_not_exist() {
    ApplicationMessageServiceImpl applicationMessageService = new ApplicationMessageServiceImpl(
            dynamicMessageSource,
            exceptionMessages,
            emailsParamMessages,
            successMessages,
            validateLanguage
    );

    String language = applicationMessageService.validateUserLanguage("eg");

    Assertions.assertEquals("fr", language);

  }

  @Test
  void validateUserLanguage_should_load_fr_because_user_language_is_null() {
    ApplicationMessageServiceImpl applicationMessageService = new ApplicationMessageServiceImpl(
            dynamicMessageSource,
            exceptionMessages,
            emailsParamMessages,
            successMessages,
            validateLanguage
    );
    String language = applicationMessageService.validateUserLanguage(null);

    Assertions.assertEquals("fr", language);

  }
}