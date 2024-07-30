package ctoutweb.lalamiam.security.url;

import ctoutweb.lalamiam.util.ListUtillity;

public enum AuthenticationType {
  PERMIT_ALL_AUTH,
  PARTIAL_AUTH,
  FULL_AUTH;


  /**
   * Renvoi un AuthenticationType en fonction du path
   * @param path String
   * @return AuthenticationType
   */
  public static AuthenticationType getType(String path) {

    if (path == null || path.isEmpty()) {
      return null;
    }

    if (ListUtillity.areElementInText(path, UrlPath.PERMIT_ALL_PATH.get("CONTAINS_WORD"))) {
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areListElementMatchesText(path, UrlPath.PERMIT_ALL_PATH.get("MATCHES_WORD"))) {
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areTextStartWithListElement(path, UrlPath.PERMIT_ALL_PATH.get("STARTING_WORD"))) {
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areElementInText(path,UrlPath.MIDDLE_AUTH_PATH)) {
      return PARTIAL_AUTH;
    } else {
      return FULL_AUTH;
    }
  }

}
