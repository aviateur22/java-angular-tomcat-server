import { createReducer, on } from "@ngrx/store";

import * as AuthAction from "./action";
import { AuthModel } from "./auth.model";
import { ActivatedAccountStatus } from "../../models/activate-account.model";

export const initialState: AuthModel = {
  error: '',
  isErrorVisible: false,
  isLoading: false,
  captcha: null,
  activateAccountResponse: null,
  changeAccountPassword: null
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
    ...state, activateAccountResponse: {
      accountActivatedStatus: ActivatedAccountStatus.SUCCESS,
      message: activateAccountResponse.message
    }
    })
  ),
  on(AuthAction.activateAccountFailure, (state)=>({
    ...state, activateAccountResponse: {
      accountActivatedStatus: ActivatedAccountStatus.FAILURE,
      message: ''
    }
    })
  ),
  on(AuthAction.changePasswordSuccess, (state,{isPasswordChange})=>({
    ...state, changeAccountPassword: {
      message: '',
      isPasswordChange: isPasswordChange
    }
    })
  ),
  on(AuthAction.changePasswordFailure, (state,{isPasswordChange})=>({
    ...state, changeAccountPassword: {
      message: '',
      isPasswordChange: isPasswordChange
    }
  })
)

);
