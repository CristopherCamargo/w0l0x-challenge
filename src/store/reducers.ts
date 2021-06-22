import { combineReducers } from "redux";
import { listReducer } from "./list/reducer";

export const AppReducers = combineReducers({
  list: listReducer
});