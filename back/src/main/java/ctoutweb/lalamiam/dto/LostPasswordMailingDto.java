package ctoutweb.lalamiam.dto;

public record LostPasswordMailingDto(String email, String language) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
