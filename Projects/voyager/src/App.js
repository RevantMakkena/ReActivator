import React from "react";
import "./App.css";
import {AuthDataProvider} from "./components/shared/AuthDataProvider";
import {Router} from "./components/shared/Router";

function App() {
  return (
    <AuthDataProvider>
      <Router />
    </AuthDataProvider>
  );
}

export default App;
