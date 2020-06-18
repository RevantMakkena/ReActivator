import React from "react";
import "./App.css";
import {UseEffectComponent} from "./components/UseEffect";
import {UseLayoutEffectComponent} from "./components/UseLayoutEffect";
import {UseMemoComponent} from "./components/UseMemo";
import {BrowserRouter, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <switch>
          <Link to='/UEDemo'>Use Effect</Link>
          {" | "}
          <Link to='/ULEDemo'>Use Layout Effect</Link>
          {" | "}
          <Link to='/UMDemo'>Use Memo</Link>
        </switch>
        <Route path='/UEDemo' component={UseEffectComponent} />
        <Route path='/ULEDemo' component={UseLayoutEffectComponent} />
        <Route path='/UMDemo' component={UseMemoComponent} />
      </BrowserRouter>
    </div>
  );
}

export default App;
