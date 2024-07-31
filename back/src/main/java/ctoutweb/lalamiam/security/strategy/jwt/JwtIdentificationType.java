package ctoutweb.lalamiam.security.strategy.jwt;

import ctoutweb.lalamiam.security.url.UrlPath;
import ctoutweb.lalamiam.util.ListUtillity;

public enum JwtIdentificationType {
  JWT_PARTIAL_AUTH,
  JWT_FULL_AUTH;

  /**
   * Renvoi un JwtIdentificationType en fonction du path
   * @param path String - Path
   * @return JwtIdentificationType
   */
  public static JwtIdentificationType getType(String path) {

    if(path == null || path.isEmpty()) {
      return null;
    }

    if(ListUtillity.areElementInText(path, UrlPath.PARTIAL_AUTH_PATH)) {
      return JWT_PARTIAL_AUTH;
    } else  {
      return JWT_FULL_AUTH;
    }
  }
}
