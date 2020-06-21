import React from "react";
import "./App.css";
import {UseEffectComponent} from "./components/UseEffect";
import {UseLayoutEffectComponent} from "./components/UseLayoutEffect";
import {UseMemoComponent} from "./components/UseMemo";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {UseCallbackComponent} from "./components/UseCallback";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/UEDemo'>Use Effect</Link>
        {" | "}
        <Link to='/ULEDemo'>Use Layout Effect</Link>
        {" | "}
        <Link to='/UMDemo'>Use Memo</Link>
        {" | "}
        <Link to='/UCBDemo'>Use Callback Memo</Link>
        <Switch>
          <Route path='/UEDemo' component={UseEffectComponent} />
          <Route
            path='/ULEDemo'
            component={UseLayoutEffectComponent}
          />
          <Route path='/UMDemo' component={UseMemoComponent} />
          <Route path='/UCBDemo' component={UseCallbackComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
