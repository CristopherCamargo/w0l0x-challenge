import { AnyAction } from "redux";
import { List } from "./types";
import { INITIAL_STATE } from "./initial-state";

const setList = (state: List, action: AnyAction) => ({
  ...state,
  list: action.payload
});

const actions: Record<string, (state: List, action: AnyAction) => List> = {
  "SET_LIST": setList
}

export const listReducer = (state: List = INITIAL_STATE, action: AnyAction) => {
  const { type } = action;

  if (actions[type]) {
    return actions[type](state, action);
  }
  
  return state;
}