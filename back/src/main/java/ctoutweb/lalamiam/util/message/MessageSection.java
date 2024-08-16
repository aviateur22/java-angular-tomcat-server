package ctoutweb.lalamiam.util.message;

/**
 * SECTION DES MESSAGES DISPONIBLE dans un fichier JSON
 */
public enum MessageSection {
  API_RESPONSE_MESSAGE("apiResponseMessage"),
  ANNOTATION_RESPONSE_MESSAGE("annotationMessage"),
  EXCEPTION_RESPONSE_MESSAGE("apiExceptionMessage");
  private String sectionName;
  private MessageSection(String sectionName) {
    this.sectionName = sectionName;
  }

  public String getSectionName() {
    return this.sectionName;
  }
}
