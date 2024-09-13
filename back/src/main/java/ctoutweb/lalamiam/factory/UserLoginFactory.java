package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.model.login.UserLoginInformation;
import ctoutweb.lalamiam.model.login.UserLoginStatus;
import ctoutweb.lalamiam.repository.entity.DelayLoginEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;

import java.time.LocalDateTime;

public class UserLoginFactory {
  public static UserLoginEntity getUserLogin(boolean isLoginsuccess, UserEntity user, LocalDateTime loginTime) {
    return new UserLoginEntity(isLoginsuccess, user, loginTime);
  }

  public static UserLoginInformation getUserLoginInformation(boolean isLoginAuthorize, String loginAttemptMessage) {
    return new UserLoginInformation(isLoginAuthorize, loginAttemptMessage);
  }

  public static DelayLoginEntity getDelayLogin(LocalDateTime loginDelayUntil, UserEntity user) {
    DelayLoginEntity delayLogin = new DelayLoginEntity();
    delayLogin.setUser(user);
    delayLogin.setDelayLoginUntil(loginDelayUntil);
    return delayLogin;
  }

  public static UserLoginStatus getUserLoginStatus(boolean isLoginAuthorize, LocalDateTime delayLoginUntil) {
    return new UserLoginStatus(isLoginAuthorize, delayLoginUntil);

  }
}
