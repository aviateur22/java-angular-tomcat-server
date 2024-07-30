package ctoutweb.lalamiam.model.csrf;

import ctoutweb.lalamiam.model.csrf.CustomCsrfToken;

/**
 * CsrfToken pour header
 */
public class HeaderCsrfFormToken extends CustomCsrfToken {
  public HeaderCsrfFormToken(String headerName, String parameterName, String token) {
    super(headerName, parameterName, token);
  }
}
