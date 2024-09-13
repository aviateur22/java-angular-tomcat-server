package ctoutweb.lalamiam.controller.helper;

import ctoutweb.lalamiam.annotation.AnnotationValidator;
import ctoutweb.lalamiam.service.ApplicationMessageService;
import org.springframework.stereotype.Component;

import javax.validation.Validator;
import java.util.List;

/**
 * Permets de gerers les methodes communes au Controller
 * Ex:
 *  - Vérification des inputs clients
 *  - Initialisation des messages de l'application
 *
 */
@Component
public class ControllerHelper {
  private final Validator validator;
  private final ApplicationMessageService applicationMessageService;

  public ControllerHelper(Validator validator, ApplicationMessageService applicationMessageService) {
    this.validator = validator;
    this.applicationMessageService = applicationMessageService;
  }

  /**
   * Initialisation d'une requête
   * @param requestClientDataList List<T></T> Liste des données envoyés par le client
   * @param <T> Le type de donnée (ex: RegisterDto, LoginDto....)
   */
  public <T> void initializeRequest(List<T> requestClientDataList, String requestedLanguage) {

    // Chargement des messages de l'application
    applicationMessageService.loadApplicationMessages(requestedLanguage);

    // Validation de la données client
    if(!requestClientDataList.isEmpty())
      requestClientDataList.stream().forEach(requestData-> validateInputData(requestData));
  }

  /**
   * Initialisation d'une requête si pas de données envoyé par le client
   * @param requestedLanguage String - Language demandé dans la requête
   */
  public void initializeRequest(String requestedLanguage) {
    // Chargement des messages de l'application
    applicationMessageService.loadApplicationMessages(requestedLanguage);
  }

  /**
   * Validation des inputs Client
   * @param inputData T - Contenu des données envoyées par le client
   * @param <T> GenericType - Type de donnée a valider (ex: RegisterDto, LoginDto....)
   */
  public <T> void validateInputData(T inputData) {
    AnnotationValidator<T> registerValidator = new AnnotationValidator<>(this.validator);
    registerValidator.validate(inputData);
  }

}
