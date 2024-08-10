package ctoutweb.lalamiam.security.strategy.captcha;

import ctoutweb.lalamiam.model.captcha.CaptchaData;

import java.io.IOException;
import java.net.URISyntaxException;

public interface CaptchaStrategy {
  public CaptchaData generateCaptcha() throws URISyntaxException, IOException;
}
