package ctoutweb.lalamiam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/client")
public class ClientController {
  @GetMapping("")
  public ResponseEntity<String> client() {
    return new ResponseEntity<>("Bonjour, vous êtes sur un espace reservé au client", HttpStatus.OK);
  }

}
