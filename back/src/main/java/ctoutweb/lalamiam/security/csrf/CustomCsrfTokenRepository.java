package ctoutweb.lalamiam.security.csrf;

import ctoutweb.lalamiam.model.csrf.CookieCsrfToken;
import ctoutweb.lalamiam.model.csrf.HeaderCsrfFormToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;

import javax.servlet.http.HttpServletRequest;

public interface CustomCsrfTokenRepository extends CsrfTokenRepository {
  /**
   * Chargement CSRF Token provenant du formulaire
   * @param request HttpServletRequest
   * @return HeaderCsrfFormToken
   */
  public HeaderCsrfFormToken loadHeaderToken(HttpServletRequest request);

  public CookieCsrfToken loadCookieToken(HttpServletRequest request);

  public CookieCsrfToken generateTokenCookieType(HttpServletRequest request);



}
