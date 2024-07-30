import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] Login client', props<{email: string, password: string}>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout success', props<{message: string}>());
export const logoutFailed = createAction('[Auth] Logout failed', props<{error: string, isErrorVisible: boolean}>());

export const register = createAction('[Auth] Register client', props<{email: string, password: string, name: string}>());
