import { Injectable } from "@angular/core";
import { LoginDto } from "../models/login-dto.model";
import { map, Observable, of, tap } from "rxjs";
import { LoginResponseDto } from "../models/login-response.dto";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { RegisterDto } from "../models/register.dto";
import { RegisterResponseDto } from "../models/register-response.dto";
import { Captcha } from "../models/captcha.model";
import { CaptchaDto } from "../models/captcha.dto";
import { CaptchaClientResponseDto } from "../models/captcha-client-response.dto";
import { ActivateAccountDto, ActivateAccountResponseDto } from "../models/activate-account.dto";
import { ActivateAccountResponse, ActivatedAccountStatus } from "../models/activate-account.model";

@Injectable({
  providedIn:"root"
})
export class AuthService {

  private _apiEndPoint: string =  environment.api_base + "/auth";


  constructor(private _http: HttpClient) {}

  public login(loginDto: LoginDto): Observable<LoginResponseDto> {
    return this._http.post<LoginResponseDto>(this._apiEndPoint + "/login", loginDto).pipe(
      tap(loginResponse=>{
        localStorage.setItem('user', JSON.stringify({
          userId: loginResponse.id,
          email: loginResponse.email,
          jwt: loginResponse.jwt,
          roles: loginResponse.roles
        }))
      })
    )
  }

  public register(registerDto: RegisterDto): Observable<RegisterResponseDto> {
    return this._http.post<RegisterResponseDto>(this._apiEndPoint + "/register",  registerDto)
  }

  public csrf(): Observable<string> {
    const path = this._apiEndPoint + "/csrf";
      return this._http.get(path,{
      responseType: 'text' as const
    });
  }

  public captcha(): Observable<Captcha> {
    const path = this._apiEndPoint+ "/captcha";
    return this._http.get<CaptchaDto>(path).pipe(
      map(dto=>this.toCaptchaModel(dto))
    )
  }

  public logout(): Observable<string> {
    //const user = JSON.parse(localStorage.getItem('user'));

    const user = localStorage.getItem('user');
    let path:string= "";

    if(user!=null)  {
      const userString = JSON.parse(user);
      const userId = userString.userId;
      path = this._apiEndPoint + "/logout/" + userId;
    }
    console.log(path);
    return this._http.get(path,{
      responseType: 'text' as const
    });
  }

  public activateAccount(activateAccountDto: ActivateAccountDto ): Observable<ActivateAccountResponse> {
    return this._http.post<ActivateAccountResponseDto>(this._apiEndPoint + '/account-activation', activateAccountDto).pipe(
      map(dto=>this.toActivateAccountModel(dto))
    );
  }

  /**
   * Convertie un CaptchaDto -> Captcha
   * @param dto CaptchaDto
   * @returns Captcha
   */
  private toCaptchaModel(dto: CaptchaDto): Captcha {
    return new Captcha(dto.imageBase64, dto.imageMimeType, dto.question, dto.response);
  }

  /**
   * Converti un ActivateAccountResponseDto -> ActivateAccountResponse
   * @param dto ActivateAccountResponseDto - réponse API
   * @returns ActivateAccountResponse
   */
  private toActivateAccountModel(dto: ActivateAccountResponseDto): ActivateAccountResponse {
    const activateStatus: ActivatedAccountStatus  = this.getAcctivateAccountStatus(dto.accountActivateStatus);
    return new ActivateAccountResponse(activateStatus, dto.message);
  }

  /**
   * Renvoi un RegisterDto
   * @param email
   * @param password
   * @param name
   * @param captchaClientResponse
   * @returns RegisterDto
   */
  public getRegisterDto(email: string, password: string, name: string, captchaClientResponse: string): RegisterDto {
    const captchaData: string | null = localStorage.getItem('captcha');
    let captchaResponse: string = '';


    if(captchaData != null) {
      const captchaDataJson = JSON.parse(captchaData);
      captchaResponse = captchaDataJson.response
    }

    // Récupération des données du captcha et réponse client
    const captchaClientResponseDto: CaptchaClientResponseDto = {
      captchaResponse,
      clientResponse: captchaClientResponse
    };

    return  {
      email,
      password,
      name,
      captchaClientResponseDto
    }
  }

  /**
   * Renvoie un string en ActivatedAccountStatus
   * @param accountActivateStatus string
   * @returns ActivatedAccountStatus
   */
  public getAcctivateAccountStatus(accountActivateStatus: string): ActivatedAccountStatus {

    switch(accountActivateStatus.toLowerCase()) {
      case ActivatedAccountStatus.SUCCESS.toString().toLowerCase(): return ActivatedAccountStatus.SUCCESS; break;
      case ActivatedAccountStatus.FAILURE.toString().toLowerCase(): return ActivatedAccountStatus.FAILURE; break;
      case ActivatedAccountStatus.ALREADY_ACTIVATED.toString().toLowerCase(): return ActivatedAccountStatus.ALREADY_ACTIVATED; break;
      default: return ActivatedAccountStatus.FAILURE; break;
    }
  }
}
