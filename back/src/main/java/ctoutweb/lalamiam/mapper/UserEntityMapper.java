package ctoutweb.lalamiam.mapper;

import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
public class UserEntityMapper {
  public static UserEntity map(UserPrincipal userDetails) {
    UserEntity user = new UserEntity();
    user.setId(userDetails.getId());
    user.setEmail(userDetails.getUsername());
    return user;
  }
}
