package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.dto.ChangePasswordResponseDto;

public class ChangePasswordFactory {

  public static ChangePasswordResponseDto getChangePasswordResponse(String message, boolean isPasswordChange) {
    return new ChangePasswordResponseDto(message, isPasswordChange);
  }
}
