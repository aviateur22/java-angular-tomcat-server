package ctoutweb.lalamiam.config;

import ctoutweb.lalamiam.security.authentication.CustomAuthProvider;
import ctoutweb.lalamiam.security.authentication.UserPrincipalDetailService;

import ctoutweb.lalamiam.security.filter.CookieCsrfFilter;
import ctoutweb.lalamiam.security.filter.FullJwtAuthFilter;
import ctoutweb.lalamiam.security.filter.PartialJwtAuthFilter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class WebSecurity {

  private static final Logger LOGGER = LogManager.getLogger();

  private final UserPrincipalDetailService userPrincipalDetailService;
  private final CustomAuthProvider customAuthProvider;
  private final FullJwtAuthFilter fullJwtAuthFilter;
  private final PartialJwtAuthFilter partialJwtAuthFilter;
  private final CookieCsrfFilter cookieCsrfFilter;

  public WebSecurity(
          UserPrincipalDetailService userPrincipalDetailService,
          CustomAuthProvider customAuthProvider,
          FullJwtAuthFilter fullJwtAuthFilter,
          PartialJwtAuthFilter partialJwtAuthFilter,
          CookieCsrfFilter cookieCsrfFilter) {
    this.userPrincipalDetailService = userPrincipalDetailService;
    this.customAuthProvider = customAuthProvider;
    this.fullJwtAuthFilter = fullJwtAuthFilter;
    this.partialJwtAuthFilter = partialJwtAuthFilter;
    this.cookieCsrfFilter = cookieCsrfFilter;
  }

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
            .addFilterBefore(fullJwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(partialJwtAuthFilter,FullJwtAuthFilter.class)
            .csrf().disable().addFilterBefore(cookieCsrfFilter, CsrfFilter.class)
            .authorizeRequests(httpRequest->httpRequest
                    .antMatchers("/api/client").hasAnyRole("ADMIN", "CLIENT")
                    .antMatchers("/api/admin").hasRole("ADMIN")
            )
            .cors(cors-> cors.configurationSource(corsConfiguration()))
            .exceptionHandling(exception->exception.authenticationEntryPoint(
                (request, response, authException) -> {
                  String message = authException.getMessage();
                  response.sendError(response.getStatus(), "Erreur");
                }
            ))
            .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .formLogin(AbstractHttpConfigurer::disable);

    return http.build();
  }

  @Bean
  AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
    return http.getSharedObject(AuthenticationManagerBuilder.class)
            .authenticationProvider(customAuthProvider)
            .userDetailsService(userPrincipalDetailService)
            .and().build();
  }

  CorsConfigurationSource corsConfiguration() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

    // Path WebApp
    CorsConfiguration corsForWebAppPath = new CorsConfiguration();
    corsForWebAppPath.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
    corsForWebAppPath.setAllowedMethods(Arrays.asList("GET"));
    corsForWebAppPath.setAllowedHeaders(Arrays.asList(
            "Content-Type",
            "Authorization",
            "Form-Csrf-Token")
    );
    source.registerCorsConfiguration("/", corsForWebAppPath);
    source.registerCorsConfiguration("/api/users", corsForWebAppPath);
    source.registerCorsConfiguration("/api/version", corsForWebAppPath);

    // Path Auth
    CorsConfiguration corsAuthPath = new CorsConfiguration();
    corsAuthPath.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
    corsAuthPath.setAllowedMethods(Arrays.asList("POST", "GET"));
    corsAuthPath.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization","Form-Csrf-Token"));
    corsAuthPath.setAllowCredentials(true);
    source.registerCorsConfiguration("/api/auth/**", corsAuthPath);

    // Other
    CorsConfiguration corsOtherPath = new CorsConfiguration();
    corsOtherPath.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
    corsOtherPath.setAllowedMethods(Arrays.asList("GET, POST"));
    corsOtherPath.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization", "Form-Csrf-Token"));
    corsOtherPath.setAllowCredentials(true);
    source.registerCorsConfiguration("/api/client/**", corsOtherPath);
    source.registerCorsConfiguration("/api/admin/**", corsOtherPath);


    return  source;
  }
}
