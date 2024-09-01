import { RequestBaseDto } from "src/app/models/request-base.dto";
import { CaptchaClientResponseDto } from "./captcha-client-response.dto";

export interface RegisterDto extends RequestBaseDto{
  email: string,
  password: string,
  name: string,
  captchaClientResponseDto: CaptchaClientResponseDto
}
