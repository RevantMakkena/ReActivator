import React from "react";
import {render} from "react-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";

render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("app")
);
