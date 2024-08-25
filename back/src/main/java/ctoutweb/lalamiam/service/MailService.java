package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.HtmlTemplateType;

import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

public interface MailService {
  /**
   * Envoie d'un email
   * @param mailSubject - String
   * @param to - destinataire
   * @param mailContent String
   * @param exceptionMessage - Message d'exception
   */
  public void sendEmail(
          String mailSubject,
          String to,
          String mailContent,
          String exceptionMessage
  );

  /**
   * Récupération d'un templateHtml et évaluation des variables à remplacer
   * @param type - HtmlTemplateType
   * @param wordsToReplaceInHtmlTemplate Map<String, String>
   * @return String - TemplateHtml mis a jour
   */
  public String generateHtml(HtmlTemplateType type, Map<String, String> wordsToReplaceInHtmlTemplate);
}
