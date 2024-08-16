package ctoutweb.lalamiam.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record LoginDto(
        String language,
        @NotNull(message = "Email maqnuant")
        @NotBlank(message = "Email maqnuant")
        @Email(message = "Format de l'email invalide")
        String email,
        @NotNull(message = "Nom manquant")
        @NotBlank(message = "Nom manquant")
        String password
) {
}
