package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface LoginService {

  /**
   * Vérification si tentative de login autorisé
   * @param user - UserEntity - Utilisateur voulant se conecter
   * @return Booelan
   */
  public boolean isLoginAuthorize(UserEntity user);


  /**
   * Ajout du login utilisateur
   * @param isLoginSuccess boolean - Login statut
   * @param user Userentity - Utilisateur qui se connecte
   */
  public void addLoginInformation(boolean isLoginSuccess, UserEntity user);
}
