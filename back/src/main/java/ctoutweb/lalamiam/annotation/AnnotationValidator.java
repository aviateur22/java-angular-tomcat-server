package ctoutweb.lalamiam.annotation;

import ctoutweb.lalamiam.exception.ValidationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.validation.*;
import java.util.Set;

@Component
public class AnnotationValidator<T> {

  private final Validator validator;

  public AnnotationValidator(Validator validator) {
    this.validator = validator;
  }

  public void validate(T objectToValidate) {

    Set<ConstraintViolation<T>> validationErrors = validator.validate(objectToValidate);

    // Récuperation derniere erreur
    String lastError = null;

    if(!validationErrors.isEmpty()) {
      Path validation = validationErrors.stream().reduce((first, second)->second).map(v->v.getPropertyPath()).orElse(null);
      lastError = validationErrors.stream().reduce((first, second)->second).map(ConstraintViolation::getMessage).orElse(null);
      throw new ValidationException(lastError, HttpStatus.BAD_REQUEST);
    }

  }
}
