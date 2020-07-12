import React from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";

export const LoginHeader = () => {
  const {state, dispatch} = AuthDataContext();

  const logoutUser = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  console.log(JSON.stringify(state));
  return (
    <>
      <nav className='navbar navbar-dark bg-dark navbar-static-top'>
        <h5>Voyager</h5>
        {state.isAuthenticated ? (
          <>
            <button
              className='btn btn-outline-light username'
              disabled='disabled'>
              Hi, {state.user.name}
            </button>
            <button className='btn btn-danger' onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};
