package ctoutweb.lalamiam.dto;

public record ChangePasswordResponseDto(
        String message,
        Boolean isPasswordChange
) {
}
