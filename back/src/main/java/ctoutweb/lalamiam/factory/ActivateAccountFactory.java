package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.dto.ActivateAccountResponseDto;
import ctoutweb.lalamiam.model.ActivateAccountStatus;

public class ActivateAccountFactory {
  public static ActivateAccountResponseDto getActivateAccountDto(String message, ActivateAccountStatus status) {
    return new ActivateAccountResponseDto(status, message);
  }
}
