package ctoutweb.lalamiam.security.filter;

import ctoutweb.lalamiam.model.csrf.CookieCsrfToken;
import ctoutweb.lalamiam.model.csrf.HeaderCsrfFormToken;
import ctoutweb.lalamiam.security.csrf.CustomCsrfTokenRepository;

import ctoutweb.lalamiam.util.HttpServletUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.regex.Pattern;

public class CookieCsrfFilter extends OncePerRequestFilter {
  private static final Logger LOGGER = LogManager.getLogger();
  private final RequestMatcher requireCsrfProtectionMatcher = new DefaultRequiresCsrfMatcher();
  private final CustomCsrfTokenRepository csrfTokenRepository;
  public CookieCsrfFilter(CustomCsrfTokenRepository csrfTokenRepository) {
    this.csrfTokenRepository = csrfTokenRepository;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    try {
      boolean isCookieGenerate = false;

      CookieCsrfToken csrfCookieToken = csrfTokenRepository.loadCookieToken(request);
      HeaderCsrfFormToken headerCsrfFormToken = csrfTokenRepository.loadHeaderToken(request);

      if(csrfCookieToken == null) {
        isCookieGenerate = true;
        csrfCookieToken = csrfTokenRepository.generateTokenCookieType(request);
        csrfTokenRepository.saveToken(csrfCookieToken, request, response);
      }

      // Vérification CSRF pour une methode POST
      if (requireCsrfProtectionMatcher.matches(request)) {
        if(!areCsrfHeaderCookieEquals(isCookieGenerate, headerCsrfFormToken, csrfCookieToken)) {
          LOGGER.error(String.format("Données Token %s, %s",csrfCookieToken.getToken(), headerCsrfFormToken.getToken()));
          LOGGER.error(String.format("Erreur TOKEN CSRF - Path: %s  - CSRF Formulaire Header: %s - CSRF Cookie: %s",
                  request.getRequestURI(),
                  headerCsrfFormToken != null ? headerCsrfFormToken.toString() : null,
                  csrfCookieToken != null ? csrfCookieToken.toString() : null)
          );

          response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
          response.setContentType(MediaType.APPLICATION_JSON_VALUE);
          HttpServletUtility.formatResponseMessage( response,"error", "Le token CSRF n'est pas valide");
          return;
        }
      }
      filterChain.doFilter(request, response);
    } catch (Exception ex) {
      LOGGER.error(ex);
      response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      HttpServletUtility.formatResponseMessage( response,"error", ex.getMessage());
    }
  }

  public static final class DefaultRequiresCsrfMatcher implements RequestMatcher {
    private final Pattern allowedMethods = Pattern.compile("^(GET|HEAD|TRACE|OPTIONS)$");

    @Override
    public boolean matches(HttpServletRequest request) {
      return !allowedMethods.matcher(request.getMethod()).matches();
    }
  }

  /**
   * Vérification du token CSRF
   * @param isCookieGenerate boolean
   * @return boolean
   */
  private boolean areCsrfHeaderCookieEquals(boolean isCookieGenerate, HeaderCsrfFormToken headerCsrfFormToken, CookieCsrfToken csrfCookieToken) {
    // Nouveau cookie + CSRF alors validation automatique du CSRF
    if(isCookieGenerate)
      return true;

    if (headerCsrfFormToken == null)
      return false;

    if(!csrfCookieToken.getToken().equals(headerCsrfFormToken.getToken()))
      return false;
    return true;
  }
}
