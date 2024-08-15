package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.dto.CaptchaDto;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.dto.LoginDto;
import ctoutweb.lalamiam.dto.LoginResponseDto;
import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.model.RegisterResponse;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.service.CaptchaService;
import ctoutweb.lalamiam.service.impl.AuthServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final AuthServiceImpl authService;
  private final CaptchaService captchaService;

  public AuthController(AuthServiceImpl authService, CaptchaService captchaService) {
    this.authService = authService;
    this.captchaService = captchaService;
  }
  private static final Logger LOGGER = LogManager.getLogger();
  @PostMapping("/login")
  ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto login) {
    LoginResponseDto loginResponse = authService.login(login);
    return new ResponseEntity<>(loginResponse, HttpStatus.OK);
  }

  @PostMapping("/register")
  ResponseEntity<RegisterResponse> register(@RequestBody RegisterDto registerDto) {
    RegisterResponse registerResponse = authService.register(registerDto);
    return new ResponseEntity<RegisterResponse>(registerResponse, HttpStatus.CREATED);
  }

  @GetMapping("/logout/{userId}")
  ResponseEntity<String> logout(@PathVariable Long userId) {
    LOGGER.debug("logout");
    return new ResponseEntity<>(authService.logout(userId), HttpStatus.OK);
  }

  @GetMapping("/csrf")
  ResponseEntity<String> csrfToken() {
    return new ResponseEntity<>("CSRF TOKEN", HttpStatus.OK);
  }

  @GetMapping("/captcha")
  public ResponseEntity<CaptchaDto> getCaptcha() throws URISyntaxException, IOException {
    CaptchaData captcha = captchaService.generateCaptchaTest();

    return new ResponseEntity<>(CaptchaFactory.getCaptchaDto(captcha), HttpStatus.OK);
  }
}
