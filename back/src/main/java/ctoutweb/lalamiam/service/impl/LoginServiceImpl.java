package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.UserLoginFactory;
import ctoutweb.lalamiam.model.HtmlTemplateType;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.DelayLoginRepository;
import ctoutweb.lalamiam.repository.UserLoginRepository;
import ctoutweb.lalamiam.repository.entity.DelayLoginEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;
import ctoutweb.lalamiam.service.ApplicationMessageService;
import ctoutweb.lalamiam.service.LoginService;
import ctoutweb.lalamiam.service.MailService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static ctoutweb.lalamiam.constant.ApplicationConstant.*;
import static ctoutweb.lalamiam.factory.UserLoginFactory.*;
import static ctoutweb.lalamiam.util.TextUtility.replaceWordInText;

@Service
public class LoginServiceImpl implements LoginService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final DelayLoginRepository delayLoginRepository;
  private final UserLoginRepository userLoginRepository;
  private final MailService mailService;
  private final ApplicationMessageService applicationMessageService;
  @Value("${application.name}")
  private String applicationName;

  public LoginServiceImpl(
          DelayLoginRepository delayLoginRepository,
          UserLoginRepository userLoginRepository,
          MailService mailService,
          ApplicationMessageService applicationMessageService
  ) {
    this.delayLoginRepository = delayLoginRepository;
    this.userLoginRepository = userLoginRepository;
    this.mailService = mailService;
    this.applicationMessageService = applicationMessageService;
  }

  @Override
  public List<UserLoginEntity> updateUserLoginInformation(UserEntity user, boolean isAuthenticationValid) {
    // Ajout des données de la connexion client
    LocalDateTime loginTime = LocalDateTime.now();
    userLoginRepository.save(UserLoginFactory.getUserLogin(isAuthenticationValid, user, loginTime));

    // Récupération des 3 dernieres connexions
    List<UserLoginEntity> getUserLastLoginList = userLoginRepository.findTop3ByUserOrderByLoginAtDesc(user);

   // Si authentification client valide
   if(isAuthenticationValid) {
     // Suppression de la prise en compte des dernière données de connexion
     this.updateConnexionStatus(getUserLastLoginList);
   }

    return getUserLastLoginList;
  }

  @Override
  public UserLoginStatus isLoginAuthorize(Long userId) throws AuthException {
    LocalDateTime checkLogintime = LocalDateTime.now();

    DelayLoginEntity findUserDelayLogin = delayLoginRepository.findFirstByUserId(userId).orElse(null);

    if(findUserDelayLogin == null) {
      return getUserLoginStatus(true, null);
    }

   LocalDateTime recoveryLoginTime = findUserDelayLogin.getDelayLoginUntil();

    // La connexion est bloquée si checkLogintime < recoveryLoginTime
    if(checkLogintime.isBefore(recoveryLoginTime)) {
      return getUserLoginStatus(false, recoveryLoginTime);
    }

    // Suppression de l'heure de blocage
    delayLoginRepository.delete(findUserDelayLogin);
    return getUserLoginStatus(true, null);
  }

  @Override
  public void addDelayOnLogin(UserEntity user, List<UserLoginEntity> lastUserLoginList) {

    // Calcul heure de déblocage de connexion
    LocalDateTime loginDelayUntil = LocalDateTime.now().plusMinutes(LOGIN_DELAY).truncatedTo(ChronoUnit.MINUTES);

    // Recherche si existence d'un DelayLoginEntity
    DelayLoginEntity findUserDelayLogin =  delayLoginRepository.findFirstByUserId(user.getId()).orElse(null);

    if(findUserDelayLogin != null) {
      findUserDelayLogin.setDelayLoginUntil(loginDelayUntil);
      delayLoginRepository.save(findUserDelayLogin);
      return;
    }

    DelayLoginEntity delayLogin = getDelayLogin(loginDelayUntil, user);
    delayLoginRepository.save(delayLogin);

    // Suppression de la prise en compte des dernière données de connexion
    this.updateConnexionStatus(lastUserLoginList);

    // Generation d'un email d'alerte
    Map<String, String> listWordsToReplaceInHtmlTemplate = new HashMap<>();

    listWordsToReplaceInHtmlTemplate.put("year", String.valueOf(LocalDateTime.now().getYear()));
    listWordsToReplaceInHtmlTemplate.put("email", user.getEmail());
    listWordsToReplaceInHtmlTemplate.put("email", user.getEmail());
    listWordsToReplaceInHtmlTemplate.put("appName", applicationName.toUpperCase());

    // Sujet du mail
    String emailSubject = applicationMessageService.getMessage("email.login.account.failed.subject");
    emailSubject =  replaceWordInText(emailSubject, "!%!applicationName!%!", applicationName.toUpperCase());

    String templateHtml = mailService.generateHtml(HtmlTemplateType.LOGIN_CONNEXION_ALERT, listWordsToReplaceInHtmlTemplate);
    mailService.sendEmail(
            emailSubject,
            user.getEmail(),
            templateHtml,
            applicationMessageService.getMessage("mailing.error")
    );

  }
  @Override
  public Integer getUserRemainingLogin(UserEntity user) {
    List<UserLoginEntity> getLastUserLoginList = userLoginRepository.findTop3ByUserOrderByLoginAtDesc(user);

    // Récupérartion du nombre de connexion invalide
    long loginAttemptErrorCount = getLastUserLoginList
            .stream()
            .filter(login-> !login.getIsLoginSuccess() && login.getHasToBeCheck())
            .count();

    // Calcul du nombre de connexion restante en cas d'erreur
    return (int) (LOGIN_ERROR_ATTEMPT_AVAILABLE - loginAttemptErrorCount);
  }

  /**
   * Mise a jour des données de connexion si
   * @param lastUserLoginList List<UserLoginEntity> - Liste des 3 dernieres connexions
   */
  public void updateConnexionStatus(List<UserLoginEntity> lastUserLoginList) {

    lastUserLoginList.forEach(userLogin->{
      userLogin.setHasToBeCheck(false);
      userLoginRepository.save(userLogin);
    });
  }

}
