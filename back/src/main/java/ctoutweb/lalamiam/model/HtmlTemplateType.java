package ctoutweb.lalamiam.model;

public enum HtmlTemplateType {
  ACCOUNT_ACTIVATION("activationAccount.html"),
  CHANGE_PASSWORD("lostPasswordMailing.html");

  private String fileName;
  private HtmlTemplateType(String fileName) {
    this.fileName = fileName;
  }

  public String getFileName() {
    return this.fileName;
  }
}
