import {createSlice} from "@reduxjs/toolkit";
import * as UrlActions from "../../config/keys";
import {
  API_CALL_BEGAN,
  API_CALL_SUCCESS,
  API_CALL_FAILED,
} from "../actions/ApiActions";

const usr = createSlice({
  name: "logUser",
  initialState: {currentUser: {}, token: "", loggedIn: false},
  reducers: {
    loginUser: (user, action) => {},
    logoutUser: (user, action) => {},
  },
});

const {loginUser, logoutUser} = usr.actions;
export default usr.reducer;

//Action Creators
export const loginUserAction = () => (dispatch, getState) => {
  debugger;
  const obj = getState().loginUser.currentUser;
  if (Object.keys(obj).length === 0) {
    dispatch(
      API_CALL_BEGAN({
        url: UrlActions.loginAPI,
        method: "get",
        onSuccess: loginUser.type,
      })
    );
  }
};

export const logoutUserAction = () => (dispatch, getState) => {
  const obj = getState().loginUser.currentUser;
  if (Object.keys(obj).length === 0) {
    dispatch(
      API_CALL_BEGAN({
        url: UrlActions.loginAPI,
        method: "get",
        onSuccess: logoutUser.type,
      })
    );
  }
};
