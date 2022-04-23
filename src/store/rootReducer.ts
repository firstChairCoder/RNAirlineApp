import type { Action } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  ticket: () => null,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = Action<any>;
