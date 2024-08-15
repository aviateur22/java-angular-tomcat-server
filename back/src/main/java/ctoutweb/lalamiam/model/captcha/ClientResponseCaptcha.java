package ctoutweb.lalamiam.model.captcha;

import java.time.LocalDateTime;

/**
 * CaptchaResponse Client
 * @param clientResponse
 * @param captchaResponse
 */
public record ClientResponseCaptcha(String clientResponse, String captchaResponse) {
}
