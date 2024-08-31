import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthAction from "./action";
import * as UserIdentAction from "src/store/user-ident-store/action";
import * as FlashMessageAction from 'src/store/flash-message-store/action';

import { catchError, from, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import frontendLinkUrl from "src/app/utils/frontend-link-url";
import { ActivateAccountResponse } from "../../models/activate-account.model";

@Injectable()
export class AuthEffect {

  constructor(private _action$: Actions, private _authService: AuthService, private _router: Router){}

  login$ = createEffect(()=>
  this._action$.pipe(
    ofType(AuthAction.login),
    switchMap((data)=>
      this._authService.login(data).pipe(
        switchMap((loginResponse)=> [
          // Creation du UserIdent
          UserIdentAction.createUserIden({
            userId: loginResponse.id,
            email: loginResponse.email,
            jwt: loginResponse.jwt,
            roles: loginResponse.roles
          }),

          // Generation Message login
          FlashMessageAction.createMessage({message: loginResponse.message, isError: false}),


        ]),
        catchError((error)=>from([
          UserIdentAction.clearUserIden(),
          // Generation Message d'erreur
          FlashMessageAction.createMessage({message: error.error.error, isError: true})
        ])
        )
      )
    )
  )
  )

  register$ = createEffect(()=>
    this._action$.pipe(
      ofType(AuthAction.register),
      mergeMap((data)=>
        this._authService.register(data).pipe(
          map((registerResponse)=>FlashMessageAction.createMessage({message: registerResponse.message, isError: false})),
          catchError(error=> {
            return of(
              // Generation Message d'erreur
              FlashMessageAction.createMessage({message: error.error.error, isError: true})
            )
          }
        )
        )
      )
    )
  )

  logout$ = createEffect(()=>
    this._action$.pipe(
      ofType(AuthAction.logout),
      mergeMap(()=>
        this._authService.logout().pipe(
          tap(()=>{
            // Redirect HomeApp
            console.log('redirection:  ' + frontendLinkUrl.home);
            this._router.navigate([frontendLinkUrl.home])}
          ),
          switchMap((resMessage)=> {
            localStorage.removeItem('user');
            return [
              // Suppression du UserIdent
              UserIdentAction.clearUserIden(),

              // Generation Message logout
              FlashMessageAction.createMessage({message: resMessage, isError: false}),


            ]
          }),
          catchError((error)=>{
            localStorage.removeItem('user');
            return from([
              // Suppression du UserIdent
              UserIdentAction.clearUserIden(),

              // Generation Message d'erreur
              FlashMessageAction.createMessage({message: error.error.error, isError: true})
            ])
          }
        )
      )
    )
  ))

  csrf$ = createEffect(()=>
    this._action$.pipe(
      ofType(AuthAction.csrf),
      mergeMap(()=>
        this._authService.csrf().pipe(
          switchMap((csrf)=>[
            // Generation Message Register
            FlashMessageAction.createMessage({message: csrf, isError: false})
          ]),
          catchError(error=> {
            return of(
              // Generation Message d'erreur
              FlashMessageAction.createMessage({message: error.error.error, isError: true})
            )
          }
        )
        )
      )
    )
  )

  captcha$ = createEffect(()=>
    this._action$.pipe(
      ofType(AuthAction.captcha),
      mergeMap(()=>
        this._authService.captcha().pipe(
          map((captcha)=>{
            const captchaString = JSON.stringify(captcha);
            localStorage.setItem('captcha', captchaString)
            return AuthAction.captchaSuccess({captcha})
          }),
          catchError(error=> {
            return of(
              // Generation Message d'erreur
              FlashMessageAction.createMessage({message: error.error.error, isError: true})
            )
          })
        )
      )
    )
  )

  activateAction$ = createEffect(()=>
    this._action$.pipe(
      ofType(AuthAction.activateAccount),
      mergeMap((activateAccountDto)=>
        this._authService.activateAccount(activateAccountDto).pipe(
          switchMap((activateAccountResponse)=>[
            // Message de success
            FlashMessageAction.createMessage({message: activateAccountResponse.message, isError: false}),

            AuthAction.activateAccountSuccess({activateAccountResponse})
          ]
        ),
          catchError(error=> {
            return of(
              // Generation Message d'erreur
              FlashMessageAction.createMessage({message: error.error.error, isError: true}),
              AuthAction.activateAccountFailure()
            )
          })
        )
      )
    )

  )
}
