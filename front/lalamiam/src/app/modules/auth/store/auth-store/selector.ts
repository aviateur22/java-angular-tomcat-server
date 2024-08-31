import { createSelector } from "@ngrx/store";
import { AppState } from "src/store/app.state";

export const selector = (state:AppState) => state.authState;

export const isErrorVisibleSelector = createSelector(selector, (state) => state.isErrorVisible);
export const isLoadingSelector = createSelector(selector, (state)=>state.isLoading)
export const errorMessageSelector = createSelector(selector, (state) => state.error);
export const captchaSelector = createSelector(selector, (state) => state.captcha);
export const captchaQuestionSelector = createSelector(selector, (state) => state.captcha?.question);
export const activateAccountResponseSelector = createSelector(selector, (state) => state.activateAccountResponse);
