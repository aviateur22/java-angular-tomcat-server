package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.repository.entity.UserEntity;

public class UserEntityFactory {
  public static UserEntity getUserEntity(Long userId) {
    return new UserEntity(userId);
  }
}
