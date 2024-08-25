package ctoutweb.lalamiam.dto;

public record ActivateAccountDto(
        String language,
        String email,
        String token
) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
