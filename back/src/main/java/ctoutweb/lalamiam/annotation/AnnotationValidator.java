package ctoutweb.lalamiam.annotation;

import ctoutweb.lalamiam.exception.ValidationException;
import org.springframework.http.HttpStatus;

import javax.validation.*;
import java.util.Set;

public class AnnotationValidator<T> {

  private final ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory();
  private final Validator validator = validatorFactory.getValidator();

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
