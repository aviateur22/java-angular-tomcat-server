import { ActionReducerMap } from "@ngrx/store";
import { reducers as AuthReducers } from './../app/modules/auth/store/auth-store/reducer';
import { reducers as UserIdentReducers } from './user-ident-store/reducer';
import { reducers as MessageReducers } from './flash-message-store/reducer';
import { AuthModel } from "src/app/modules/auth/store/auth-store/auth.model";
import { UserIdentModel } from "./user-ident-store/user.ident.model";
import { MessageModel } from "./flash-message-store/message.model";

export interface AppState {
  userIdentState: UserIdentModel;
  authState: AuthModel;
  messageState: MessageModel
}

export const reducers: ActionReducerMap<AppState> = {
  userIdentState: UserIdentReducers,
  authState: AuthReducers,
  messageState: MessageReducers
}
