package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.UserLoginFactory;
import ctoutweb.lalamiam.model.UserLoginInformation;
import ctoutweb.lalamiam.repository.DelayLoginRepository;
import ctoutweb.lalamiam.repository.UserLoginRepository;
import ctoutweb.lalamiam.repository.entity.DelayLoginEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;
import ctoutweb.lalamiam.service.LoginService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Properties;

import static ctoutweb.lalamiam.constant.ApplicationConstant.*;
import static ctoutweb.lalamiam.factory.UserLoginFactory.*;

@Service
public class LoginServiceImpl extends BaseService implements LoginService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final DelayLoginRepository delayLoginRepository;
  private final UserLoginRepository userLoginRepository;
  public LoginServiceImpl(
          DelayLoginRepository delayLoginRepository,
          UserLoginRepository userLoginRepository,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("apiMessageSource") MessageSource messageSource
  ) {
    super(messageSource, messageExceptions);
    this.delayLoginRepository = delayLoginRepository;
    this.userLoginRepository = userLoginRepository;
  }

  @Override
  public UserLoginInformation updateUserLoginInformation(UserEntity user, boolean isAuthenticationValid) {
   List<UserLoginEntity> getLastUserLoginList = userLoginRepository.findTop3ByUserOrderByLoginAtDesc(user);

   // Si authentification client valide
   if(isAuthenticationValid) {

     // Suppression de la prise en compte des dernière données de connexion
     this.updateUserLoginstatus(getLastUserLoginList);

     return UserLoginFactory.getUserLoginInformation(true, null);
   }

   // Nombre de connexion invalide
    long loginAttemptErrorCount = getLastUserLoginList
            .stream()
            .filter(login-> !login.getIsLoginSuccess() && login.getHasToBeCheck())
            .count();

    boolean isLoginAuthorize = loginAttemptErrorCount < LOGIN_ERROR_ATTEMPT_AVAILABLE;

    if(!isLoginAuthorize) {
      // Ajout d'un delai de connexion pour les prochaines tentatives
      addDelayOnLogin(user);

      // Suppression de la prise en compte des dernière données de connexion
      this.updateUserLoginstatus(getLastUserLoginList);
    }

    // Récupération d'un message sur le statut de connexion
    String informationLoginMessage = getInformationLoginMessage(getLastUserLoginList, loginAttemptErrorCount);
    return UserLoginFactory.getUserLoginInformation(isLoginAuthorize, informationLoginMessage);


  }

  @Override
  public void addLoginInformation(boolean isLoginSuccess, UserEntity user) {

    // Heure de connexion
    LocalDateTime loginTime = LocalDateTime.now();

    userLoginRepository.save(UserLoginFactory.getUserLogin(isLoginSuccess, user, loginTime));
  }

  @Override
  public boolean isLoginAuthorize(UserEntity user) throws AuthException {
    return false;
  }

  /**
   * Message sur le nombre de connexion disponible
   * @param lastUserLoginList List<UserLoginEntity> - Liste des 3 dernieres connexion utilisateurs
   * @return String
   */
  public String getInformationLoginMessage(List<UserLoginEntity> lastUserLoginList, long loginAttemptErrorCount) {

    int loginAvailibility = (int) (LOGIN_ERROR_ATTEMPT_AVAILABLE - loginAttemptErrorCount);

    String loginAttemptMessage = loginAttemptErrorCount == 0 ?
            null :
            getApiMessage("login.attempt.message");

    return loginAttemptMessage.replace("!%!number!%!", String.valueOf(loginAvailibility));
  }

  /**
   * Mise a jour des données de connexion si
   * @param lastUserLoginList List<UserLoginEntity> - Liste des 3 dernieres connexions
   */
  public void updateUserLoginstatus(List<UserLoginEntity> lastUserLoginList) {

    lastUserLoginList.forEach(userLogin->{
      userLogin.setHasToBeCheck(false);
      userLoginRepository.save(userLogin);
    });
  }

  /**
   * Ajout d'un délai de blocage dans le connexion utilisateur
   * @param user UserEntity - Personne souhaitant se connnecter
   */
  public void addDelayOnLogin(UserEntity user) {

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
  }
}
