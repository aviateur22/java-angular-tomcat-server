package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.JwtEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JwtRepository extends JpaRepository<JwtEntity, Long> {
  Optional<JwtEntity> findOneByEmail(String email);
  Optional<JwtEntity> findOneByUser(UserEntity user);
  Long deleteByEmail(String email);
  Long deleteByUser(UserEntity user);
}
