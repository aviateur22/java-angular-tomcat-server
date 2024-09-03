package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AppMailException;
import ctoutweb.lalamiam.model.HtmlTemplateType;
import ctoutweb.lalamiam.service.MailService;
import ctoutweb.lalamiam.util.FileUtility;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

@Service
public class MailServiceImpl extends BaseService implements MailService {
  private static final Logger LOGGER = LogManager.getLogger();
  private final JavaMailSender mailSender;
  public MailServiceImpl(
          JavaMailSender mailSender,
          @Qualifier("apiMessageSource") MessageSource messageSource,
          @Qualifier("exceptionMessages") Properties messageExceptions) {
    super(messageSource, messageExceptions);
    this.mailSender = mailSender;
  }

  @Override
  public void sendEmail(
          String mailSubject,
          String to,
          String mailContent,
          String exceptionMessage) {
      new Thread(()->{
        try{
          LOGGER.debug("Envoie email");
          MimeMessage message = mailSender.createMimeMessage();
          MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
          helper.setText(mailContent, true);
          helper.setTo(to);
          helper.setSubject(mailSubject);
          helper.setFrom("admin@ctoutweb.fr");
          mailSender.send(message);
          LOGGER.debug("Envoie email terminé");
        } catch (MessagingException exception) {
          LOGGER.error("Erreur envoie email: " + exception);
          throw new AppMailException(getExceptionMessage("mailing.error"), HttpStatus.BAD_REQUEST);
        } catch (MailException exception) {
          LOGGER.error("Erreur envoie email: " + exception);
          throw new AppMailException(getExceptionMessage("mailing.error"), HttpStatus.BAD_REQUEST);
        }
      }).start();
  }

  /**
   * Récupération d'un templateHtml et évaluation des variables à remplacer
   * @param type - HtmlTemplateType
   * @param wordsToReplaceInHtmlTemplate Map<String, String>
   * @return String - TemplateHtml mis a jour
   */
  @Override
  public String generateHtml(HtmlTemplateType type, Map<String, String> wordsToReplaceInHtmlTemplate) {

    try {

      String fileName = switch (type) {
        case ACCOUNT_ACTIVATION ->HtmlTemplateType.ACCOUNT_ACTIVATION.getFileName();
        case CHANGE_PASSWORD -> HtmlTemplateType.CHANGE_PASSWORD.getFileName();
      };
      String filePath = "html/" + fileName;
      LOGGER.debug(String.format("TemplateHTML name: %s , path: %s", fileName, filePath));

      // Lecture du contenu template
      InputStream fileStream = new ClassPathResource(filePath).getInputStream();
      String content = FileUtility.readFromInputStream(fileStream);

      // Remplacement Contenu
      if(wordsToReplaceInHtmlTemplate != null) {
        for(Map.Entry<String, String> k: wordsToReplaceInHtmlTemplate.entrySet()) {
          LOGGER.debug(k.getKey());
          content =   content.replace("!%!"+ k.getKey() +"!%!", k.getValue());
        }
      }

     return content;
    } catch (IOException exception) {
      LOGGER.error("Erreur création mail template: " + exception);
      throw new AppMailException(getExceptionMessage("mailing.error"), HttpStatus.BAD_REQUEST);
    }
  }
}
