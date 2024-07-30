import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class HandlerHttpInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!request.urlWithParams.includes('/api/')){
      const token: string| null = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request).pipe(

      tap({
        error: (error: HttpErrorResponse)=>{
          const errorStatus: number = error.status;
          const router = this._injector.get(Router);
          switch(errorStatus) {
            case 0: {
              console.log('erreur: 0: ', error.status);
              router.navigate(["error"]);
              break;
            }
            case 401: {
              console.log('erreur: 401: ', error.message);
              router.navigate(["connexion"]);
              break;
            }
            case 403: {
              console.log('error 403: ', error.status);
              break;
            }
            case 404: {
              console.log('error 404: ', error.status);
              router.navigate(["not-found-page"]);
             break;
            }
          }
        }
      })
    );
  }
}
