package ctoutweb.lalamiam.repository.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "jwt")
public class JwtEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "jwt_token")
  private String jwtToken;

  @Column(name = "jwt_id")
  private String jwtId;

  @Column(name = "email")
  private String email;

  @Column(name = "expired_at")
  private LocalDateTime expiredAt;

  @Column(name = "is_valid")
  private Boolean isValid;

  @CreationTimestamp
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  @OneToOne
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private UserEntity user;

  public JwtEntity() {
  }

  public JwtEntity(UserEntity user) {
    this.user = user;
  }

  /**
   * Constructeur suite a une demande de login d'un utilisateur
   * @param jwtToken
   * @param jwtId
   * @param user
   */
  public JwtEntity(String jwtToken, String jwtId, UserEntity user, String email, LocalDateTime jwtExpiredAt) {
    this.jwtToken = jwtToken;
    this.jwtId = jwtId;
    this.user = user;
    this.email = email;
    this.isValid = true;
    this.expiredAt = jwtExpiredAt;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  public String getJwtId() {
    return jwtId;
  }

  public void setJwtId(String jwtId) {
    this.jwtId = jwtId;
  }

  public Boolean getIsValid() {
    return isValid;
  }

  public void setIsValid(Boolean valid) {
    isValid = valid;
  }

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
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

  public LocalDateTime getExpiredAt() {
    return expiredAt;
  }

  public void setExpiredAt(LocalDateTime expiredAt) {
    this.expiredAt = expiredAt;
  }

  @Override
  public String toString() {
    return "JwtEntity{" +
            "id=" + id +
            ", jwtToken='" + jwtToken + '\'' +
            ", jwtId='" + jwtId + '\'' +
            ", isValid=" + isValid +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            //", user=" + user +
            '}';
  }
}
