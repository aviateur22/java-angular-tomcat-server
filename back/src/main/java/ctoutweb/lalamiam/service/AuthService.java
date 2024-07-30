package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.LoginDto;
import ctoutweb.lalamiam.model.LoginResponseDto;
import ctoutweb.lalamiam.model.RegisterDto;
import ctoutweb.lalamiam.model.RegisterResponse;

public interface AuthService {
  public LoginResponseDto login(LoginDto dto);

  public RegisterResponse register(RegisterDto dto);

  public String logout(Long userId);
}
