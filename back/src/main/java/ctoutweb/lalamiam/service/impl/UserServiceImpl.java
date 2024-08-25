package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.RegisterDto;
import ctoutweb.lalamiam.model.HtmlTemplateType;
import ctoutweb.lalamiam.model.ValidateLanguage;
import ctoutweb.lalamiam.repository.UserRepository;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.RoleUserEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.AccountService;
import ctoutweb.lalamiam.service.MailService;
import ctoutweb.lalamiam.service.RoleService;
import ctoutweb.lalamiam.service.UserService;
import ctoutweb.lalamiam.util.TextUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@PropertySource({"classpath:application.properties"})
public class UserServiceImpl implements UserService {

  @Value("${domain.front}")
  private String domainFront;
  @Value("${front.path}")
  private String frontPath;
  private static final Logger LOGGER = LogManager.getLogger();
  private final MailService mailService;
  private final PasswordEncoder passwordEncoder;
  private final UserRepository userRepository;
  private final EntityManagerFactory entityManagerFactory;
  private final AccountService accountService;
  private final RoleService roleService;
  private final ValidateLanguage apiValidateLanguage;
  public UserServiceImpl(
          MailService mailService,
          PasswordEncoder passwordEncoder,
          UserRepository userRepository,
          EntityManagerFactory entityManagerFactory,
          AccountService accountService,
          RoleService roleService,
          ValidateLanguage validateLanguage) {
    this.mailService = mailService;
    this.passwordEncoder = passwordEncoder;
    this.userRepository = userRepository;
    this.entityManagerFactory = entityManagerFactory;
    this.accountService = accountService;
    this.roleService = roleService;
    this.apiValidateLanguage = validateLanguage;
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
      List<UserEntity> users = query.getResultList();

      if(users.size() == 0)
        return null;

      // Récupération du 1ère element de la liste
      user = users.get(0);

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

    // Id par default pour la création d'un compte
    final int USER_ROLE_ID = 1;

    String activateAccountToken = TextUtility.generateText(80);
    String activateAccountTokenHash = this.passwordEncoder.encode(activateAccountToken);

    Map<String, String> listWordsToReplaceInHtmlTemplate = new HashMap<>();

    String activateAccountLink = String.format(
            "%s/%s/auth/account-activation/language/%s/user-mail/%s/confirmation-token/%s",
            domainFront, frontPath, this.apiValidateLanguage.getLanguage(), registerDto.email(), activateAccountToken);
    LOGGER.debug("Lien du compte d'activtion : " + activateAccountLink);

    listWordsToReplaceInHtmlTemplate.put("email", registerDto.email());
    listWordsToReplaceInHtmlTemplate.put("link",activateAccountLink);


    String passwordHash = passwordEncoder.encode(registerDto.password());
    UserEntity registerUser = userRepository.save(new UserEntity(
            registerDto.email(),
            passwordHash,
            registerDto.name())
    );
    LOGGER.debug("Utilisateur crée : " + registerUser);

    AccountEntity createAccount = accountService.createAccount(registerUser, activateAccountTokenHash);
    LOGGER.debug("compte crée : " + createAccount);

    RoleUserEntity createRole = roleService.addUserRole(USER_ROLE_ID, registerUser);
    LOGGER.debug("role créé : " + createRole);

    LOGGER.debug("Enregistrement utilisateur: " + registerUser);
    LOGGER.debug("Compte utilisateur: " + createAccount);

    // Envoie d'un email
    String templateHtml = mailService.generateHtml(HtmlTemplateType.ACCOUNT_ACTIVATION, listWordsToReplaceInHtmlTemplate);
    mailService.sendEmail("test", registerUser.getEmail(), templateHtml, "Exception");
    return registerUser;
  }

  @Override
  @Transactional
  public void deleteUserByemail(String email) {
    try{
    long delete = userRepository.deleteByEmail(email);
    LOGGER.debug(delete);

    } catch (Exception ex) {
      LOGGER.error(ex);
    }
  }
}
