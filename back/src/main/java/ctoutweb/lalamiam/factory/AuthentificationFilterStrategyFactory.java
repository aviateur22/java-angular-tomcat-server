//package ctoutweb.lalamiam.factory;
//
//import ctoutweb.lalamiam.exception.AuthException;
//import ctoutweb.lalamiam.security.strategy.Authentication.filter.AuthenticationFilterStrategy;
//import ctoutweb.lalamiam.security.url.AuthenticationType;
//import ctoutweb.lalamiam.security.strategy.Authentication.filter.impl.PermitAllStrategie;
//import ctoutweb.lalamiam.security.strategy.Authentication.filter.impl.MiddleStrategy;
//import ctoutweb.lalamiam.security.strategy.Authentication.filter.impl.AuthenticatedStrategy;
//import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Component;
//
//@Component
//public class AuthentificationFilterStrategyFactory {
//  private final AuthenticatedStrategy authenticadtedStrategy;
//  private final MiddleStrategy middleStrategy;
//  private final PermitAllStrategie permitAllStrategie;
//  private static AuthentificationFilterStrategyFactory instance;
//  public AuthentificationFilterStrategyFactory(
//          AuthenticatedStrategy authStandardStrategy,
//          MiddleStrategy authLogoutStrategy,
//          PermitAllStrategie authLoginRegisterStrategie) {
//    this.authenticadtedStrategy = authStandardStrategy;
//    this.middleStrategy = authLogoutStrategy;
//    this.permitAllStrategie = authLoginRegisterStrategie;
//    instance = this;
//  }
//
//  /**
//   * Recherche de la stratégy a appliquer fct du path
//   * @param urlPath String - path url
//   * @return AuthenticationFilterStrategy
//   * @throws AuthException
//   */
//  public static AuthenticationFilterStrategy getAuthenticationFilterStrategy(String urlPath) throws AuthException {
//
//   AuthenticationType type = AuthenticationType.getType(urlPath);
//
//   if (type == null) throw new AuthException("Strategie filtre Authentification inexistante", HttpStatus.UNAUTHORIZED);
//
//    return switch (type) {
//      case PARTIAL_AUTH -> instance.middleStrategy;
//      case FULL_AUTH -> instance.authenticadtedStrategy;
//      case PERMIT_ALL_AUTH -> instance.permitAllStrategie;
//      default -> null;
//    };
//  }
//}
