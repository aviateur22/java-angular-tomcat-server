import { CaptchaClientResponseDto } from "./captcha-client-response.dto";

export interface RegisterDto {
  email: string,
  password: string,
  name: string,
  captchaClientResponseDto: CaptchaClientResponseDto
}
