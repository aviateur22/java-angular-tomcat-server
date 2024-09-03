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

  @Column(name = "url_token_activation")
  private String urlTokenActivation;

  @Column(name = "change_password_token")
  private String changePasswordToken;

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
  public AccountEntity(UserEntity user, String urlTokenActivationHash) {
    this.accountUser = user;
    this.isAccountActive = true;
    this.urlTokenActivation = urlTokenActivationHash;
  }

  public AccountEntity(
          UserEntity user,
          String urlTokenActivationHash,
          String changePasswordTokenHash
  ) {
    this.accountUser = user;
    this.isAccountActive = true;
    this.urlTokenActivation = urlTokenActivationHash;
    this.changePasswordToken = changePasswordTokenHash;
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

  public String getUrlTokenActivation() {
    return urlTokenActivation;
  }

  public void setUrlTokenActivation(String urlTokenActivation) {
    this.urlTokenActivation = urlTokenActivation;
  }

  public String getChangePasswordToken() {
    return changePasswordToken;
  }

  public void setChangePasswordToken(String changePasswordToken) {
    this.changePasswordToken = changePasswordToken;
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
            ", urlAccountToken=" + urlTokenActivation +
            ", changePasswordToken=" + changePasswordToken +
           // ", user=" + accountUser +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            '}';
  }
}
