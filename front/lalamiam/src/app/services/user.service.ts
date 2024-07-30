import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiEndPoint: string =  environment.api_base + "/users";

  constructor(private _http: HttpClient) { }


  public getUsers(): Observable<string> {
    return this._http.get(this._apiEndPoint, {
      responseType: 'text' as const
    })
  }
}
