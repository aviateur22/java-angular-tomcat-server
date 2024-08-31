package ctoutweb.lalamiam.dto;

import ctoutweb.lalamiam.model.ActivateAccountStatus;

public record ActivateAccountResponseDto(ActivateAccountStatus activateAccountStatus, String message) {
}
