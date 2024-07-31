package ctoutweb.lalamiam.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import ctoutweb.lalamiam.model.csrf.CookieCsrfToken;
import ctoutweb.lalamiam.model.csrf.HeaderCsrfFormToken;
import ctoutweb.lalamiam.security.csrf.CustomCsrfTokenRepository;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
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
    CookieCsrfToken csrfCookieToken = csrfTokenRepository.loadCookieToken(request);
    HeaderCsrfFormToken headerCsrfFormToken = csrfTokenRepository.loadFormToken(request);

    if(csrfCookieToken == null) {
      csrfCookieToken = csrfTokenRepository.generateTokenCookieType(request);
      csrfTokenRepository.saveToken(csrfCookieToken, request, response);
    }

    if (requireCsrfProtectionMatcher.matches(request)) {
      if (headerCsrfFormToken == null || csrfCookieToken == null) {
        LOGGER.error(String.format("Token CSRF indisponible pour vérification"));

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Token CSRF indisponible pour vérification");
        ObjectMapper mapper = new ObjectMapper();
        response.getOutputStream().write(mapper.writeValueAsBytes(errorResponse));
        return;
      }

      if(!csrfCookieToken.getToken().equals(headerCsrfFormToken.getToken())) {
        LOGGER.error(String.format("Données Token %s, %s",csrfCookieToken.getToken(), headerCsrfFormToken.getToken()));
        LOGGER.error(String.format("Erreur TOKEN CSRF - Path: %s  - CSRF Formulaire Header: %s - CSRF Cookie: %s",
                request.getRequestURI(),
                headerCsrfFormToken != null ? headerCsrfFormToken.toString() : null,
                csrfCookieToken != null ? csrfCookieToken.toString() : null)
        );

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalide CSRF");
        ObjectMapper mapper = new ObjectMapper();
        response.getOutputStream().write(mapper.writeValueAsBytes(errorResponse));
        return;
      }
    }

    filterChain.doFilter(request, response);
  }

  public static final class DefaultRequiresCsrfMatcher implements RequestMatcher {
    private final Pattern allowedMethods = Pattern.compile("^(GET|HEAD|TRACE|OPTIONS)$");

    @Override
    public boolean matches(HttpServletRequest request) {
      return !allowedMethods.matcher(request.getMethod()).matches();
    }
  }
}
