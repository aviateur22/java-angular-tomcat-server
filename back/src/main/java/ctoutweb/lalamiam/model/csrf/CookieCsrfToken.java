package ctoutweb.lalamiam.model.csrf;

/**
 * Csrf Token cookie
 */
public class CookieCsrfToken extends CustomCsrfToken {
  public CookieCsrfToken(String headerName, String parameterName, String token) {
    super(headerName, parameterName, token);
  }
}
