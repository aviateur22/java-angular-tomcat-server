package ctoutweb.lalamiam.model;

public enum ImageType {
  PNG("png"),
  JPEG("jpeg");

  private final String name;

  private ImageType(String name){
    this.name = name;
  }

  public String getType(ImageType type) {
    return type.name;
  }
}
