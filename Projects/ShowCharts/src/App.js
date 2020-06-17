import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {BarChartEx} from "./components/BarChart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' component={BarChartEx}></Route>
      </BrowserRouter>
      <div className='App'></div>
    </>
  );
}

export default App;
