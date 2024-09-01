import { environment } from "src/environments/environment";
import { MessageUtil } from "./utils/messages/message-utils";

export default abstract class ComponentBaseApp {

  /**
   * Ensemble des messages de la page
   */
  private messagesData: any;

  /**
   * Message Erreurs qui sont affichable sur la page
   */
  protected errorMessages: Map<string, string> = new Map();

  /**
   * Message à afficher sur la page
   */
  protected pageMessages: Map<string, string> = new Map();

  constructor(messagesData: any) {
    this.messagesData = messagesData;
    this.initializeMessages();
  }

  /**
   * Initialisation des messages de la page
   */
  private initializeMessages() {
    this.pageMessages = MessageUtil.loadMessageInMap(this.messagesData.information, environment.language);
    this.errorMessages = MessageUtil.loadMessageInMap(this.messagesData.error, environment.language);
  }

}
