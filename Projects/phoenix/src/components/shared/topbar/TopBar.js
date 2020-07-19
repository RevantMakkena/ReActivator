import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import BlurOnIcon from "@material-ui/icons/BlurOn";

export const TopBar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <BlurOnIcon />
      </Toolbar>
    </AppBar>
  );
};
