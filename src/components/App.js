import React from "react";
import About from "./AboutPage";
import Home from "./HomePage";
import Header from "./common/Header";
import Courses from "./CoursesPage";
import NotFound from "./NotFound";
import ManageCourse from "./ManageCourse";
import {Route, Switch, Redirect} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Courses" component={Courses} />
        <Route path="/About" component={About} />
        <Route path="/course/edit/:slug" component={ManageCourse} />
        <Route path="/Course" component={ManageCourse} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
