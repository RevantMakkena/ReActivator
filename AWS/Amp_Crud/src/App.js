import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {API} from "aws-amplify";

function App() {
  async function callApi() {
    const people = API.get("CRUDApi", "/people");
    console.log(people);
  }
  useEffect(() => {
    callApi();
  }, []);
  return <div>HI, I'm app</div>;
}

export default App;
