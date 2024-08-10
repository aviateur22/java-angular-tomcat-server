package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.captcha.CaptchaData;

import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDateTime;

public interface CaptchaService {
  public CaptchaData generateCaptchaTest() throws URISyntaxException, IOException;

  public Boolean validateResponse(String clientResponse, String captchaResponse, LocalDateTime validityTime);
}
