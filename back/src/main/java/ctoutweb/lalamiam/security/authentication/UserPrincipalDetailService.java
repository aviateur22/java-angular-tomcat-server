package ctoutweb.lalamiam.security.authentication;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

@Service
public class UserPrincipalDetailService implements UserDetailsService {

  private final UserService userService;
  private final Properties messageExceptions;
  public UserPrincipalDetailService(
          UserService userService,
          @Qualifier("exceptionMessages") Properties messageExceptions) {
    this.userService = userService;
    this.messageExceptions = messageExceptions;
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws AuthException {
    UserEntity user = userService.getUserInformationByEmail(email);

    if(user == null)
      return null;

    return UserPrincipal.UserPrincipalBuilder.anUserPrincipal()
            .withId(user.getId())
            .withEmail(user.getEmail())
            .withPassword(user.getPassword())
            .withIsAccountActive(user.getAccount().getIsAccountActive())
            .withAuthorities(convertRoleUserToAuthorities(user.getRoleUsers()))
            .build();
  }

  /**
   * convertion list<RoleUser> en List<GrantedAuthority>
   * @param roles List<RoleUserEntity>
   * @return List<SimpleGrantedAuthority>
   */
  public List<SimpleGrantedAuthority> convertRoleUserToAuthorities(List<RoleUserEntity> roles) {
    return roles
            .stream()
            .map(role->role.getRole())
            .map(role->new SimpleGrantedAuthority(role.getName()))
            .collect(Collectors.toList());
  }
}
