package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.model.UserLoginInformation;
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
   * @param user UserEntity - Utilisateur voulant se connecter
   * @return boolean
   */
  public boolean isLoginAuthorize(UserEntity user) throws AuthException;
}
