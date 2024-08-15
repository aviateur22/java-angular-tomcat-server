package ctoutweb.lalamiam.security.csrf;

import ctoutweb.lalamiam.model.csrf.CookieCsrfToken;
import ctoutweb.lalamiam.model.csrf.HeaderCsrfFormToken;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.DefaultCsrfToken;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * Custom CsrfTokenRepository pour la gestion des cookies
 */

@PropertySource({"classpath:application.properties"})
public class CookieCsrfTokenRepository implements CustomCsrfTokenRepository {
  private static final Logger LOGGER = LogManager.getLogger();
  @Value("${cookie.domain}")
  String cookieDomain;
  @Value("${cookie.secure}")
  boolean isCookieSecure;
  @Value("${cookie.samesite}")
  String cookieSameSite;
  @Value("${cookie.path}")
  String cookiePath;

  @Value("${cookie.is.httponly}")
  boolean isCookieHttpOnly;

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
      LOGGER.debug(String.format("Cookie samesite: %s", this.cookieSameSite));
      LOGGER.debug(String.format("Cookie domain: %s", this.cookieDomain));
      LOGGER.debug(String.format("Cookie secure: %s", this.isCookieSecure));
      LOGGER.debug(String.format("Cookie path: %s", this.cookiePath));
      response.addHeader("Set-Cookie", getCookie(token));
      response.addHeader(FORM_CSRF_TOKEN, token.getToken());
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

  private String getCookie(CsrfToken token) {
    Cookie cookie = new Cookie("_csrf", token.getToken());
    String cookieHeader = "";
    if(isCookieHttpOnly) {
      cookieHeader = isCookieSecure ?
              String.format("%s=%s; HttpOnly; Secure; Path=%s; SameSite=%S; Max-Age=3600", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite) :
              String.format("%s=%s; HttpOnly; Path=%s; SameSite=%S; Max-Age=3600", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite);
    } else {
      cookieHeader = isCookieSecure ?
              String.format("%s=%s; Secure; Path=%s; SameSite=%S; Max-Age=3600", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite) :
              String.format("%s=%s; Path=%s; SameSite=%S; Max-Age=3600", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite);
    }
    return cookieHeader;
  }
}
