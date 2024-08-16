package ctoutweb.lalamiam.security.filter;

import ctoutweb.lalamiam.security.csrf.CookieCsrfTokenRepository;
import ctoutweb.lalamiam.security.csrf.CustomCsrfTokenRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Suppression des cookies et header lors du logout
 */
@PropertySource({"classpath:application.properties"})
public class OnLogoutFilter extends OncePerRequestFilter {
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
  private static final Logger LOGGER = LogManager.getLogger();
  private final AntPathRequestMatcher pathMatcher = new AntPathRequestMatcher("/api/auth/logout/**", "GET");
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    LOGGER.debug(String.format("pathmatcher: %s", pathMatcher));
    LOGGER.debug(String.format("Resultat du pathmatcher: %s", pathMatcher.matches(request)));

    if(pathMatcher.matches(request)) {
      response.addHeader("Set-Cookie",removeCookie());
    }

    filterChain.doFilter(request, response);
  }


  /**
   * Suppression du cookie
   * @return String
   */
  public String removeCookie() {
    LOGGER.debug(String.format("isCookieSecure: %s", isCookieSecure));
    LOGGER.debug(String.format("isCookieHttpOnly: %s", isCookieHttpOnly));

    Cookie cookie = new Cookie("_csrf", null);
    String cookieHeader = "";
    if(isCookieHttpOnly) {
      cookieHeader = isCookieSecure ?
              String.format("%s=%s; HttpOnly; Secure; Path=%s; SameSite=%S; Max-Age=0", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite) :
              String.format("%s=%s; HttpOnly; Path=%s; SameSite=%S; Max-Age=0", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite);
    } else {
      cookieHeader = isCookieSecure ?
              String.format("%s=%s; Secure; Path=%s; SameSite=%S; Max-Age=0", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite) :
              String.format("%s=%s; Path=%s; SameSite=%S; Max-Age=0", cookie.getName(), cookie.getValue(), cookiePath, cookieSameSite);
    }
    return cookieHeader;
  }
}
