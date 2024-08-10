package ctoutweb.lalamiam.dto;

public record CaptchaDto(
        String imageBase64,
        String imageMimeType,
        String question,
        String response
) {
}
