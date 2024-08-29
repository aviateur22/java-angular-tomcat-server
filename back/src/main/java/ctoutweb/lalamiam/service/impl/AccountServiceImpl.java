package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.repository.AccountRepository;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.AccountService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class AccountServiceImpl extends BaseService implements AccountService {

  private final AccountRepository accountRepository;
  private final PasswordEncoder passwordEncoder;

  public AccountServiceImpl(
          AccountRepository accountRepository,
          PasswordEncoder passwordEncoder,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("apiMessageSource") MessageSource messageSource) {
    super(messageSource, messageExceptions);
    this.accountRepository = accountRepository;
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public AccountEntity createAccount(UserEntity user, String tokenAccountActivationHash) {
    return accountRepository.save(new AccountEntity(user, tokenAccountActivationHash));
  }

  @Override
  public boolean isAccountActivatable(UserEntity user, String activateToken) {
    AccountEntity account = accountRepository.findFirstByAccountUserId(user.getId()).orElseThrow(()->new AuthException(getExceptionMessage("account.not.existing"), HttpStatus.BAD_REQUEST));
    boolean isActivateTokenValid = this.passwordEncoder.matches(activateToken, account.getTokenActivation());
    return isActivateTokenValid;
  }
}
