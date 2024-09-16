package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.model.login.UserLoginInformation;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;

import java.util.List;

public interface LoginService {

  /**
   * Mise a jour des information de connexion d'un utilisateur
   * @param user - UserEntity - Utilisateur voulant se connecter
   * @param isAuthenticationValid boolean - Validité de l'authentication
   * @return List<UserLoginEntity>
   */
  public List<UserLoginEntity> updateUserLoginInformation(UserEntity user, boolean isAuthenticationValid);


  /**
   * Ajout d'un délai de blocage de connexion dans le connexion utilisateur
   * @param user UserEntity - Personne souhaitant se connnecter
   * @param lastUserLoginList - List des dernieres connexion du client
   */
  public void addDelayOnLogin(UserEntity user, List<UserLoginEntity> lastUserLoginList);

  /**
   * Vérification si une connexion peut avoir lieu
   * @param userId Long - Utilisateur voulant se connecter
   * @return UserLoginStatus
   */
  public UserLoginStatus isLoginAuthorize(Long userId) throws AuthException;

  /**
   * Récupération du nombre de connexion disponible
   * @param user UserEntity
   * @return Integer
   */
  public Integer getUserRemainingLogin(UserEntity user);
}
