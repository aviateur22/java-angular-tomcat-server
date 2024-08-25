package ctoutweb.lalamiam.dto;

import ctoutweb.lalamiam.annotation.custom.password.PasswordConstraint;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record RegisterDto(
        String language,
        @NotNull(message = "{email.missing}")
        @NotBlank(message = "{email.missing}")
        @Email(message = "{email.bad.format}")
        String email,
        @NotNull(message = "{password.missing}")
        @NotBlank(message = "{password.missing}")
        String name,
        @PasswordConstraint(message = "{password.bad.format}")
        String password,
        @NotNull(message = "{captcha.response.missing}")
        ClientResponseCaptchaDto captchaClientResponseDto
) implements HasLanguage {
        @Override
        public String getLanguage() {
                return language();
        }
}
