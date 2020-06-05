import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AddCustomTimer from "./components/AddCustomTimer";
import AutoRunningTimer from "./components/AutoRunningTimer";
import TimerWithProps from "./components/TimerWithProps";
import App from "./App";
import ProjectLinks from "./ProjectLinks";

const Routing = () => {
  return (
    <div>
      <Router>
        <ProjectLinks />
        <Switch>
          <Route path='/' component={App} />
          <Route path='/Timer' component={AutoRunningTimer} />
          <Route path='/CustomTimer' component={AddCustomTimer} />
          <Route path='/TimerWithProps' component={TimerWithProps} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
