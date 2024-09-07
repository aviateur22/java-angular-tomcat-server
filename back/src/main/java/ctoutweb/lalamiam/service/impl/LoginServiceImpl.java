package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.factory.UserLoginFactory;
import ctoutweb.lalamiam.repository.DelayLoginRepository;
import ctoutweb.lalamiam.repository.UserLoginRepository;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.LoginService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LoginServiceImpl implements LoginService {

  private final DelayLoginRepository delayLoginRepository;
  private final UserLoginRepository userLoginRepository;
  public LoginServiceImpl(DelayLoginRepository delayLoginRepository, UserLoginRepository userLoginRepository) {
    this.delayLoginRepository = delayLoginRepository;
    this.userLoginRepository = userLoginRepository;
  }

  @Override
  public boolean isLoginAuthorize(UserEntity user) {
    return false;
  }

  @Override
  public void addLoginInformation(boolean isLoginSuccess, UserEntity user) {

    // Heure de connexion
    LocalDateTime loginTime = LocalDateTime.now();

    userLoginRepository.save(UserLoginFactory.getUserLogin(isLoginSuccess, user, loginTime));
  }
}
