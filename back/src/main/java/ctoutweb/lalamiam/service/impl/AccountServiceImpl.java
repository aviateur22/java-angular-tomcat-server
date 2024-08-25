package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.repository.AccountRepository;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.AccountService;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

  private final AccountRepository accountRepository;

  public AccountServiceImpl(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

  @Override
  public AccountEntity createAccount(UserEntity user, String tokenAccountActivationHash) {
    return accountRepository.save(new AccountEntity(user, tokenAccountActivationHash));
  }
}
