package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.repository.RoleUserRepository;
import ctoutweb.lalamiam.repository.entity.RoleEntity;
import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.RoleService;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

  private final RoleUserRepository roleUserRepository;

  public RoleServiceImpl(RoleUserRepository roleUserRepository) {
    this.roleUserRepository = roleUserRepository;
  }

  @Override
  public RoleUserEntity addUserRole(int roleId, UserEntity user) {
    return roleUserRepository.save(new RoleUserEntity(user, new RoleEntity(roleId)));
  }
}
