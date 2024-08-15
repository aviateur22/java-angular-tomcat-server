package ctoutweb.lalamiam.security.strategy.captcha.impl;

import ctoutweb.lalamiam.exception.AuthException;
import ctoutweb.lalamiam.factory.CaptchaFactory;
import ctoutweb.lalamiam.model.captcha.CaptchaData;
import ctoutweb.lalamiam.model.captcha.GenerateEnigmeData;
import ctoutweb.lalamiam.security.strategy.captcha.CaptchaStrategy;
import ctoutweb.lalamiam.service.ImageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@PropertySource({"classpath:application.properties"})
public class CaptchaImageStrategy extends CaptchaEnigme implements CaptchaStrategy {
  @Value("${captcha.token}")
  private String captchaToken;
  private final PasswordEncoder passwordEncoder;
  private final ImageService imageService;

  public CaptchaImageStrategy(PasswordEncoder passwordEncoder, ImageService imageService) {
    super(passwordEncoder, imageService);
    this.passwordEncoder = passwordEncoder;
    this.imageService = imageService;
  }

  @Override
  public CaptchaData generateCaptcha() throws URISyntaxException, IOException {
    GenerateEnigmeData enigmeData = getImageTestData();

    String imagePath = enigmeData.getFileEnigme().toString();
    File imageFile = new File(enigmeData.getFileEnigme().toUri());
    BufferedImage image = ImageIO.read(imageFile);

    String imageMimeType = imageService.mimeType(IMAGE_TYPE);
    byte[] imageByteFormat = imageService.convertImage(image, IMAGE_TYPE);
    String imageBase64Format = Base64.getEncoder().encodeToString(imageByteFormat);
    return CaptchaFactory.getCaptcha(imageBase64Format, imageMimeType, LocalDateTime.now().plusMinutes(15), enigmeData);
  }

  public GenerateEnigmeData getImageTestData() throws IOException, URISyntaxException {
    String question = "Que représente cette image ?";

    List<Path> imagePaths = new ArrayList<>();

    Random random = new Random();


    Path baseFolderPath = Paths.get(ClassLoader.getSystemResource("captcha").toURI());

    try(Stream<Path> paths = Files.walk(baseFolderPath,1)){
      imagePaths = paths
              .filter(Files::isRegularFile)
              .filter(Files -> Files.getFileName().toString().endsWith(".png"))
              .collect(Collectors.toList());
    }

    if(imagePaths.isEmpty())
      throw new AuthException("Aucune données de diponible pour le captcha", HttpStatus.INTERNAL_SERVER_ERROR);

    final int RANDOM_IMAGE = random.nextInt(imagePaths.size());

    Path randomPath = imagePaths.get(RANDOM_IMAGE);

    String imageName = randomPath.getFileName().toString();
    String imageNameWithoutExtension = imageName.substring(0, imageName.lastIndexOf('.')).toLowerCase();
    String response = imageNameWithoutExtension;

    return CaptchaFactory.getDataTest(
            question,
            randomPath,
            passwordEncoder.encode(this.addCaptchaSecretKeyToCaptchaResponse(captchaToken, String.valueOf(response))));
  }
}
