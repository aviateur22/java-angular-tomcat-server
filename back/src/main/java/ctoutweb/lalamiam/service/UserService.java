package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.RegisterDto;
import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface UserService {

  /**
   * Récuperation des utilisateurs
   * @return String
   */
  public String getTotalOfUsers();

  /**
   * Recuperation information user par email
   * @param email String
   * @return UserEntity
   */
  public UserEntity getUserInformationByEmail(String email);

  /**
   * Enregitrement utilisateur
   * @param registerDto registerDto
   * @return UserEntity
   */
  public UserEntity registerUser(RegisterDto registerDto);
}
