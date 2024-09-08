package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.DelayLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DelayLoginRepository extends JpaRepository<DelayLoginEntity, Long> {
  public Optional<DelayLoginEntity> findFirstByUserId(Long id);
}
