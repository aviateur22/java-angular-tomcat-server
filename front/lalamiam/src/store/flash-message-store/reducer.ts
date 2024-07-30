import { createReducer, on } from "@ngrx/store";

import * as MessageAction from "./action";
import { MessageModel } from "./message.model";

export const initialMessageState: MessageModel = {
  message: '',
  isError: false
}

export const reducers = createReducer(
  initialMessageState,
  on(MessageAction.createMessage, (state, {message})=>({...state, message})),
  on(MessageAction.clearMessage,(state)=>({...state, message: ''}))
)

