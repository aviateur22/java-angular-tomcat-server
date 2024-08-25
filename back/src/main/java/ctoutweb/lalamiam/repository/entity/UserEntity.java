package ctoutweb.lalamiam.repository.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
  private String password;
  @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
  private List<RoleUserEntity> roleUsers;

  @OneToOne(mappedBy = "accountUser", cascade = CascadeType.REMOVE)
  private AccountEntity account;
  @OneToOne(mappedBy = "user")
  private JwtEntity jwt;

  @CreationTimestamp
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  public UserEntity() {
  }

  public UserEntity(String email, String password, String name) {
    this.email = email;
    this.password = password;
    this.name = name;
  }

  public UserEntity(Long id) {
    this.id = id;
  }

  public UserEntity(String email) {
    this.email = email;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public AccountEntity getAccount() {
    return account;
  }

  public void setAccount(AccountEntity account) {
    this.account = account;
  }

  public JwtEntity getJwt() {
    return jwt;
  }

  public void setJwt(JwtEntity jwt) {
    this.jwt = jwt;
  }

  public List<RoleUserEntity> getRoleUsers() {
    return roleUsers;
  }
  public void setRoleUsers(List<RoleUserEntity> roleUsers) {
    this.roleUsers = roleUsers;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }

  @Override
  public String toString() {
    return "UserEntity{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", email='" + email + '\'' +
            ", password='" + password + '\'' +
            ", roleUsers=" + roleUsers +
            ", account=" + account +
            ", jwt=" + jwt +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            '}';
  }
}
