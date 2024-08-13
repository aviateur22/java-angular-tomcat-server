import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import * as UserIdentAction from "./action";

import { map, tap } from "rxjs";

@Injectable()
export class UserEffect {

  constructor(private _action$: Actions){

  }

  init$ = createEffect(()=>
    this._action$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      tap(value=>{
        console.log(value);
      }),
      map(()=>{

        const userString = localStorage.getItem('user');
        if(userString) {
          console.log("ici, userinfo: " + userString);
          const user = JSON.parse(userString);

          return UserIdentAction.createUserIden({
            userId: user.userid,
            email: user.email,
            jwt: user.jwt,
            roles: user.roles
          })
        }
        return { type: '[user] clear user ident'}
      })
    )
  );

  clearUser$ = createEffect(()=>
    this._action$.pipe(
      ofType(UserIdentAction.clearUserIden),
      map(()=>{
        return UserIdentAction.createUserIden({
          userId: BigInt(0),
          jwt: '',
          email: '',
          roles: []
        })
      })
    )
  )


}
