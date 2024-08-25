package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.*;
import ctoutweb.lalamiam.model.RegisterResponse;

import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URISyntaxException;

public interface AuthService {
  public LoginResponseDto login(LoginDto dto);

  public RegisterResponse register(RegisterDto dto);

  public MessageResponse activateAccount(ActivateAccountDto activateAccount);

  public MessageResponse logout(Long userId);
}
