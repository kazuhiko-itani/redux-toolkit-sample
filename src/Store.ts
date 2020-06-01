import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, TodoState, TodoAction } from "./Pages/Module";

const rootReducer = combineReducers({
  todo: todoReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type Dispatch = typeof store.dispatch;

export type ReduxState = {
  todo: TodoState;
};

export type ReduxAction = TodoAction;
