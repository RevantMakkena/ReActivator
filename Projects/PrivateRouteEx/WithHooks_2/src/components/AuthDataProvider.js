import React from "react";
import {createContext} from "react";
import {useState} from "react";
import {useMemo, useEffect, useContext} from "react";

export const AuthDataContext = createContext(null);
const initialAuthData = {};

export const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    const currentAuthData = {};
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  const login = (newAuthData) => setAuthData(newAuthData);
  const logout = () => setAuthData(initialAuthData);

  const authDataVal = useMemo(
    () => ({
      ...authData,
      login,
      logout,
    }),
    [authData]
  );
  return <AuthDataContext.Provider value={authDataVal} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);
