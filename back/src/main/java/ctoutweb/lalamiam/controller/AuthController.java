package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.dto.*;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.helper.MessageResourceHelper;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.service.ApplicationMessageService;
import ctoutweb.lalamiam.service.CaptchaService;
import ctoutweb.lalamiam.service.impl.AuthServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Validator;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/auth")
public class AuthController extends BaseController {
  private final AuthServiceImpl authService;
  private final CaptchaService captchaService;
  private final ApplicationMessageService applicationMessageService;

  public AuthController(
          MessageResourceHelper messageSourceHelper,
          Validator validator,
          AuthServiceImpl authService,
          CaptchaService captchaService,
          ApplicationMessageService applicationMessageService) {
    super(validator);
    this.authService = authService;
    this.captchaService = captchaService;
    this.applicationMessageService = applicationMessageService;
  }
  private static final Logger LOGGER = LogManager.getLogger();
  @PostMapping("/login")
  ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto login) {

    // Chargement des messages
    applicationMessageService.loadApplicationMessages(login.language());

    LoginResponseDto loginResponse = authService.login(login);

    return new ResponseEntity<>(loginResponse, HttpStatus.OK);
  }

  @PostMapping("/register")
  ResponseEntity<MessageResponse> register(@RequestBody RegisterDto registerDto)  {
    // Chargement des messages
    applicationMessageService.loadApplicationMessages(registerDto.language());

    //validation response captcha client
    validateInputData(registerDto.captchaClientResponseDto());

    validateInputData(registerDto);

    MessageResponse messageResponse = authService.register(registerDto);

    return new ResponseEntity<MessageResponse>(messageResponse, HttpStatus.CREATED);
  }

  @GetMapping("/logout/language/{language}/user-id/{userId}")
  ResponseEntity<MessageResponse> logout(@PathVariable String language, @PathVariable Long userId) {
    // Chargement des messages
    applicationMessageService.loadApplicationMessages(language);

    return new ResponseEntity<>(authService.logout(userId), HttpStatus.OK);
  }

  @PostMapping("/account-activation")
  ResponseEntity<ActivateAccountResponseDto> activateAccount(@RequestBody ActivateAccountDto activateAccount) {
    // Chargement des messages
    applicationMessageService.loadApplicationMessages(activateAccount.language());

    ActivateAccountResponseDto activateAccountResponseDto = authService.activateAccount(activateAccount);
    return new ResponseEntity<>(activateAccountResponseDto, HttpStatus.OK);
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

  @PostMapping("/lost-password-mailing")
  public ResponseEntity<MessageResponse> lostPasswordMailing(@RequestBody LostPasswordMailingDto lostPasswordMailingDto) {
    // Chargement des messages
    applicationMessageService.loadApplicationMessages(lostPasswordMailingDto.language());

    return new ResponseEntity<>(authService.sendLostPasswordMail(lostPasswordMailingDto), HttpStatus.OK);
  }

  @PostMapping("/change-password")
  public ResponseEntity<ChangePasswordResponseDto> changePassword(@RequestBody ChangePasswordDto changePasswordDto) {
    // Chargement des messages
    applicationMessageService.loadApplicationMessages(changePasswordDto.language());

    return new ResponseEntity<>(authService.changePassword(changePasswordDto), HttpStatus.OK);
  }
}
