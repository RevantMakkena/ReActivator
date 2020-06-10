import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {getPosts} from "./components/Api";
import AppEntry from "./components/AppEntry";

function App() {
  return (
    <div className='App'>
      <h4 style={{color: "green"}}>Sample CRUD Operations</h4>
      <AppEntry />
    </div>
  );
}

export default App;
