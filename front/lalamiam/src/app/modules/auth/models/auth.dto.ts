import { RequestBaseDto } from "src/app/models/request-base.dto";
import { ResponseBaseDto } from "src/app/models/Response-base.dto";

export interface ActivateAccountDto extends RequestBaseDto {
  email: string,
  token: string
}

export interface ActivateAccountResponseDto {
  accountActivateStatus: string,
  message: string
}

export interface CaptchaDto {
  response: string,
  question:  string,
  imageBase64:string,
  imageMimeType: string
}

export interface CaptchaClientResponseDto {
  clientResponse: string;
  captchaResponse: string;
}

export interface ChangePasswordDto extends RequestBaseDto {
  changePasswordToken: string,
  urlToken: string,
  email: string,
  password: string
}

export interface ChangePasswordResponseDto extends ResponseBaseDto {
  isPasswordChange: boolean
}

export interface LoginDto extends RequestBaseDto {
  email: string,
  password: string
}

export interface LoginResponseDto {
  jwt: string,
  email: string,
  id: BigInt,
  roles: string[],
  message: string
}

export interface RegisterDto extends RequestBaseDto{
  email: string,
  password: string,
  name: string,
  captchaClientResponseDto: CaptchaClientResponseDto
}

export interface RegisterResponseDto {
  message: string
}

export interface LostPaswordMailingDto extends RequestBaseDto {
  email: string
}

export interface LostPasswordMailingResponseDto extends ResponseBaseDto {

}
