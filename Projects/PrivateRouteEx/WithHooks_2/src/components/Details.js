import React from "react";
import {useAuthDataContext} from "./AuthDataProvider";
import {Link} from "react-router-dom";

export const Details = () => {
  const {user, onLogout} = useAuthDataContext();

  const setLogin = () => {};
  if (user) {
    return <h4>{user.firstname}</h4>;
  } else {
    return <Link to='/'>Please log in</Link>;
  }
};
