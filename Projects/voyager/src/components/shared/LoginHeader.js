import React from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";

export const LoginHeader = () => {
  const {state, dispatch} = AuthDataContext();
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-static-top'>
        <h5>Voyager</h5>
        {state.isAuthenticated ? (
          <button>Hi, {state.user.firstName}</button>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};
