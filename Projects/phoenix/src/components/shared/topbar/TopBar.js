import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import "./TopBar.css";

export const TopBar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <i class='fab fa-phoenix-framework'></i>
      </Toolbar>
    </AppBar>
  );
};
