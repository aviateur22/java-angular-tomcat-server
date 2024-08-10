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
import { environment } from 'src/environments/environment';


@Injectable()
export class HandlerHttpInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.urlWithParams.includes('/api/')){
      console.log('form_csrf_token pour api request: ' + localStorage.getItem('form-csrf-token'));
      const token: string| null = localStorage.getItem('token');
      const formToken: string|null = localStorage.getItem('form-csrf-token');
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Form-Csrf-Token': formToken === null ? '' : formToken
        }
      });
    }
    return next.handle(request).pipe(
      tap(event=>{
        if(event instanceof HttpResponse) {
          console.log(`liste des headers:`);
          console.log(event.headers)
          console.log(`form-csrf-token: ${event.headers.get('form-csrf-token')}`)
          const csrfToken = event.headers.get('form-csrf-token');
          if (csrfToken) {
            localStorage.setItem('form-csrf-token', csrfToken);
          }
        }
      }),
      tap({
        error: (error: HttpErrorResponse)=>{
          const errorStatus: number = error.status;
          const router = this._injector.get(Router);
          const webapp_path: string = environment.webapp_path !== '' ?
          environment.webapp_path+'/' : '';
          switch(errorStatus) {
            case 0: {
              console.log('erreur: 0: ', error.status);
              router.navigate(["error"]);
              break;
            }
            case 401: {
              console.log('erreur: 401: ', error.message);
              router.navigate([`${webapp_path}connexion`]);
              break;
            }
            case 403: {

              console.log('error 403: ', 'error 403');
              router.navigate([`${webapp_path}connexion`]);
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
