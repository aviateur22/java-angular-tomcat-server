package ctoutweb.lalamiam.annotation;

import ctoutweb.lalamiam.exception.ValidationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.validation.*;
import java.util.Set;

/**
 * Validation des inputs clients
 * @param <T> Type de donnée a valider (ex: RegisterDto)
 */
@Component
public class AnnotationValidator<T> {

  private final Validator validator;

  public AnnotationValidator(Validator validator) {
    this.validator = validator;
  }

  /**
   * Validation des input client
   *
   * En cas d'erreur, les fichiers validatorErrorMessage.properties seront utilisés
   * pour renvoyer un message d'erreur.
   *
   * Les fichiers sont initialisé grace:
   * @see ctoutweb.lalamiam.config.ValidatorResourceMessageConfig
   * @see ctoutweb.lalamiam.service.ApplicationMessageService
   *
   * Le message d'erreur est récupéré par la méthode:
   * ConstraintViolation::getMessage
   *
   * @param objectToValidate T - Données client à valider
   */
  public void validate(T objectToValidate) {

    Set<ConstraintViolation<T>> validationErrors = validator.validate(objectToValidate);

    // Récuperation derniere erreur
    String lastError = null;

    if(!validationErrors.isEmpty()) {
       lastError = validationErrors.stream().reduce((first, second)->second).map(ConstraintViolation::getMessage).orElse(null);

      throw new ValidationException(lastError, HttpStatus.BAD_REQUEST);
    }

  }
}
