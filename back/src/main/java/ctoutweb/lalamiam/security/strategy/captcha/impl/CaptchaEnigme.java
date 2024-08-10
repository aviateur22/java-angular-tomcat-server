package ctoutweb.lalamiam.security.strategy.captcha.impl;

import ctoutweb.lalamiam.model.ImageType;
import ctoutweb.lalamiam.service.ImageService;
import org.springframework.security.crypto.password.PasswordEncoder;

public abstract class CaptchaEnigme {
  protected final ImageType IMAGE_TYPE = ImageType.PNG;
  protected final int IMAGE_WIDTH = 300;
  protected final int IMAGE_HEIGHT = 100;

  protected final PasswordEncoder passwordEncoder;
  protected final ImageService imageService;
  protected CaptchaEnigme(PasswordEncoder passwordEncoder, ImageService imageService) {
    this.passwordEncoder = passwordEncoder;
    this.imageService = imageService;
  }
}
