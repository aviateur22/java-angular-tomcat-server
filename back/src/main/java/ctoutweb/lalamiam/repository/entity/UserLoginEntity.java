package ctoutweb.lalamiam.repository.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "user_login")
public class UserLoginEntity {

  @PrePersist
  public void newUserLogin() {
    hasToBeCheck = true;
  }
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "has_to_be_check")
  private boolean hasToBeCheck;

  @Column(name = "is_login_success")
  private boolean isLoginSuccess;

  @Column(name = "login_at")
  private LocalDateTime loginAt;

  @ManyToOne
  @JoinColumn(name="user_id", nullable=false)
  private UserEntity user;

  public UserLoginEntity() {
  }

  public UserLoginEntity(boolean isLoginSuccess, UserEntity user, LocalDateTime loginTime) {
    this.isLoginSuccess = isLoginSuccess;
    this.user = user;
    this.loginAt = loginTime;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public boolean getIsLoginSuccess() {
    return isLoginSuccess;
  }

  public void setIsLoginSuccess(boolean loginSuccess) {
    isLoginSuccess = loginSuccess;
  }

  public LocalDateTime getLoginAt() {
    return loginAt;
  }

  public void setLoginAt(LocalDateTime loginAt) {
    this.loginAt = loginAt;
  }

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

  public boolean getHasToBeCheck() {
    return hasToBeCheck;
  }

  public void setHasToBeCheck(boolean hasToBeCheck) {
    this.hasToBeCheck = hasToBeCheck;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    UserLoginEntity userLogin = (UserLoginEntity) o;
    return hasToBeCheck == userLogin.hasToBeCheck && isLoginSuccess == userLogin.isLoginSuccess && Objects.equals(id, userLogin.id) && Objects.equals(loginAt, userLogin.loginAt) && Objects.equals(user, userLogin.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, hasToBeCheck, isLoginSuccess, loginAt, user);
  }

  @Override
  public String toString() {
    return "UserLoginEntity{" +
            "id=" + id +
            ", isLoginSuccess=" + isLoginSuccess +
            ", HasToBeCheck=" + hasToBeCheck +
            ", user=" + user +
            '}';
  }
}
