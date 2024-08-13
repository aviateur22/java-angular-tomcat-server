package ctoutweb.lalamiam.security.strategy.captcha.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.model.captcha.GenerateEnigmeData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.awt.image.BufferedImage;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Random;

@Component
public class CaptchaCalculStrategy extends CaptchaEnigme implements CaptchaStrategy {
  protected final PasswordEncoder passwordEncoder;
  protected final ImageService imageService;
  public CaptchaCalculStrategy(PasswordEncoder passwordEncoder, ImageService imageService) {
    super(passwordEncoder, imageService);
    this.passwordEncoder = passwordEncoder;
    this.imageService = imageService;
  }
  @Override
  public CaptchaData generateCaptcha() {

    GenerateEnigmeData testData = getCalculateTestData();

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
   * Generation des données pour un test de calcul
   * @return GenerateTestData
   */
  private GenerateEnigmeData getCalculateTestData() {
    String question = "Calculer le bon résultat";
    Random random = new Random();
    final int RANDOM_NUMBER_1 = random.nextInt(10);
    final int RANDOM_NUMBER_2 = random.nextInt(10);
    final char[] OPERATIONS = new char[]{'+', '-', '*'};
    final char RANDOM_OPERATION = OPERATIONS[random.nextInt(OPERATIONS.length)];

    String calculEnigme = String.format("%02d %c %02d", RANDOM_NUMBER_1, RANDOM_OPERATION, RANDOM_NUMBER_2);

    int calculReponse = switch (RANDOM_OPERATION) {
      case '+' -> RANDOM_NUMBER_1 + RANDOM_NUMBER_2;
      case '-' -> RANDOM_NUMBER_1 - RANDOM_NUMBER_2;
      case '*' -> RANDOM_NUMBER_1 * RANDOM_NUMBER_2;
      default -> throw new AuthException("Erreur config captcha", HttpStatus.INTERNAL_SERVER_ERROR);
    };

    return CaptchaFactory.getDataTest(
            question,
            calculEnigme,
            passwordEncoder.encode(String.valueOf(calculReponse)));
  }
}
