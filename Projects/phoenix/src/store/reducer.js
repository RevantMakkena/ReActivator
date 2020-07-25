import {combineReducers} from "@reduxjs/toolkit";
import {EmpReducer, LoginReducer} from "./slices";

export default combineReducers({
  loginUser: LoginReducer,
  employees: EmpReducer,
});
