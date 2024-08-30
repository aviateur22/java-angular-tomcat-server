import { RequestBaseDto } from "src/app/models/request-base.dto";

export interface ActivateAccountDto extends RequestBaseDto {
  email: string,
  token: string
}
