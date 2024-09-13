package ctoutweb.lalamiam.model.login;

/**
 * Renvoie des données relative
 * au login du client
 * @param isLoginAuthorize
 * @param loginAttemptMessage
 */
public record UserLoginInformation(

        /**
         * Si la connexion est autorisée
         */
        boolean isLoginAuthorize,

        /**
         * Message sur le nombre de connexion restant en cas d'erreur
         */
        String loginAttemptMessage
) {
}
