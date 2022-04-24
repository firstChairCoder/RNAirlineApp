// import type { Store } from "redux";
// import { applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import thunk from "redux-thunk";
// import type { ThunkDispatch } from "@reduxjs/toolkit";

// import type { RootAction, RootState } from "./rootReducer";
// import { rootReducer } from "./rootReducer";

// // const middlewares = [thunk];

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store: Store<RootState, RootAction> = configureStore(
//   rootReducer
//   //   composeEnhancers(applyMiddleware(...middlewares))
//   // reducer: {
//   //     root: rootReducer,
//   // }
// );

// export type AppDispatch = ThunkDispatch<RootState, unknown, RootAction>;

import type { Store } from "redux";
import { applyMiddleware, compose, createStore } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from "redux-thunk";
import type { ThunkDispatch } from "@reduxjs/toolkit";

import type { RootAction, RootState } from "./rootReducer";
import { rootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<RootState, RootAction> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export type AppDispatch = ThunkDispatch<RootState, unknown, RootAction>;
