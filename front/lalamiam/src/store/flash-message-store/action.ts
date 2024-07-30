import { createAction, props } from "@ngrx/store";

export const createMessage = createAction('[message] create message', props<{ message: string, isError: boolean }>());

export const clearMessage = createAction('[message] clear message');
