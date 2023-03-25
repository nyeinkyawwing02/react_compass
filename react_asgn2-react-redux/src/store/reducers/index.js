import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const rootReducers = () =>
  combineReducers({
    userRoot: userReducer,
  });
