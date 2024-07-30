package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.model.JwtIssue;
import ctoutweb.lalamiam.repository.JwtRepository;
import ctoutweb.lalamiam.repository.entity.JwtEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.JwtService;
import org.springframework.stereotype.Service;



@Service
public class JwtServiceImpl implements JwtService {

  private final JwtRepository jwtRepository;

  public JwtServiceImpl(JwtRepository jwtRepository) {
    this.jwtRepository = jwtRepository;
  }

  @Override
  public void saveJwt(Long userId, JwtIssue jwt, String email) {
    UserEntity userLogin = new UserEntity(userId);
    JwtEntity insertJwtLogin = new JwtEntity(jwt.getJwtToken(), jwt.getJwtId(), userLogin, email, jwt.getExpiredAt());
    jwtRepository.save(insertJwtLogin);
  }

  @Override
  public Boolean isJwtValid(Long userId, String jwt, String jwtId) {

    return null;
  }

  @Override
  public void deleteJwtByUserEmail(String email) {
    if(jwtRepository.findOneByEmail(email).isPresent()){
      jwtRepository.deleteByEmail(email);
    }

  }

  @Override
  public void deleteJwtByUserId(Long userId) {
    jwtRepository.deleteByUser(new UserEntity(userId));
  }
}
