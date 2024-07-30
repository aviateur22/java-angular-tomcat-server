package ctoutweb.lalamiam.controller;

import ctoutweb.lalamiam.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  public UserController(UserServiceImpl userService) {
    this.userService = userService;
  }

  private final UserServiceImpl userService;

  @GetMapping("")
  public ResponseEntity<String> users() {
    return new ResponseEntity<>(userService.getTotalOfUsers(), HttpStatus.OK);
  }
}
