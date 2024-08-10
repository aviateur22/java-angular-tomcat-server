package ctoutweb.lalamiam.service;

import ctoutweb.lalamiam.model.ImageType;

import java.awt.image.BufferedImage;

public interface ImageService {
  public BufferedImage createImageFromText(String text, int height, int width);

  public byte[] convertImage(BufferedImage image, ImageType type);
  public String mimeType(ImageType type);
}
