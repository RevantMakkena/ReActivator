import React from "react";
import {createContext} from "react";
import {
  useState,
  useEffect,
  useContext,
  useMemo,
  useReducer,
} from "react";
import {LoginHeader} from "./LoginHeader";
import Login from "../login/login";
import {Register} from "../register/register";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {HomePage} from "./HomePage";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: {},
  payload: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.user)
      );
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export function AuthDataApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user =
      localStorage.getItem("user") != "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    const token = JSON.parse(localStorage.getItem("token")) || null;

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <LoginHeader />
      <div className='App'>
        {!state.isAuthenticated ? (
          <BrowserRouter>
            <div>
              <Link to='/register'>Register</Link> {" | "}
              <Link to='/login'>Login</Link>
            </div>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Redirect path='/' to='/login' />
            </Switch>
          </BrowserRouter>
        ) : (
          <HomePage />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export const AuthDataContext = () => useContext(AuthContext);
