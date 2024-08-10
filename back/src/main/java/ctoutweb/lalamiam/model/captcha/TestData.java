package ctoutweb.lalamiam.model.captcha;

import java.nio.file.Path;
import java.util.List;

public class TestData implements GenerateTestData {
  private String question;
  private String enigme;
  private String response;
  private Path fileEnigme;

  public TestData(String question, String enigme, String response) {
    this.question = question;
    this.enigme = enigme;
    this.response = response;
  }

  public TestData(String question, Path fileEnigme, String response) {
    this.question = question;
    this.fileEnigme = fileEnigme;
    this.response = response;
  }

  @Override
  public String getQuestion() {
    return question;
  }

  @Override
  public String getEnigme() {
    return enigme;
  }


  @Override
  public String getResponse() {
    return response;
  }

  @Override
  public Path getFileEnigme() {
    return this.fileEnigme;
  }
}
