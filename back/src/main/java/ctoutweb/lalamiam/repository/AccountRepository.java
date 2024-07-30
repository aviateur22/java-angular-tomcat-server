package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<AccountEntity, Long> {
}
