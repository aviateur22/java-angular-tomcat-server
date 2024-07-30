package ctoutweb.lalamiam.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandlerException {
  @ExceptionHandler(value = {AuthException.class})
  public ResponseEntity<String> authException(AuthException exception) {
    return new ResponseEntity<>(exception.getMessage(), exception.getStatus());
  }
}
