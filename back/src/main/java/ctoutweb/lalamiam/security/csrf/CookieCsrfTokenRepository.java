package ctoutweb.lalamiam.security.csrf;

import ctoutweb.lalamiam.model.csrf.CookieCsrfToken;
import ctoutweb.lalamiam.model.csrf.HeaderCsrfFormToken;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.DefaultCsrfToken;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * Custom CsrfTokenRepository pour la gestion des cookies
 */

public class CookieCsrfTokenRepository implements CustomCsrfTokenRepository {

  // Header key pour l'envoie d'un nouveau token CSRF
  private static final String X_CSRF_TOKEN = "X-CSRF-TOKEN";

  // Header key pour la récupération d'un token CSRF lors de la soumission d'un formulaire
  private static final String FORM_CSRF_TOKEN = "FORM-CSRF-TOKEN";
  @Override
  public HeaderCsrfFormToken loadFormToken(HttpServletRequest request) {
    String token = request.getHeader(FORM_CSRF_TOKEN);
    return token != null ? new HeaderCsrfFormToken(FORM_CSRF_TOKEN, "_header", token) : null;
  }

  @Override
  public CookieCsrfToken loadCookieToken(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        if (cookie.getName().equals("_csrf")) {
          return new CookieCsrfToken(X_CSRF_TOKEN, "_csrf", cookie.getValue());
        }
      }
    }
    return null;
  }

  @Override
  public CookieCsrfToken generateTokenCookieType(HttpServletRequest request) {
    String token = UUID.randomUUID().toString();
    return new CookieCsrfToken(X_CSRF_TOKEN, "_csrf", token);
  }

  @Override
  public CsrfToken generateToken(HttpServletRequest request) {
    String token = UUID.randomUUID().toString();
    return new DefaultCsrfToken(X_CSRF_TOKEN, "_csrf", token);
  }


  @Override
  public void saveToken(CsrfToken token, HttpServletRequest request, HttpServletResponse response) {
    if (token == null) {
      Cookie cookie = new Cookie("_csrf", "");
      cookie.setMaxAge(0);
      response.setHeader(X_CSRF_TOKEN, "");
      response.addCookie(cookie);
    } else {
      Cookie cookie = new Cookie("_csrf", token.getToken());
      cookie.setHttpOnly(true);
      cookie.setSecure(true);
      cookie.setPath("/");
      response.setHeader(X_CSRF_TOKEN, token.getToken());
      response.addCookie(cookie);
    }
  }

  @Override
  public CsrfToken loadToken(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        if (cookie.getName().equals("_csrf")) {
          return new DefaultCsrfToken(X_CSRF_TOKEN, "_csrf", cookie.getValue());
        }
      }
    }
    return null;
  }
}
