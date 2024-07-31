package ctoutweb.lalamiam.security.url;

import ctoutweb.lalamiam.util.ListUtillity;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

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
    final Logger LOGGER = LogManager.getLogger();

    if (path == null || path.isEmpty()) {
      return null;
    }

    if (ListUtillity.areElementInText(path, UrlPath.PERMIT_ALL_PATH.get("CONTAINS_WORD"))) {
      LOGGER.debug(String.format( "Le path: %s à un est un: %s", path, "PERMIT_ALL_PATH"));
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areListElementMatchesText(path, UrlPath.PERMIT_ALL_PATH.get("MATCHES_WORD"))) {
      LOGGER.debug(String.format( "Le path: %s est un: %s", path, "PERMIT_ALL_PATH"));
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areTextStartWithListElement(path, UrlPath.PERMIT_ALL_PATH.get("STARTING_WORD"))) {
      LOGGER.debug(String.format( "Le path: %s est un: %s", path, "PERMIT_ALL_PATH"));
      return PERMIT_ALL_AUTH;
    } else if (ListUtillity.areElementInText(path,UrlPath.PARTIAL_AUTH_PATH)) {
      LOGGER.debug(String.format( "Le path: %s est un: %s", path,"PARTIAL_AUTH_PATH"));
      return PARTIAL_AUTH;
    } else {
      LOGGER.debug(String.format( "Le path: %s est un: %s", path, "FULL_AUTH_PATH"));
      return FULL_AUTH;
    }
  }

}
