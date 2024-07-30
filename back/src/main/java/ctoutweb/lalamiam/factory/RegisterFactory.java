package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.model.RegisterResponse;

public class RegisterFactory {
  public static RegisterResponse getRegisterResponse(String message) {
    return new RegisterResponse(message);

  }
}
