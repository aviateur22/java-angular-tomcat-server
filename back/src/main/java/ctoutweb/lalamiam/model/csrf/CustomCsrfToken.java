package ctoutweb.lalamiam.model.csrf;

import org.springframework.security.web.csrf.CsrfToken;

public abstract class CustomCsrfToken implements CsrfToken {

  private final String token;
  private final String parameterName;
  private final String headerName;

  public CustomCsrfToken(String headerName, String parameterName, String token) {
    this.token = token;
    this.parameterName = parameterName;
    this.headerName = headerName;
  }

  @Override
  public String getHeaderName() {
    return headerName;
  }

  @Override
  public String getParameterName() {
    return parameterName;
  }

  @Override
  public String getToken() {
    return token;
  }
  @Override
  public String toString() {
    return "HeaderCsrfFormToken{" +
            "token='" + token + '\'' +
            ", parameterName='" + parameterName + '\'' +
            ", headerName='" + headerName + '\'' +
            '}';
  }
}
