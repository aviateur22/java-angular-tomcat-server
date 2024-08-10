package ctoutweb.lalamiam.security.strategy.captcha;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URISyntaxException;

@Component
public class CaptchaContext {
  private CaptchaStrategy captchaStrategy;
  public void SetCaptchaStrategy(CaptchaStrategy  captchaStrategy) {
    this.captchaStrategy = captchaStrategy;
  }

  public void ExecuteCaptchaStrategy() throws URISyntaxException, IOException {
    this.captchaStrategy.generateCaptcha();
  }
}
