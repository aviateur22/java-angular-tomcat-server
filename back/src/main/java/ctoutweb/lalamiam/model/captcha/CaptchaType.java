//package ctoutweb.lalamiam.model.captcha;
//
//import java.util.Random;
//
//public enum CaptchaType {
//  CALCULATE_TEST(0),
//  WORD_TEST(1),
//  IMAGE_TEST(2);
//  private int type;
//
//  private CaptchaType(int type) {
//    this.type = type;
//  }
//
//  public static CaptchaType getRandomType() {
//    CaptchaType[] types = CaptchaType.values();
//    Random random = new Random();
//    int index = random.nextInt(types.length);
//    return types[index];
//  }
//}
