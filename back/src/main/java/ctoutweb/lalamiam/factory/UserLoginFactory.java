package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;

import java.time.LocalDateTime;

public class UserLoginFactory {
  public static UserLoginEntity getUserLogin(boolean isLoginsuccess, UserEntity user, LocalDateTime loginTime) {
    return new UserLoginEntity(isLoginsuccess, user, loginTime);
  }
}
