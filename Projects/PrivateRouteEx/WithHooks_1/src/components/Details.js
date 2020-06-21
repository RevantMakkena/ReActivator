import React from "react";
import {useAuthentication} from "./AuthDataProvider";

export const Details = () => {
  const auth = useAuthentication();
  console.log(auth);
  const setLogin = () => {
    auth.login({firstname: "revanth"});
  };
  if (auth.user) {
    return <h4>{auth.user.firstname}</h4>;
  } else {
    return (
      <h4>
        Not Authorized
        <button type='button' onClick={setLogin}>
          Set Logi
        </button>
      </h4>
    );
  }
};
