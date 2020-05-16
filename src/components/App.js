import React from "react";
import About from "./AboutPage";
import Home from "./HomePage";
import Header from "./common/Header";
import Courses from "./CoursesPage";
import NotFound from "./NotFound";
import ManageCourse from "./ManageCourse";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Courses" component={Courses} />
        <Route path="/About" component={About} />
        <Route path="/course/edit/:slug" component={ManageCourse} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
