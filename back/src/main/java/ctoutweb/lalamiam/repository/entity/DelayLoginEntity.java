package ctoutweb.lalamiam.repository.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "delay_login")
public class DelayLoginEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "login_delay_until")
  private LocalDateTime delayLoginUntil;

  @CreationTimestamp
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
  @OneToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private UserEntity user;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public LocalDateTime getDelayLoginUntil() {
    return delayLoginUntil;
  }

  public void setDelayLoginUntil(LocalDateTime delayLoginUntil) {
    this.delayLoginUntil = delayLoginUntil;
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

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    DelayLoginEntity that = (DelayLoginEntity) o;
    return Objects.equals(id, that.id) && Objects.equals(delayLoginUntil, that.delayLoginUntil) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt) && Objects.equals(user, that.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, delayLoginUntil, createdAt, updatedAt, user);
  }

  @Override
  public String toString() {
    return "DelayLoginEntity{" +
            "id=" + id +
            ", delayLoginUntil=" + delayLoginUntil +
            ", createdAt=" + createdAt +
            ", updatedAt=" + updatedAt +
            ", user=" + user +
            '}';
  }
}
