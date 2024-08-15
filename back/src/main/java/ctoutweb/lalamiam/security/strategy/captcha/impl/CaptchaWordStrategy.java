package ctoutweb.lalamiam.security.strategy.captcha.impl;

import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.model.captcha.GenerateEnigmeData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.service.ImageService;
import ctoutweb.lalamiam.util.TextUtility;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.awt.image.BufferedImage;
import java.time.LocalDateTime;
import java.util.Base64;

@Component
@PropertySource({"classpath:application.properties"})
public class CaptchaWordStrategy extends CaptchaEnigme implements CaptchaStrategy {
  @Value("${captcha.token}")
  private String captchaToken;
  private final PasswordEncoder passwordEncoder;
  private final ImageService imageService;

  public CaptchaWordStrategy(PasswordEncoder passwordEncoder, ImageService imageService) {
    super(passwordEncoder, imageService);
    this.passwordEncoder = passwordEncoder;
    this.imageService = imageService;
  }

  @Override
  public CaptchaData generateCaptcha() {

    GenerateEnigmeData testData = getWordTestData();

    BufferedImage image = imageService.createImageFromText(
            testData.getEnigme(),
            IMAGE_HEIGHT,
            IMAGE_WIDTH
    );

    String imageMimeType = imageService.mimeType(IMAGE_TYPE);
    byte[] imageByteFormat = imageService.convertImage(image, IMAGE_TYPE);
    String imageBase64Format = Base64.getEncoder().encodeToString(imageByteFormat);
    return CaptchaFactory.getCaptcha(imageBase64Format, imageMimeType, LocalDateTime.now().plusMinutes(15), testData);
  }

  /**
   * Generation des données pour un test de recopie de mot
   * @return
   */
  private GenerateEnigmeData getWordTestData() {
    final String question = "Recopiez le mot";
    final int RANDOM_TEXT_LENGTH = 9;
    String wordEnigme = TextUtility.generateText(RANDOM_TEXT_LENGTH);
    String wordResponse = wordEnigme;
    return CaptchaFactory.getDataTest(
            question,
            wordEnigme,
            passwordEncoder.encode(this.addCaptchaSecretKeyToCaptchaResponse(captchaToken, wordResponse)));
  }
}
