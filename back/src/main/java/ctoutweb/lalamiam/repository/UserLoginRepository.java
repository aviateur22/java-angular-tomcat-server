package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.UserLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Long> {
}
