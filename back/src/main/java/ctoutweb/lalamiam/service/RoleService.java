package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;

public interface RoleService {
  public RoleUserEntity addUserRole(int roleId, UserEntity user);
}
