package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleUserRepository extends JpaRepository<RoleUserEntity, Long > {
}
