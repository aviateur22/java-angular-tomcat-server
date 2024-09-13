package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.model.login.UserLoginInformation;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface LoginService {

  /**
   * Mise a jour des information de connexion d'un utilisateur
   * @param user - UserEntity - Utilisateur voulant se connecter
   * @param isAuthenticationValid boolean - Validité de l'authentication
   * @return Booelan
   */
  public UserLoginInformation updateUserLoginInformation(UserEntity user, boolean isAuthenticationValid);


  /**
   * Ajout du login utilisateur
   * @param isLoginSuccess boolean - Login statut
   * @param user Userentity - Utilisateur qui se connecte
   */
  public void addLoginInformation(boolean isLoginSuccess, UserEntity user);

  /**
   * Vérification si une connexion peut avoir lieu
   * @param userId Long - Utilisateur voulant se connecter
   * @return UserLoginStatus
   */
  public UserLoginStatus isLoginAuthorize(Long userId) throws AuthException;
}
