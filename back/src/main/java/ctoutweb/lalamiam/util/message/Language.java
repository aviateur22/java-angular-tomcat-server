package ctoutweb.lalamiam.util.message;

public enum Language {
  FR("fr"),
  EN("en");
  private String language;
  private Language(String language) {
    this.language = language;
  }

  public String getLanguage() {
    return this.language;
  }

  /**
   * Vérification si language valide
   * @param language String
   * @return boolean
   */
  public static boolean isLanguageValid(String language) {
    return java.util.Arrays.stream(Language.values())
            .anyMatch(lang -> lang.getLanguage().equalsIgnoreCase(language));
  }
}
