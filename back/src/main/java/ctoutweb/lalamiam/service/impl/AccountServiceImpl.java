package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.dto.ChangePasswordDto;
import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.model.HtmlTemplateType;
import ctoutweb.lalamiam.repository.AccountRepository;
import ctoutweb.lalamiam.repository.entity.AccountEntity;
import ctoutweb.lalamiam.repository.entity.UserEntity;
import ctoutweb.lalamiam.service.AccountService;
import ctoutweb.lalamiam.service.MailService;
import ctoutweb.lalamiam.util.TextUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@PropertySource("classpath:application.properties")
@Service
public class AccountServiceImpl extends BaseService implements AccountService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final AccountRepository accountRepository;
  private final PasswordEncoder passwordEncoder;
  private final MailService mailService;

  @Value("${front.change.password.account.url}")
  private String changePasswordAccountFrontEndUrl;

  @Value("${domain.front}")
  private String domainFront;
  @Value("${front.path}")
  private String frontPath;

  public AccountServiceImpl(
          AccountRepository accountRepository,
          PasswordEncoder passwordEncoder,
          MailService mailService,
          @Qualifier("exceptionMessages") Properties messageExceptions,
          @Qualifier("apiMessageSource") MessageSource messageSource
  ) {
    super(messageSource, messageExceptions);
    this.accountRepository = accountRepository;
    this.passwordEncoder = passwordEncoder;
    this.mailService = mailService;
  }

  @Override
  public AccountEntity createAccount(UserEntity user, String tokenAccountActivationHash) {
    return accountRepository.save(new AccountEntity(user, tokenAccountActivationHash));
  }

  @Override
  public boolean isAccountActivatable(UserEntity user, String activateToken) {
    AccountEntity account = accountRepository.findFirstByAccountUserId(user.getId()).orElseThrow(()->new AuthException(getExceptionMessage("account.not.existing"), HttpStatus.BAD_REQUEST));
    boolean isActivateTokenValid = this.passwordEncoder.matches(activateToken, account.getUrlTokenActivation());
    if(isActivateTokenValid) {
      LocalDateTime activationTime = LocalDateTime.now();
      account.setAccountActivationAt(activationTime);
      account.setIsAccountActive(true);
      account.setUrlTokenActivation(null);
      accountRepository.save(account);
    }
    return isActivateTokenValid;
  }

  @Override
  public void accountLostPasswordMailing(UserEntity userData) {

    // Compte utilisateur
    AccountEntity account = accountRepository.findFirstByAccountUserId(userData.getId()).orElse(null);

    if(account == null || !account.getIsAccountActive()) {
      throw new AuthException(getExceptionMessage("send.reset.passord.error"), HttpStatus.BAD_REQUEST);
    }

    // Map des mot à remplacer dans le template HTML
    Map<String, String> listWordsToReplaceInHtmlTemplate = new HashMap<>();

    // generation token URL
    String urlToken = TextUtility.generateText(80);
    String urlTokenHash = passwordEncoder.encode(urlToken);

    // génération token pour modifier mot de passe
    String passwordChangeToken = TextUtility.generateInteger(5);
    String passwordChangeTokenHash = passwordEncoder.encode(passwordChangeToken);

    // Mise a jour de données account
    account.setUrlTokenActivation(urlTokenHash);
    account.setChangePasswordToken(passwordChangeTokenHash);
    accountRepository.save(account);

    // Generation frontEnd URL pour le lien d'activation
    String changePasswordAccountLink = String.format(changePasswordAccountFrontEndUrl, domainFront, frontPath, userData.getEmail(), urlToken);
    LOGGER.debug("Lien du compte d'activtion : " + changePasswordAccountLink);

    listWordsToReplaceInHtmlTemplate.put("email", userData.getEmail());
    listWordsToReplaceInHtmlTemplate.put("link",changePasswordAccountLink);
    listWordsToReplaceInHtmlTemplate.put("changePasswordToken", passwordChangeToken);

    String templateHtml = mailService.generateHtml(HtmlTemplateType.CHANGE_PASSWORD, listWordsToReplaceInHtmlTemplate);
    mailService.sendEmail(
            "Changement du mot de passe",
            userData.getEmail(),
            templateHtml,
            getExceptionMessage("mailing.error")
            );
  }

  @Override
  public boolean isAccountPasswordEditable(ChangePasswordDto changePassword) {
    return false;
  }
}
