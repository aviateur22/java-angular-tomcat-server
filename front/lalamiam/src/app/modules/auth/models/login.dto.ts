import { RequestBaseDto } from "src/app/models/request-base.dto";

export interface LoginDto extends RequestBaseDto {
  email: string,
  password: string
}
