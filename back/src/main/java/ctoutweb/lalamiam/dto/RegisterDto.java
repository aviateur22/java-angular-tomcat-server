package ctoutweb.lalamiam.dto;

import ctoutweb.lalamiam.annotation.custom.password.PasswordConstraint;
import ctoutweb.lalamiam.model.captcha.ClientResponseCaptcha;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record RegisterDto(
        String language,
        @NotNull(message = "Email maqnuant")
        @NotBlank(message = "Email maqnuant")
        @Email(message = "Format de l'email invalide")
        String email,
        @NotNull(message = "Nom manquant")
        @NotBlank(message = "Nom manquant")
        String name,
        @PasswordConstraint
        String password,
        @NotNull(message = "Réponse captcha manquant")
        ClientResponseCaptcha captchaClientResponseDto
) { }
