package ctoutweb.lalamiam.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * CaptchaResponse Client
 * @param clientResponse
 * @param captchaResponse
 */
public record ClientResponseCaptchaDto(
        @NotNull(message = "{captcha.response.missing}")
        @NotBlank(message = "{captcha.response.missing}")
        String clientResponse,

        @NotNull(message = "{captcha.response.missing}")
        @NotBlank(message = "{captcha.response.missing}")
        String captchaResponse
) {
}
