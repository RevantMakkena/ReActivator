import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  ListItemIcon,
} from "@material-ui/core";
import "./SideNavigation.css";

export const SideNavigation = () => {
  return (
    <Drawer variant='permanent' anchor='left'>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>Hi</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Hello</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Welcome</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
