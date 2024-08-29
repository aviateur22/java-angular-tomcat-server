package ctoutweb.lalamiam.factory;

import ctoutweb.lalamiam.dto.MessageResponse;

public class MessageResponseFactory {

  public static MessageResponse getMessageResponse(String responseMessage) {
    return new MessageResponse(responseMessage);
  }
}
