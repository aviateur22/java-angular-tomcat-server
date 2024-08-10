package ctoutweb.lalamiam.model.captcha;

import java.nio.file.Path;
import java.util.List;

public interface GenerateTestData {
  /**
   * Question global du captcha
   * @return String
   */
  public String getQuestion();

  /**
   * Enigme à résoudre si calcul ou text a recopier
   * @return String
   */
  public String getEnigme();

  /**
   * Enigme à résoudre si image
   * @return Path
   */
  public Path getFileEnigme();

  /**
   * Réponse à l'énigme Hashé
   * @return
   */
  public String getResponse();
}
