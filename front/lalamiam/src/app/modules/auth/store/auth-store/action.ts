import { createAction, props } from "@ngrx/store";
import { Captcha } from "../../models/captcha.model";
import { CaptchaClientResponseDto } from "../../models/captcha-client-response.dto";

export const login = createAction('[Auth] Login client', props<{email: string, password: string}>());
export const csrf = createAction('[Auth] csrf');
export const captcha = createAction('[Auth] get captcha')
export const captchaSuccess = createAction('[Auth] captcha success', props<{captcha: Captcha}>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout success', props<{message: string}>());
export const logoutFailed = createAction('[Auth] Logout failed', props<{error: string, isErrorVisible: boolean}>());

export const register = createAction('[Auth] Register client', props<{email: string, password: string, name: string, captchaClientResponseDto: CaptchaClientResponseDto}>());
