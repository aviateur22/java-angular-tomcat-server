package ctoutweb.lalamiam.repository.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "account")
public class AccountEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "is_account_active", columnDefinition = "boolean default TRUE")
  private Boolean isAccountActive;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private UserEntity accountUser;

  @CreationTimestamp
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  public AccountEntity() {}

  /**
   * Constructeur pour creation d'un compte
   * @param user
   */
  public AccountEntity(UserEntity user) {
    this.accountUser = user;
    this.isAccountActive = true;

  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Boolean getIsAccountActive() {
    return isAccountActive;
  }

  public void setIsAccountActive(Boolean accountActive) {
    isAccountActive = accountActive;
  }

  public UserEntity getUser() {
    return accountUser;
  }

  public void setUser(UserEntity user) {
    this.accountUser = user;
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
    return "AccountEntity{" +
            "id=" + id +
            ", isAccountActive=" + isAccountActive +
           // ", user=" + accountUser +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            '}';
  }
}
