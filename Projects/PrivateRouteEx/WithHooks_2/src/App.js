import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./components/Router";
import {AuthDataProvider} from "./components/AuthDataProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <Router />
      </AuthDataProvider>
    </BrowserRouter>
  );
};

export default App;
