import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const rootReducers = () =>
  combineReducers({
    usersRoot: userReducer, //api array
  });
