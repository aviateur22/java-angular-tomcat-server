package ctoutweb.lalamiam.exception;

import org.springframework.http.HttpStatus;

public class AppMailException extends RuntimeException {
  private HttpStatus status;
  public AppMailException(String message, HttpStatus status) {
    super(message);
    this.status = status;
  }

  public HttpStatus getStatus() {
    return status;
  }
}
