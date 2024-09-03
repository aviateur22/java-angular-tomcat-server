package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.annotation.AnnotationValidator;
import ctoutweb.lalamiam.dto.HasLanguage;
import ctoutweb.lalamiam.helper.MessageResourceHelper;
import ctoutweb.lalamiam.service.impl.BaseService;

import javax.validation.Validator;

public abstract class BaseController {
  private final MessageResourceHelper messageSourceHelper;
  private final Validator validator;

  protected BaseController(
          MessageResourceHelper messageSourceHelper,
          Validator validator) {
    this.messageSourceHelper = messageSourceHelper;
    this.validator = validator;
  }

  /**
   * Initialisation: Verification des inputs + chargement messages
   * @param resourceBaseName
   * @param data
   * @param <T>
   */
  protected <T extends HasLanguage> void initializeResponse(String resourceBaseName, T data) {
    this.loadMessage(resourceBaseName, data.getLanguage());
    this.validateInputData(data);
  }

  /**
   * Chargement des messages API + exception message
   * @param resourceBaseName
   * @param language
   */
  public void loadMessage(String resourceBaseName, String language) {
    messageSourceHelper.loadMessageResource(resourceBaseName, language);
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
