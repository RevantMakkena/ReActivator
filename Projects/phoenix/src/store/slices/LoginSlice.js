import {createSlice} from "@reduxjs/toolkit";
import * as UrlActions from "../../config/keys";
import {
  API_CALL_BEGAN,
  API_CALL_SUCCESS,
  API_CALL_FAILED,
} from "../actions/ApiActions";

const usr = createSlice({
  name: "logUser",
  initialState: {
    currentUser: {},
    token: "",
    loggedIn: false,
  },
  reducers: {
    loginUser: (user, action) => {
      user.currentUser = action.payload.user;
      user.token = action.payload.token;
      user.loggedIn = true;
    },
    logoutUser: (user, action) => {
      user.currentUser = {};
      user.token = "";
      user.loggedIn = false;
    },
  },
});

const {loginUser, logoutUser} = usr.actions;
export default usr.reducer;

//Action Creators
export const loginUserAction = (username, password) => (
  dispatch,
  getState
) => {
  const obj = getState().loginUser.currentUser;
  if (Object.keys(obj).length === 0) {
    dispatch(
      API_CALL_BEGAN({
        url: UrlActions.loginAPI + "login",
        method: "post",
        data: {email: username, password: password},
        onSuccess: loginUser.type,
      })
    );
  }
};

export const logoutUserAction = () => (dispatch, getState) => {
  const obj = getState().loginUser;
  if (Object.keys(obj).length !== 0) {
    dispatch(
      API_CALL_BEGAN({
        url: UrlActions.loginAPI + "logout",
        method: "post",
        headers: {email: obj.currentUser.email, token: obj.token},
        onSuccess: logoutUser.type,
      })
    );
  }
};
