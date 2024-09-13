package ctoutweb.lalamiam.dto;

import ctoutweb.lalamiam.annotation.custom.password.PasswordConstraint;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record ChangePasswordDto(
        @NotNull(message = "{change.password.mail.error}")
        @NotBlank(message = "{change.password.mail.error}")
        @Email(message = "{email.bad.format}")
        String email,

        @NotNull(message = "{change.password.password.error}")
        @NotBlank(message = "{change.password.password.error}")
        @PasswordConstraint(message = "{password.bad.format}")
        String password,
        @NotNull(message = "{change.password.error}")
        @NotBlank(message = "{change.password.error}")
        String urlToken,

        @NotNull(message = "{change.password.error}")
        @NotBlank(message = "{change.password.error}")
        String changePasswordToken,
        String language
) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
