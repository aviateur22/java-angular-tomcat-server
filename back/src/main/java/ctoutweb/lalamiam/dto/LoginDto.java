package ctoutweb.lalamiam.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record LoginDto(
        String language,
        @NotNull(message = "{email.missing}")
        @NotBlank(message = "{email.missing}")
        @Email(message = "{email.bad.format}")
        String email,
        @NotNull(message = "{password.missing}")
        @NotBlank(message = "{password.missing}")
        String password
) implements HasLanguage {
        @Override
        public String getLanguage() {
                return language();
        }

}
