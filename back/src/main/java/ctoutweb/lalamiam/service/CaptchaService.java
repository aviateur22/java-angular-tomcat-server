package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.ClientResponseCaptchaDto;
import ctoutweb.lalamiam.model.captcha.CaptchaData;

import java.io.IOException;
import java.net.URISyntaxException;

public interface CaptchaService {
  public CaptchaData generateCaptchaTest() throws URISyntaxException, IOException;

  public Boolean validateResponse(ClientResponseCaptchaDto clientResponseCaptcha);
}
