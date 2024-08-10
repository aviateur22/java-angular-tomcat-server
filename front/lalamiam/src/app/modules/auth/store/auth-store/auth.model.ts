import { Captcha } from "../../models/captcha.model";

export interface AuthModel {
  error: string,
  isErrorVisible: boolean,
  isLoading: boolean,
  captcha: Captcha | null
}
