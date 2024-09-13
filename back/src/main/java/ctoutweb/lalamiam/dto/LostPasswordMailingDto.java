package ctoutweb.lalamiam.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * Donnée recu afin de recevoir un mail
 * de réinitialisation du mot de passe
 * @param email
 * @param language
 */
public record LostPasswordMailingDto(

        @NotNull(message = "{lost.password.mailing.error}")
        @NotBlank(message = "{lost.password.mailing.error}")
        @Email(message = "{email.bad.format}")
        String email,
        String language) implements HasLanguage {
  @Override
  public String getLanguage() {
    return language();
  }
}
