import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selector = (state: AppState) => state.messageState;

export const messageSelector = createSelector(selector, (state) => state.message);
export const isMessageErrorSelector = createSelector(selector, (state) => state.isError);

