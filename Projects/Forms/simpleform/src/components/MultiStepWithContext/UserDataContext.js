import React, {useState, createContext} from "react";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [pag1, setPag1] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [pag2, setPag2] = useState({
    email: "",
    phone: "",
  });

  const [pag3, setPag3] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  return (
    <UserDataContext.Provider
      value={[pag1, setPag1, pag2, setPag2, pag3, setPag3]}>
      {props.children}
    </UserDataContext.Provider>
  );
};
