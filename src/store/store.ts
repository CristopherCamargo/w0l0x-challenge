import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { AppReducers } from "./reducers";

export const store = createStore(AppReducers, applyMiddleware(thunk));