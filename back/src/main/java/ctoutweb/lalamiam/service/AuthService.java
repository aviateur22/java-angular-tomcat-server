package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.LoginDto;
import ctoutweb.lalamiam.dto.LoginResponseDto;
import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.model.RegisterResponse;

public interface AuthService {
  public LoginResponseDto login(LoginDto dto);

  public RegisterResponse register(RegisterDto dto);

  public String logout(Long userId);
}
