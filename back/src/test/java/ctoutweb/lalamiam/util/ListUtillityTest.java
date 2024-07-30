package ctoutweb.lalamiam.util;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class ListUtillityTest {

  public final static Map<String, List<String>> PERMIT_ALL_PATH = Map.of(
          "STARTING_WORD", List.of(
                  "/assets",
                  "/test",
                  "/union"
          ),
          "MATCHES_WORD", List.of(
                  "/" ,
                  "/lalamiam-app",
                  "/styles.css",
                  "/main.js",
                  "/polyfills.js",
                  "/vendor.js",
                  "/vendor.js.map",
                  "/polyfills.js.map",
                  "/runtime.js",
                  "/favicon.ico"
          ),
          "CONTAINS_WORD", List.of(
                  "/register",
                  "/login"
          )
  );

  @Test
  void areElementInText_should_be_in_list() {
    String text = "/api/auth/register";
    String text1 = "/api/auth/login";

    boolean isElementInText = ListUtillity.areElementInText(text, PERMIT_ALL_PATH.get("CONTAINS_WORD"));
    boolean isElementInText1 = ListUtillity.areElementInText(text1, PERMIT_ALL_PATH.get("CONTAINS_WORD"));

    Assertions.assertTrue(isElementInText);
    Assertions.assertTrue(isElementInText1);
  }

  @Test
  void areElementInText_should_not_be_in_list() {

    String text = "/api/admin";
    String text1 = "/api/auth";
    String text2 = "/api/client";
    String text3 = "/";

    boolean isElementInText = ListUtillity.areElementInText(text, PERMIT_ALL_PATH.get("CONTAINS_WORD"));
    boolean isElementInText1 = ListUtillity.areElementInText(text1, PERMIT_ALL_PATH.get("CONTAINS_WORD"));
    boolean isElementInText2 = ListUtillity.areElementInText(text2, PERMIT_ALL_PATH.get("CONTAINS_WORD"));
    boolean isElementInText3 = ListUtillity.areElementInText(text3, PERMIT_ALL_PATH.get("CONTAINS_WORD"));

    Assertions.assertFalse(isElementInText);
    Assertions.assertFalse(isElementInText1);
    Assertions.assertFalse(isElementInText2);
    Assertions.assertFalse(isElementInText3);
  }

  @Test
  void areElementMatchesText_should_be_in_list() {
    String text = "/";
    String text1 = "/favicon.ico";

    boolean isElementInText = ListUtillity.areListElementMatchesText(text, PERMIT_ALL_PATH.get("MATCHES_WORD"));
    boolean isElementInText1 = ListUtillity.areListElementMatchesText(text1, PERMIT_ALL_PATH.get("MATCHES_WORD"));


    Assertions.assertTrue(isElementInText);
    Assertions.assertTrue(isElementInText1);
  }

  @Test
  void areElementMatchesText_should_not_be_in_list() {

    String text = "/api/admin";
    String text1 = "/api/auth";
    String text2 = "/api/client";
    String text3 = "/asset";



    boolean isElementInText = ListUtillity.areListElementMatchesText(text, PERMIT_ALL_PATH.get("MATCHES_WORD"));
    boolean isElementInText1 = ListUtillity.areListElementMatchesText(text1, PERMIT_ALL_PATH.get("MATCHES_WORD"));
    boolean isElementInText2 = ListUtillity.areListElementMatchesText(text2, PERMIT_ALL_PATH.get("MATCHES_WORD"));
    boolean isElementInText3 = ListUtillity.areListElementMatchesText(text3, PERMIT_ALL_PATH.get("MATCHES_WORD"));

    Assertions.assertFalse(isElementInText);
    Assertions.assertFalse(isElementInText1);
    Assertions.assertFalse(isElementInText2);
    Assertions.assertFalse(isElementInText3);
  }

  @Test
  void areTextStartWithListElement_should_be_in_list() {
    String text = "/assets/jdjdjdj.png";
    String text1 = "/test/jskdjksdjskdjskdsjd";
    String text2 = "/union/jskdjksdjskdjskdsjd/dddd";

    boolean isElementInText = ListUtillity.areTextStartWithListElement(text, PERMIT_ALL_PATH.get("STARTING_WORD"));
    boolean isElementInText1 = ListUtillity.areTextStartWithListElement(text1, PERMIT_ALL_PATH.get("STARTING_WORD"));
    boolean isElementInText2 = ListUtillity.areTextStartWithListElement(text2, PERMIT_ALL_PATH.get("STARTING_WORD"));


    Assertions.assertTrue(isElementInText);
    Assertions.assertTrue(isElementInText1);
    Assertions.assertTrue(isElementInText2);
  }

  @Test
  void areTextStartWithListElement_should_not_be_in_list() {

    String text = "/api/admin";
    String text1 = "/auth/auth";
    String text2 = "/admin/client";
    String text3 = "/ldldld";



    boolean isElementInText = ListUtillity.areTextStartWithListElement(text, PERMIT_ALL_PATH.get("STARTING_WORD"));
    boolean isElementInText1 = ListUtillity.areTextStartWithListElement(text1, PERMIT_ALL_PATH.get("STARTING_WORD"));
    boolean isElementInText2 = ListUtillity.areTextStartWithListElement(text2, PERMIT_ALL_PATH.get("STARTING_WORD"));
    boolean isElementInText3 = ListUtillity.areTextStartWithListElement(text3, PERMIT_ALL_PATH.get("STARTING_WORD"));

    Assertions.assertFalse(isElementInText);
    Assertions.assertFalse(isElementInText1);
    Assertions.assertFalse(isElementInText2);
    Assertions.assertFalse(isElementInText3);
  }
}