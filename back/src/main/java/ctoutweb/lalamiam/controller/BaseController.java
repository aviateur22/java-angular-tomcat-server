package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.annotation.AnnotationValidator;

import javax.validation.Validator;

public abstract class BaseController {
  private final Validator validator;

  protected BaseController(Validator validator) {
    this.validator = validator;
  }

  /**
   * Validation des inputs Client
   * @param inputData T
   * @param <T> GenericType
   */
  public <T> void validateInputData(T inputData) {
    AnnotationValidator<T> registerValidator = new AnnotationValidator<>(this.validator);
    registerValidator.validate(inputData);
  }
}
