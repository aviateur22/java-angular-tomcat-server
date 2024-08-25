package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.repository.entity.UserEntity;

import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URISyntaxException;

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

  /**
   * Suppression d'un utilisateur
   * @param email
   */
  public void deleteUserByemail(String email);
}
