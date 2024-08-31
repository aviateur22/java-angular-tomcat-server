package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.*;

public interface AuthService {
  public LoginResponseDto login(LoginDto dto);

  public MessageResponse register(RegisterDto dto);

  public ActivateAccountResponseDto activateAccount(ActivateAccountDto activateAccount);

  public MessageResponse logout(Long userId);
}
