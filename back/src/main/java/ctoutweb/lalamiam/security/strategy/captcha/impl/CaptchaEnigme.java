package ctoutweb.lalamiam.security.strategy.captcha.impl;

import ctoutweb.lalamiam.model.ImageType;
import ctoutweb.lalamiam.service.ImageService;
import ctoutweb.lalamiam.util.PropertiesUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.password.PasswordEncoder;
public abstract class CaptchaEnigme {
  private static final Logger LOGGER = LogManager.getLogger();
  protected final ImageType IMAGE_TYPE = ImageType.PNG;
  protected final int IMAGE_WIDTH = 300;
  protected final int IMAGE_HEIGHT = 100;
  protected final PasswordEncoder passwordEncoder;
  protected final ImageService imageService;
  protected CaptchaEnigme(PasswordEncoder passwordEncoder, ImageService imageService) {
    this.passwordEncoder = passwordEncoder;
    this.imageService = imageService;
  }

  /**
   * Ajout du token captcha a la réponse
   * @param captchaResponse String
   * @return String
   */
  public String addCaptchaSecretKeyToCaptchaResponse(String captchaToken, String captchaResponse) {
    LOGGER.debug(captchaToken);
    return captchaToken +"||"+ captchaResponse;
  }

  /**
   * Ajout du token captcha a la réponse client
   * @param clientResponse String
   * @return String
   */
  public static String addCaptchaSecretKeyToClientResponse(String captchaToken, String clientResponse) {
    LOGGER.debug(captchaToken);
    return captchaToken + "||" + clientResponse;
  }
}
