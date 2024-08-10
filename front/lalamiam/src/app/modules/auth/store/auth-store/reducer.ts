import { createReducer, on } from "@ngrx/store";

import * as AuthAction from "./action";
import { AuthModel } from "./auth.model";

export const initialState: AuthModel = {
  error: '',
  isErrorVisible: false,
  isLoading: false,
  captcha: null
}

export const reducers = createReducer(
  initialState,
  on(AuthAction.login, (state)=>({...state, isLoading: true})),
  on(AuthAction.register, (state)=>({...state, isLoading: true})),
  on(AuthAction.captchaSuccess,(state, {captcha})=>({
    ...state,
    ...state.captcha, captcha
  })
)
);
