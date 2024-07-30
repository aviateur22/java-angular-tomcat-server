package ctoutweb.lalamiam.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class AngularForwardController {
  private static final Logger LOGGER = LogManager.getLogger();
  @GetMapping("{path:^(?!api|public|swagger|assets)[^\\.]*}/**")
  public String handleForward(HttpServletRequest request) {

    String requestUri = request.getRequestURI();
    LOGGER.debug("Request URI: " + requestUri);

    return "forward:/";
  }

}