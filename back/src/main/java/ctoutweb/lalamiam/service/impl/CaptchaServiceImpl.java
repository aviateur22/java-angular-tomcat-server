package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.ClientResponseCaptchaDto;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaType;
import ctoutweb.lalamiam.security.strategy.captcha.impl.CaptchaEnigme;
import ctoutweb.lalamiam.service.CaptchaService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URISyntaxException;

@Service
@PropertySource({"classpath:application.properties"})
public class CaptchaServiceImpl implements CaptchaService {
  private final PasswordEncoder passwordEncoder;

  @Value("${captcha.token}")
  private String captchaToken;

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
  public Boolean validateResponse(ClientResponseCaptchaDto clientResponseCaptcha) {

    if(clientResponseCaptcha == null)
      return false;

    // Ajout captcha token
    String responseClientWithCaptchaToken = CaptchaEnigme.addCaptchaSecretKeyToClientResponse(captchaToken, clientResponseCaptcha.clientResponse());
    boolean isResponseValid = passwordEncoder.matches(responseClientWithCaptchaToken, clientResponseCaptcha.captchaResponse());

    return isResponseValid;
  }

}
