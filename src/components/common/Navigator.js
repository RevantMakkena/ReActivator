import React from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

export default function Navigator() {
  const activeStyle = {color: "orange"};
  return (
    <Nav>
      <NavLink activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/edit">
        Users
      </NavLink>
    </Nav>
  );
}
