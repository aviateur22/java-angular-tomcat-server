package ctoutweb.lalamiam.model;

public record UserLoginInformation(
        boolean isLoginAuthorize,
        String loginAttemptMessage
) {
}
