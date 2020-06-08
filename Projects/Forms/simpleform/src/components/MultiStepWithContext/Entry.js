import React from "react";
import MultistepFormContext from "./MultistepForm";
import {UserDataProvider} from "./UserDataContext";

const Entry = () => {
  return (
    <UserDataProvider>
      <MultistepFormContext />
    </UserDataProvider>
  );
};

export default Entry;
