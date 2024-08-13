package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.dto.CaptchaDto;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.model.captcha.GenerateEnigmeData;
import ctoutweb.lalamiam.model.captcha.EnigmeData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaType;
import ctoutweb.lalamiam.security.strategy.captcha.impl.CaptchaCalculStrategy;
import ctoutweb.lalamiam.security.strategy.captcha.impl.CaptchaImageStrategy;
import ctoutweb.lalamiam.security.strategy.captcha.impl.CaptchaWordStrategy;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.time.LocalDateTime;

@Component
public class CaptchaFactory {

  private final CaptchaCalculStrategy captchaCalcul;
  private final CaptchaWordStrategy captchaWord;
  private final CaptchaImageStrategy captchaImage;
  private static CaptchaFactory instance;



  public CaptchaFactory(CaptchaCalculStrategy captchaCalcul, CaptchaWordStrategy captchaWord, CaptchaImageStrategy captchaImage) {
    this.captchaCalcul = captchaCalcul;
    this.captchaWord = captchaWord;
    this.captchaImage = captchaImage;
    instance = this;
  }

  public static CaptchaStrategy getCaptchaStrategy(CaptchaType captchaType) {
    return switch (captchaType) {
      case CALCULATE_ENIGME ->  instance.captchaCalcul;
      case WORD_ENIGME -> instance.captchaWord;
      case IMAGE_ENIGME -> instance.captchaImage;
    };

  }

  public static CaptchaData getCaptcha(String imageBase64, String imageMimeType, LocalDateTime validityTime, GenerateEnigmeData testData) {
    return new CaptchaData(
            imageBase64,
            imageMimeType,
            testData.getQuestion(),
            testData.getEnigme(),
            testData.getResponse(),
            validityTime
    );
  }

  /**
   * Generation des données pour une énigme de type text(calcul - recopie)
   * @param question
   * @param enigme String
   * @param response
   * @return
   */
  public static GenerateEnigmeData getDataTest(String question, String enigme, String response) {
    return new EnigmeData(question, enigme, response);
  }

  /**
   * Generation des données pour une énigme de type image
   * @param question
   * @param fileEnigme Path
   * @param response
   * @return
   */
  public static GenerateEnigmeData getDataTest(String question, Path fileEnigme, String response) {
    return new EnigmeData(question, fileEnigme, response);
  }

  public static CaptchaDto getCaptchaDto (CaptchaData captchaData){
    return new CaptchaDto(captchaData.image(), captchaData.mimeType(), captchaData.question(), captchaData.response());
  }
}
