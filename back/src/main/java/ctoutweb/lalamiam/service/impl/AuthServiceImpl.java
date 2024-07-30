package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.RegisterFactory;
import ctoutweb.lalamiam.model.*;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.security.authentication.UserPrincipal;
import ctoutweb.lalamiam.security.jwt.JwtIssuer;
import ctoutweb.lalamiam.service.AuthService;
import ctoutweb.lalamiam.service.JwtService;
import ctoutweb.lalamiam.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final AuthenticationManager authenticationManager;
  private final UserService userService;
  private final JwtService jwtService;
  private final JwtIssuer jwtIssuer;

  public AuthServiceImpl(
          AuthenticationManager authenticationManager,
          UserService userService,
          JwtService jwtService,
          JwtIssuer jwtIssuer) {
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtService = jwtService;
    this.jwtIssuer = jwtIssuer;
  }

  @Override
  @Transactional
  public LoginResponseDto login(LoginDto loginDto) {
    // Destruction JWT existant
    jwtService.deleteJwtByUserEmail(loginDto.email());

    Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginDto.email(), loginDto.password())
    );

    SecurityContextHolder.getContext().setAuthentication(auth);
    UserPrincipal userPrincipal = (UserPrincipal) auth.getPrincipal();

    LOGGER.debug("userPrincipal: " + userPrincipal);

    JwtIssue jwtIssue = jwtIssuer.issue(userPrincipal);

    LOGGER.debug("jwt connexion: " + jwtIssue);

    jwtService.saveJwt(userPrincipal.getId(), jwtIssue, loginDto.email() );

    return new LoginResponseDto(
            jwtIssue.getJwtToken(),
            userPrincipal.getEmail(),
            userPrincipal.getId(),
            userPrincipal.getAuthorities().stream().map(authority->authority.getAuthority()).collect(Collectors.toList()),
            "Bienvenu " + userPrincipal.getUsername());
  }

  @Override
  public RegisterResponse register(RegisterDto registerDto) {
    UserEntity findUser = userService.getUserInformationByEmail(registerDto.email());

    if(findUser != null) throw new AuthException("Email déja existant", HttpStatus.CONFLICT);

    UserEntity registerUser = userService.registerUser(registerDto);

    return RegisterFactory.getRegisterResponse("Enregistrement utilisateur " + registerUser.getEmail());
  }

  @Override
  @Transactional
  public String logout(Long userId) {
    jwtService.deleteJwtByUserId(userId);
    return "Au revoir";
  }
}
