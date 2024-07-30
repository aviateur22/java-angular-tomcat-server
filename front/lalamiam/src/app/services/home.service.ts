import { HttpClient } from '@angular/common/http';
import { Injectable, Version } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _apiEndPoint: string =  environment.api_base + "/version";

  constructor(private _http: HttpClient) { }


  public getHomeMessage(): Observable<string> {
    return this._http.get(this._apiEndPoint, {
      responseType: 'text' as const
    })
  }

}
