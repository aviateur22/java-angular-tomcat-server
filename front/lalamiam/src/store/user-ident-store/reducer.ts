import { createReducer, on } from "@ngrx/store";

import * as UserIdentAction from "./action";
import { UserIdentModel } from "./user.ident.model";

export const initialUserState: UserIdentModel = {
  userId: BigInt(0),
  token: '',
  jwt: '',
  email: '',
  roles: []
}

export const reducers = createReducer(
  initialUserState,
  on(UserIdentAction.createUserIden, (state, {email, jwt, userId, roles})=>({...state, email, jwt, userId, roles, token: ''})),
  on(UserIdentAction.clearUserIden,(state)=>({...state, email: '', roles: [], userId: BigInt(0), jwt: '', token: ''}))
)

