package ctoutweb.lalamiam.security.authentication;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserPrincipal implements UserDetails {
  private Long id;
  private String email;
  private String password;
  private Collection< ? extends GrantedAuthority > authorities;
  private Boolean isAccountActive;


  public Long getId() {
    return id;
  }
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return false;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {

    return false;
  }

  @Override
  public boolean isEnabled() {

    return false;
  }



  public String getEmail() {
    return email;
  }

  public static final class UserPrincipalBuilder {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Boolean isAccountActive;

    private UserPrincipalBuilder() {
    }

    public static UserPrincipalBuilder anUserPrincipal() {
      return new UserPrincipalBuilder();
    }

    public UserPrincipalBuilder withId(Long id) {
      this.id = id;
      return this;
    }

    public UserPrincipalBuilder withEmail(String email) {
      this.email = email;
      return this;
    }

    public UserPrincipalBuilder withPassword(String password) {
      this.password = password;
      return this;
    }

    public UserPrincipalBuilder withAuthorities(Collection<? extends GrantedAuthority> authorities) {
      this.authorities = authorities;
      return this;
    }

    public UserPrincipalBuilder withIsAccountActive(Boolean isAccountActive) {
      this.isAccountActive = isAccountActive;
      return this;
    }

    public UserPrincipal build() {
      UserPrincipal userPrincipal = new UserPrincipal();
      userPrincipal.isAccountActive = this.isAccountActive;
      userPrincipal.id = this.id;
      userPrincipal.password = this.password;
      userPrincipal.authorities = this.authorities;
      userPrincipal.email = this.email;
      return userPrincipal;
    }
  }

  @Override
  public String toString() {
    return "UserPrincipal{" +
            "id=" + id +
            ", email='" + email + '\'' +
            ", password='" + password + '\'' +
            ", authorities=" + authorities +
            ", isAccountActive=" + isAccountActive +
            '}';
  }
}
