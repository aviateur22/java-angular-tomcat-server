package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
  public Long deleteByEmail(String email);
  public Optional<UserEntity> findByEmail(String email);
}
