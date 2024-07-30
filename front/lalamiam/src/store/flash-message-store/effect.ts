import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as FlashMessageAction from './action';
import { delay, map } from "rxjs";

@Injectable()
export class FlashMessageEffect {

  constructor(private _action$: Actions){}

  clear$ = createEffect(()=>
    this._action$.pipe(
      ofType(FlashMessageAction.createMessage),
      delay(5000),
      map(()=>FlashMessageAction.clearMessage())
    )
  )

}
