import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {getPosts} from "./components/Api";
import AppEntry from "./components/AppEntry";
import {BrowserRouter, Route} from "react-router-dom";
import {EditPost} from "./components/EditPost";
import {AllPosts} from "./components/AllPosts";

function App() {
  return (
    <div className='App'>
      <AppEntry />
    </div>
  );
}

export default App;
