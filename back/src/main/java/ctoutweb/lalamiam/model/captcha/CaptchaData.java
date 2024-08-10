package ctoutweb.lalamiam.model.captcha;

import java.time.LocalDateTime;

public record CaptchaData(
        String image,
        String mimeType,
        String question,
        String enigme,
        String response,
        LocalDateTime validityTime) {
}
