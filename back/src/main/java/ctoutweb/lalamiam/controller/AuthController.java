package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.controller.helper.ControllerHelper;
import ctoutweb.lalamiam.dto.*;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.service.AuthService;
import ctoutweb.lalamiam.service.CaptchaService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  private final AuthService authService;
  private final CaptchaService captchaService;
  private final ControllerHelper controllerHelper;

  public AuthController(
          AuthService authService,
          CaptchaService captchaService,
          ControllerHelper controllerHelper) {
    this.authService = authService;
    this.captchaService = captchaService;
    this.controllerHelper = controllerHelper;
  }
  private static final Logger LOGGER = LogManager.getLogger();
  @PostMapping("/login")
  ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto login) {

    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(login),login.getLanguage());

    LoginResponseDto loginResponse = authService.login(login);

    return new ResponseEntity<>(loginResponse, HttpStatus.OK);
  }

  @PostMapping("/register")
  ResponseEntity<MessageResponse> register(@RequestBody RegisterDto registerDto)  {

    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(
            registerDto,
            registerDto.captchaClientResponseDto()),
            registerDto.getLanguage()
    );

    MessageResponse messageResponse = authService.register(registerDto);

    return new ResponseEntity<MessageResponse>(messageResponse, HttpStatus.CREATED);
  }

  @GetMapping("/logout/language/{language}/user-id/{userId}")
  ResponseEntity<MessageResponse> logout(@PathVariable String language, @PathVariable Long userId) {

    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(), language);

    return new ResponseEntity<>(authService.logout(userId), HttpStatus.OK);
  }

  @PostMapping("/account-activation")
  ResponseEntity<ActivateAccountResponseDto> activateAccount(@RequestBody ActivateAccountDto activateAccount) {
    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(activateAccount), activateAccount.language());

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

    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(lostPasswordMailingDto), lostPasswordMailingDto.language());

    return new ResponseEntity<>(authService.sendLostPasswordMail(lostPasswordMailingDto), HttpStatus.OK);
  }

  @PostMapping("/change-password")
  public ResponseEntity<ChangePasswordResponseDto> changePassword(@RequestBody ChangePasswordDto changePasswordDto) {

    // Initialise la requête cliente
    controllerHelper.initializeRequest(List.of(changePasswordDto), changePasswordDto.language());

    return new ResponseEntity<>(authService.changePassword(changePasswordDto), HttpStatus.OK);
  }
}
