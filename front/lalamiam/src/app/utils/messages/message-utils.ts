export class MessageUtil {

  /**
   * Remplie une map de string
   * @returns Map<string, string>
   */
  public static loadMessageInMap(data: object, language: string): Map<string, string> {
    const map: Map<string, string> = new Map();

    function addEntriesInMap(data: object) {
      Object.entries(data).forEach(([key, value])=>{
        map.set(key,value[language]);
      })
    }

    addEntriesInMap(data);

    return map;
  }
}
