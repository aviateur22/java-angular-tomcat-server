package ctoutweb.lalamiam.repository;

import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.repository.entity.UserLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Long> {

  @Query(value = "SELECT u FROM UserLoginEntity u where u.user=?1")
  List<UserLoginEntity> findLastUserConnexion(UserEntity user);

  /**
   * Récupération des 3 dernieres Connexion d'un client
   * @param user - Utilisatrut qui se connecte
   * @return List<>UserLoginEntity</>
   */
  List<UserLoginEntity> findTop3ByUserOrderByLoginAtDesc(UserEntity user);
}
