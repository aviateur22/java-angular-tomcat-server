package ctoutweb.lalamiam.service.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.model.ImageType;
import ctoutweb.lalamiam.service.ImageService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Properties;

@Service
public class ImageServiceImpl extends BaseService implements ImageService {
  protected ImageServiceImpl(
          @Qualifier("apiMessageSource") MessageSource messageSource,
          @Qualifier("exceptionMessages") Properties messageExceptions) {
    super(messageSource, messageExceptions);
  }

  @Override
  public BufferedImage createImageFromText(String text, int height, int width) {

    // Create a BufferedImage object
    BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);

    // Get the Graphics2D object
    Graphics2D g2d = image.createGraphics();

    // Set rendering hints for better text rendering
    g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
    g2d.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

    // Set the background color and clear the image
    g2d.setColor(Color.lightGray);
    g2d.fillRect(0, 0, width, height);

    // Set the font and color for the text
    g2d.setFont(new Font("Serif", Font.BOLD, 20));
    g2d.setColor(Color.BLACK);

    // Get the font metrics for calculating the position
    FontMetrics fm = g2d.getFontMetrics();
    int x = (width - fm.stringWidth(text)) / 2;
    int y = ((height - fm.getHeight()) / 2) + fm.getAscent();

    // Draw the text on the image
    g2d.drawString(text, x, y);

    // Dispose of the Graphics2D object
    g2d.dispose();

    return image;
  }

  @Override
  public byte[] convertImage(BufferedImage image, ImageType type) {
    String imageType = type.getType(type);

    try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
      ImageIO.write(image, imageType, baos);
      byte[] imageBytes = baos.toByteArray();
      return imageBytes;

    } catch (IOException e) {
      throw new AuthException(getExceptionMessage("captcha.image.error"), HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Override
  public String mimeType(ImageType type) {
    return switch (type) {
      case PNG -> "image/png";
      case JPEG -> "image/jpeg";
    };
  }
}
