package ctoutweb.lalamiam.repository.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "account")
public class AccountEntity {

  @PrePersist
  public void onCreate() {
    if (this.accountActivationLimitDateAt == null) {
      this.accountActivationLimitDateAt = LocalDateTime.now().plusDays(7).with(LocalTime.MAX);
      this.isAccountActive = false;
    }
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "account_activation_at")
  private LocalDateTime accountActivationAt;

  @Column(name = "account_activation_limit_date_at")
  private LocalDateTime accountActivationLimitDateAt;
  @Column(name = "is_account_active")
  private Boolean isAccountActive;

  @Column(name = "token_activation")
  private String tokenActivation;

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
  public AccountEntity(UserEntity user, String tokenActivationHash) {
    this.accountUser = user;
    this.isAccountActive = true;
    this.tokenActivation = tokenActivationHash;
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

  public LocalDateTime getAccountActivationAt() {
    return accountActivationAt;
  }

  public void setAccountActivationAt(LocalDateTime accountActivationAt) {
    this.accountActivationAt = accountActivationAt;
  }

  public LocalDateTime getAccountActivationLimitDateAt() {
    return accountActivationLimitDateAt;
  }

  public void setAccountActivationLimitDateAt(LocalDateTime accountActivationLimitDateAt) {
    this.accountActivationLimitDateAt = accountActivationLimitDateAt;
  }

  public String getTokenActivation() {
    return tokenActivation;
  }

  public void setTokenActivation(String tokenActivation) {
    this.tokenActivation = tokenActivation;
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
            ", activationDate=" + accountActivationAt +
            ", activationAccountToken=" + tokenActivation +
           // ", user=" + accountUser +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            '}';
  }
}
