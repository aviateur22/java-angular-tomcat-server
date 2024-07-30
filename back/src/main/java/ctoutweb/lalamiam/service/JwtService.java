package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.JwtIssue;

public interface JwtService {

  /**
   * Persistance d'un JWT
   *
   * @param userId Long - Identitifiant utilisateur
   * @param jwt    JwtIssue - JWT
   * @param email
   */
  public void saveJwt(Long userId, JwtIssue jwt, String email);

  /**
   * Vérification JWT
   * @param jwt String - JWT
   * @param userId Long - Identitifiant utilisateur
   * @return Boolean
   */
  public Boolean isJwtValid(Long userId, String jwt, String jwtId);

  /**
   * Suppression d'un JWT
   *
   * @param email
   */
  public void deleteJwtByUserEmail(String email);

  /**
   * Suppression JWT par utilisateur Id
   * @param UserId
   */
  public void deleteJwtByUserId(Long UserId);
}
