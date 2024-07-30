package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface AccountService {

  /**
   * Creation d'un compte
   * @param user Long
   * @return AccountEntity
   */
  public AccountEntity createAccount(UserEntity user);
}
