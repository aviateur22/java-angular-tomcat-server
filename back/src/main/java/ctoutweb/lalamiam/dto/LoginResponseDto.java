package ctoutweb.lalamiam.dto;

import java.util.List;

public record LoginResponseDto(
        String jwt,
        String email,
        Long id,
        List<String> roles,
        String message) {

}
