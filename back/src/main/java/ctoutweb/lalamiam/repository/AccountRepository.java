package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<AccountEntity, Long> {
  public Optional<AccountEntity> findFirstByAccountUserId(Long userId);
}
