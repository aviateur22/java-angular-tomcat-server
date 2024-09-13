package ctoutweb.lalamiam.model.login;

import java.time.LocalDateTime;

/**
 * Information sur le statut de connexion d'un client
 *
 * - Récupération du droit de connexion
 * - Horaire déblocage de la connexion si bloqué
 *
 */
public record UserLoginStatus(
        boolean isLoginAuthorize,
        LocalDateTime recoveryLoginTime
) {

}
