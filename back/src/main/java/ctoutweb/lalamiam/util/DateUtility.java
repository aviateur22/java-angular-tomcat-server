package ctoutweb.lalamiam.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtility {
  private static final Logger LOGGER = LogManager.getLogger();

  /**
   * Convertion d'une LocalDateTime en ZonedDateTime
   * @param time LocalDateTime
   * @return ZonedDateTime
   */
  public static ZonedDateTime zoneId(LocalDateTime time) {
    String zoneId = PropertiesUtility.getPropertyValue("application.properties", "zone.id");
    if(zoneId == null) {
      LOGGER.error("Aucune zoneId de définie");
      return null;
    }

    return time.atZone(ZoneId.of(zoneId));
  }

  /**
   * Formatte la date en date et HHmm
   * @param time - LocalDateTime
   * @return String
   */
  public static String toDateHour(LocalDateTime time) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    return time.format(formatter);
  }
}
