import { Injectable } from "@angular/core";
import { LoginDto } from "../models/login-dto.model";
import { catchError, map, Observable, of, tap } from "rxjs";
import { LoginResponseDto } from "../models/login.response.model.dto";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { RegisterDto } from "../models/register-dto.model";
import { RegisterResponseDto } from "../models/register.response.model.dto";
import { Captcha } from "../models/captcha.model";
import { CaptchaDto } from "../models/captcha.dto.model";

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

    return this._http.get(path,{
      responseType: 'text' as const
    });
  }

  private toCaptchaModel(dto: CaptchaDto): Captcha {
    return new Captcha(dto.imageBase64, dto.imageMimeType, dto.question, dto.response);
  }
}
