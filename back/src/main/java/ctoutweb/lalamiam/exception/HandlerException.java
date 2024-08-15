package ctoutweb.lalamiam.exception;

import ctoutweb.lalamiam.dto.ErrorResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandlerException {
  @ExceptionHandler(value = {AuthException.class})
  public ResponseEntity<ErrorResponseDto> authException(AuthException exception) {
    ErrorResponseDto errorResponse = new ErrorResponseDto(exception.getMessage());
    return new ResponseEntity<>(errorResponse, exception.getStatus());
  }

  @ExceptionHandler(value = {ValidationException.class})
  public ResponseEntity<ErrorResponseDto> validationException(ValidationException exception) {
    ErrorResponseDto errorResponse = new ErrorResponseDto(exception.getMessage());
    return new ResponseEntity<>(errorResponse, exception.getStatus());

  }
}
