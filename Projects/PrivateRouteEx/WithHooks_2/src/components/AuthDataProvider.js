import React from "react";
import {useContext} from "react";
import {createContext, useState, useMemo} from "react";
import {} from "react";

const noop = () => {};
const AuthContext = createContext({
  user: null,
  login: noop,
  logout: noop,
});

export const AuthDataProvider = (props) => {
  const [user, setUser] = useState(null);

  const auth = useMemo(
    () => ({
      user,
      login: (user) => setUser(user),
      logout: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={auth} {...props} />;
};

export default AuthDataProvider;

export const useAuthentication = () => useContext(AuthContext);
