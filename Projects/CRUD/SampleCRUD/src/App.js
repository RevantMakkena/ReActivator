import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {getPosts} from "./components/Api";
import AppEntry from "./components/AppEntry";
import {BrowserRouter, Route} from "react-router-dom";
import {EditPost} from "./components/EditPost";

function App() {
  return (
    <div className='App'>
      {/* <h4 style={{color: "green"}}>Sample CRUD Operations</h4> */}
      <BrowserRouter>
        <Route path='/edit' component={EditPost}></Route>
        <Route path='/home' component={AppEntry}></Route>
        <Route path='/' component={AppEntry}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
