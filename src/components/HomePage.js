import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>My App</h1>
      <p>React, Flux web - app</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
