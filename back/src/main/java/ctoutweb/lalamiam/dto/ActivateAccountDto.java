package ctoutweb.lalamiam.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record ActivateAccountDto(
        String language,
        @NotNull(message = "{activate.account.error}")
        @NotBlank(message = "{activate.account.error}")
        @Email(message = "{activate.account.error}")
        String email,

        @NotNull(message = "{activate.account.error}")
        @NotBlank(message = "{activate.account.error}")
        String token
) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
