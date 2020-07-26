import {createSlice} from "@reduxjs/toolkit";
import * as UrlActions from "../../config/keys";
import {
  API_CALL_BEGAN,
  API_CALL_SUCCESS,
  API_CALL_FAILED,
} from "../actions/ApiActions";

const initialUser = localStorage.getItem("logInUser")
  ? JSON.parse(localStorage.getItem("logInUser"))
  : null;

const usr = createSlice({
  name: "logUser",
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(
        "logInUser",
        JSON.stringify(action.payload)
      );
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("logInUser");
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
  const obj = getState().auth?.user;

  if (obj === null || Object.keys(obj).length === 0) {
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
  const obj = getState().auth;
  if (Object.keys(obj).length !== 0) {
    dispatch(
      API_CALL_BEGAN({
        url: UrlActions.loginAPI + "logout",
        method: "post",
        headers: {email: obj.user.email, token: obj.token},
        onSuccess: logoutUser.type,
      })
    );
  }
};
