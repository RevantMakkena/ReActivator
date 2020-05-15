import React from "react";
import About from "./AboutPage";
import Home from "./HomePage";
import Header from "./common/Header";
import Courses from "./CoursesPage";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/Courses" component={Courses} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
