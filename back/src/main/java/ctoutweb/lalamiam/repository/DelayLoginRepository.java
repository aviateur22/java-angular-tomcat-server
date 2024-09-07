package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.DelayLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DelayLoginRepository extends JpaRepository<DelayLoginEntity, Long> {
}
