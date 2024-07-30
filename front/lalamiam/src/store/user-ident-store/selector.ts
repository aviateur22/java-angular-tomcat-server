import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selector = (state: AppState) => state.userIdentState;

export const getEmailSelector = createSelector(selector, (state) => state.email);
export const getJwtSelector = createSelector(selector, (state)=>state.jwt);
