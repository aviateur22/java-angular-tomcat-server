import { createAction, props } from "@ngrx/store";
import { Captcha } from "../../models/captcha.model";
import { CaptchaClientResponseDto, ActivateAccountDto } from "../../models/auth.dto";
import { ActivateAccountResponse } from "../../models/activate-account.model";

export const login = createAction('[Auth] Login client', props<{email: string, password: string, language: string}>());
export const csrf = createAction('[Auth] csrf');
export const captcha = createAction('[Auth] get captcha')
export const captchaSuccess = createAction('[Auth] captcha success', props<{captcha: Captcha}>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout success', props<{message: string}>());
export const logoutFailed = createAction('[Auth] Logout failed', props<{error: string, isErrorVisible: boolean}>());

export const register = createAction('[Auth] Register client', props<{email: string, password: string, name: string, captchaClientResponseDto: CaptchaClientResponseDto, language: string}>());
export const leaveRegisterPage = createAction('[Auth] leave register page');

export const activateAccount = createAction('[Auth] Activate account', props<{email: string, token:string, language: string}>());
export const activateAccountSuccess = createAction('[Auth] Activate account success', props<{activateAccountResponse: ActivateAccountResponse}>());
export const activateAccountFailure = createAction('[Auth] Activate account failure');

export const lostPasswordMailing = createAction('[Auth] Lost password mailing', props<{email: string, language: string}>());

export const changePassword = createAction('[Auth] change password', props<{changePasswordToken: string, urlToken: string, email: string, password: string, language: string}>());
export const changePasswordSuccess = createAction('[Auth] change password success', props<{message: string}>());
export const changePasswordFailure = createAction('[Auth] change password failure', props<{message: string}>());

