package ctoutweb.lalamiam.security.filter;

import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.security.authentication.UserPrincipalAuthenticationToken;
import ctoutweb.lalamiam.security.jwt.JwtDecode;
import ctoutweb.lalamiam.security.jwt.JwtToUserPrincipal;
import ctoutweb.lalamiam.security.url.AuthenticationType;
import ctoutweb.lalamiam.util.HttpServletUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class FullJwtAuthFilter extends OncePerRequestFilter {
  private static final Logger LOGGER = LogManager.getLogger();
  private final JwtToUserPrincipal jwtToUserPrincipal;
  private final JwtDecode jwtDecode;
  private final FilterJwtHelper JwtHelper;

  public FullJwtAuthFilter(
          JwtToUserPrincipal jwtToUserPrincipal,
          JwtDecode jwtDecode,
          FilterJwtHelper jwtHelper) {
    this.jwtToUserPrincipal = jwtToUserPrincipal;
    this.jwtDecode = jwtDecode;
    this.JwtHelper = jwtHelper;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    try {
      String urlPath = request.getRequestURI();
      AuthenticationType type = AuthenticationType.getType(urlPath);

      // Pas de control JWT pour les types = à AuthenticationType.PERMIT_ALL_AUTH
      if(type == AuthenticationType.PERMIT_ALL_AUTH || type == AuthenticationType.PARTIAL_AUTH) {
        LOGGER.debug(String.format("L'accés au path: %s n'est pas soumis au controle: %s" , urlPath, FullJwtAuthFilter.class));
        filterChain.doFilter(request, response);
        return;
      }
      LOGGER.debug(String.format("L'accés au path: %s et controllé par: %s" , urlPath, FullJwtAuthFilter.class));

      JwtHelper.extractJwtFromHeaders(request)
              .map(token->jwtDecode.decode(token))
              .map(decodeJwt-> JwtHelper.validateJwt(urlPath, decodeJwt))
              .map(jwtToUserPrincipal::convert)
              .map(userPrincipal->new UserPrincipalAuthenticationToken(userPrincipal))
              .ifPresentOrElse(auth-> SecurityContextHolder.getContext().setAuthentication(auth), () -> {
                throw new AuthException("echec validation JWT", HttpStatus.FORBIDDEN);
              });
      filterChain.doFilter(request, response);
    }
    catch (AuthException ex) {
      response.setStatus(ex.getStatus().value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      HttpServletUtility.formatResponseMessage( response,"error", ex.getMessage());
    }
    catch (JWTDecodeException ex) {
      response.setStatus(HttpStatus.BAD_REQUEST.value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      HttpServletUtility.formatResponseMessage(response,"error", "Le JWT n'est pas valide");
    }
    catch (TokenExpiredException ex) {
      response.setStatus(HttpStatus.UNAUTHORIZED.value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      HttpServletUtility.formatResponseMessage(response,"error", "Le JWT à expiré");
    }
    catch (Exception ex) {
      response.setStatus(HttpStatus.BAD_REQUEST.value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      HttpServletUtility.formatResponseMessage(response,"error", "Filtre JWT - Erreur interne");
    }
  }

}
