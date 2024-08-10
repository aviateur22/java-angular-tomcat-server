package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaType;
import ctoutweb.lalamiam.service.CaptchaService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDateTime;

@Service
public class CaptchaServiceImpl implements CaptchaService {
  private final PasswordEncoder passwordEncoder;

  public CaptchaServiceImpl(PasswordEncoder passwordEncoder) {
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public CaptchaData generateCaptchaTest() throws URISyntaxException, IOException {
    // Recuperation du type de captcha en mode random
    CaptchaType captchaType = CaptchaType.getRandomType();

    CaptchaStrategy captchaStrategy = CaptchaFactory.getCaptchaStrategy(captchaType);
    return captchaStrategy.generateCaptcha();
  }

  @Override
  public Boolean validateResponse(String clientResponse, String captchaResponse, LocalDateTime validityTime) {
    if(LocalDateTime.now().isAfter(validityTime))
      return false;

    boolean isResponseValid = passwordEncoder.matches(clientResponse, captchaResponse);

    return isResponseValid;
  }

}
