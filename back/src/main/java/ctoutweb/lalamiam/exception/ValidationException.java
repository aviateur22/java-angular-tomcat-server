package ctoutweb.lalamiam.exception;

import org.springframework.http.HttpStatus;

public class ValidationException extends RuntimeException {
  private HttpStatus httpStatus;
  public ValidationException(String message, HttpStatus httpStatus) {
    super(message);
    this.httpStatus = httpStatus;
  }

  public HttpStatus getStatus() {
    return httpStatus;
  }
}
