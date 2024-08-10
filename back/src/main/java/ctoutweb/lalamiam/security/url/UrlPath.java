package ctoutweb.lalamiam.security.url;

import java.util.List;
import java.util.Map;

public class UrlPath {

  public final static List<String> PARTIAL_AUTH_PATH = List.of("/logout");

  public final static Map<String, List<String>> PERMIT_ALL_PATH = Map.of(
      // Path commencant par
      "STARTING_WORD", List.of(
          "/assets",
          "/lalamiam",
          "/lalamiam-app/lalamiam",
          "/api/version"
      ),

    // Path egal à:
    "MATCHES_WORD", List.of(
            "/" ,
            "/Raleway.ttf",
            "/lalamiam-app",
            "/styles.css",
            "/main.js",
            "/polyfills.js",
            "/vendor.js",
            "/vendor.js.map",
            "/polyfills.js.map",
            "/runtime.js",
            "/favicon.ico"
        ),

    // Path contenant:
    "CONTAINS_WORD", List.of(
            "/register",
            "/login",
            "/captcha",
            "/csrf"
    )
  );
}
