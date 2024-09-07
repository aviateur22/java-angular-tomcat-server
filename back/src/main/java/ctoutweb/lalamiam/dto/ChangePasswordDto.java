package ctoutweb.lalamiam.dto;

public record ChangePasswordDto(
        String email,
        String password,
        String urlToken,
        String changePasswordToken,
        String language
) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
