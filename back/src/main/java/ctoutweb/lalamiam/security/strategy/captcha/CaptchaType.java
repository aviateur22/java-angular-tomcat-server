package ctoutweb.lalamiam.security.strategy.captcha;

import java.util.Random;

public enum CaptchaType {
  CALCULATE_ENIGME(0),
  WORD_ENIGME(1),
  IMAGE_ENIGME(2);
  private int type;

  private CaptchaType(int type) {
    this.type = type;
  }

  /**
   * RANDOM - Récuperation d'un type de captcha aléatoire
   * @return CaptchaType
   */
  public static CaptchaType getRandomType() {
    CaptchaType[] types = CaptchaType.values();
    Random random = new Random();
    int index = random.nextInt(types.length);
    return types[index];
  }
}
