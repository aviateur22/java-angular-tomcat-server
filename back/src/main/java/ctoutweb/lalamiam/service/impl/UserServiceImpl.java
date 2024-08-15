package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.repository.UserRepository;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.AccountService;
import ctoutweb.lalamiam.service.RoleService;
import ctoutweb.lalamiam.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final PasswordEncoder passwordEncoder;
  private final UserRepository userRepository;
  private final EntityManagerFactory entityManagerFactory;
  private final AccountService accountService;
  private final RoleService roleService;
  public UserServiceImpl(
          PasswordEncoder passwordEncoder,
          UserRepository userRepository,
          EntityManagerFactory entityManagerFactory,
          AccountService accountService,
          RoleService roleService) {
    this.passwordEncoder = passwordEncoder;
    this.userRepository = userRepository;
    this.entityManagerFactory = entityManagerFactory;
    this.accountService = accountService;
    this.roleService = roleService;
  }
  @Override
  public String getTotalOfUsers() {

    List<UserEntity> users = userRepository.findAll();
    Long userNumber = userRepository.count();

    return users.stream().map(user -> user.getName() != null ? user.getName() : "Pas de nom").collect(Collectors.joining(",")) + " soit  " + userNumber + " utilisateurs";
  }
  @Override
  public UserEntity getUserInformationByEmail(String email) {
    UserEntity user = null;
    Session session = entityManagerFactory.unwrap(SessionFactory.class).openSession();
    Transaction transaction = session.beginTransaction();
    try {
      Query<UserEntity> query = session.createQuery("FROM UserEntity u WHERE LOWER(u.email) = :email", UserEntity.class);
      query.setParameter("email", email);
      user = query.uniqueResult();

      // Si pas de user
      if(user == null) return null;

      Hibernate.initialize(user.getRoleUsers());
      Hibernate.initialize(user.getAccount());
      transaction.commit();
    } catch (Exception ex) {
      LOGGER.error("getUserInformationByEmail exception: " +  ex);

    } finally {
      session.close();
      return user;
    }
  }

  @Override
  @Transactional
  public UserEntity registerUser(RegisterDto registerDto) {
    final int USER_ROLE_ID = 1;

    String passwordHash = passwordEncoder.encode(registerDto.password());
    UserEntity registerUser = userRepository.save(new UserEntity(registerDto.email(), passwordHash, registerDto.name()));
    LOGGER.debug("Utilisateur crée : " + registerUser);

    AccountEntity createAccount = accountService.createAccount(registerUser);
    LOGGER.debug("compte crée : " + createAccount);

    RoleUserEntity createRole = roleService.addUserRole(USER_ROLE_ID, registerUser);
    LOGGER.debug("role créé : " + createRole);

    LOGGER.debug("Enregistrement utilisateur: " + registerUser);
    LOGGER.debug("Compte utilisateur: " + createAccount);
    return registerUser;
  }
}
