import { createAction, props } from "@ngrx/store";

export const createUserIden = createAction('[user] create user ident', props<{
    userId: BigInt
    email: string,
    jwt:string,
    roles:string[]
  }>()
);

export const clearUserIden = createAction('[user] clear user ident');
