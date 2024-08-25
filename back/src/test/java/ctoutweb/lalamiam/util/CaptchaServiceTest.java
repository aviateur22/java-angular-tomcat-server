package ctoutweb.lalamiam.util;

import ctoutweb.lalamiam.model.captcha.GenerateEnigmeData;
import ctoutweb.lalamiam.security.strategy.captcha.impl.CaptchaImageStrategy;
import ctoutweb.lalamiam.service.ImageService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.context.MessageSource;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Properties;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class CaptchaServiceTest {

  @Mock
  ImageService imageService;

  @Mock
  PasswordEncoder passwordEncoder;

  @Mock
  Properties messageExceptions;



  @BeforeEach
  public void setUp() {
    MockitoAnnotations.openMocks(this);  // Initializes the mocks
  }

  @Test
  public void getImageTestData_should_find_images() throws URISyntaxException, IOException {
    CaptchaImageStrategy captchaService = new CaptchaImageStrategy(passwordEncoder, imageService, messageExceptions);
    when(passwordEncoder.encode(any(String.class))).thenReturn("test123");

    GenerateEnigmeData generateTestData = captchaService.getImageTestData();

    Assertions.assertEquals("test123", generateTestData.getResponse());
  }
}
