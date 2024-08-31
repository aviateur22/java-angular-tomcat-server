import { createReducer, on } from "@ngrx/store";

import * as AuthAction from "./action";
import { AuthModel } from "./auth.model";
import { ActivatedAccountStatus } from "../../models/activate-account.model";

export const initialState: AuthModel = {
  error: '',
  isErrorVisible: false,
  isLoading: false,
  captcha: null,
  activateAccountResponse: null
}

export const reducers = createReducer(
  initialState,
  on(AuthAction.login, (state)=>({...state, isLoading: true})),
  on(AuthAction.register, (state)=>({...state, isLoading: true})),
  on(AuthAction.captchaSuccess,(state, {captcha})=>({
    ...state,
    ...state.captcha, captcha
    })
  ),
  on(AuthAction.leaveRegisterPage, (state)=>({...state, captcha: null})),
  on(AuthAction.activateAccountSuccess, (state, {activateAccountResponse})=>({
    ...state,
    ...state.activateAccountResponse, activateAccountResponse
    })
  ),
  on(AuthAction.activateAccountFailure, (state)=>({
    ...state,
    ...state.activateAccountResponse, accountActivatedStatus: ActivatedAccountStatus.FAILURE
    })
  )
);
