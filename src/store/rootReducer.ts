// import type { Action } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";

// export const rootReducer = combineReducers({
//   ticket: () => null,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export type RootAction = Action<any>;
import { combineReducers } from "@reduxjs/toolkit";
import type { TicketAction } from "@modules/ticket/reducer";
import { ticketReducer } from "@modules/ticket/reducer";

export const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = TicketAction;
