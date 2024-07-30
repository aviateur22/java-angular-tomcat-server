package ctoutweb.lalamiam.repository.entity;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "role")
public class RoleEntity {
  @Id
  private Integer id;
  private String name;
  @CreationTimestamp
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public RoleEntity() {
  }

  public RoleEntity(Integer id) {
    this.id = id;
  }
  public RoleEntity(Integer id, String name) {
    this.id = id;
    this.name = name;
  }


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
