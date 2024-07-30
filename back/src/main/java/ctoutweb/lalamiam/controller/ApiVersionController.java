package ctoutweb.lalamiam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/version")
public class ApiVersionController {
  @GetMapping("")
  public ResponseEntity<String> entry() {
     return new ResponseEntity<>("version api 1.0", HttpStatus.OK);
  }
}
