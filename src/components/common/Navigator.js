import React from "react";
import {NavLink} from "react-router-dom";

export default function Navigator() {
  const activeStyle = {color: "orange"};
  return (
    <>
      <NavLink activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/edit">
        Users
      </NavLink>
    </>
  );
}
