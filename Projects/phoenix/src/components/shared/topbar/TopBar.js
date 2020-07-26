import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import "./TopBar.css";

export const TopBar = ({user, logout}) => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <i className='fab fa-phoenix-framework'></i>
        {user && user.name ? (
          <>
            <span className='user-name'> Hi, {user.name}</span>
            <button className='btn btn-danger' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  );
};
