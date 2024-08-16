package ctoutweb.lalamiam.util;



import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class HttpServletUtility {
  public static HttpServletResponse formatResponseMessage(HttpServletResponse response, String messageKey, String message) throws IOException {
    Map<String, String> errorResponse = new HashMap<>();
    errorResponse.put(messageKey, message);
    ObjectMapper mapper = new ObjectMapper();
    response.getOutputStream().write(mapper.writeValueAsBytes(errorResponse));
    return response;
  }
}
