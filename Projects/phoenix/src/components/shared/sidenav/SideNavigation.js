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
          <ListItemText>Employees</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
