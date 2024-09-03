package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.dto.ChangePasswordDto;
import ctoutweb.lalamiam.dto.LostPasswordMailingDto;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface AccountService {

  /**
   * Creation d'un compte
   * @param user Long
   * @param tokenAccountActivationHash String - code d'activation du compte
   * @return AccountEntity
   */
  public AccountEntity createAccount(UserEntity user, String tokenAccountActivationHash);

  /**
   * Vérification si compte activable
   * @param activateToken String _ token d'activayion
   * @param user UserEntity - Proprietaire du commpte
   * @return boolean
   */
  public boolean isAccountActivatable(UserEntity user, String activateToken);

  /**
   * Envoie d'un email pour modification du mot de passe
   * @param userData UserEntity
   */
  public void accountLostPasswordMailing(UserEntity userData);

  /**
   * Modification du mot de passe
   * @param changePassword ChangePasswordDto
   * @return Boolean
   */
  public boolean isAccountPasswordEditable(ChangePasswordDto changePassword);
}
