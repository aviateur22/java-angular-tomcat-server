import { RequestBaseDto } from "src/app/models/request-base.dto";
import { ResponseBaseDto } from "./Response-base.dto";

export interface LostPaswordMailingDto extends RequestBaseDto {
  email: string
}

export interface LostPasswordMailingResponseDto extends ResponseBaseDto {

}
