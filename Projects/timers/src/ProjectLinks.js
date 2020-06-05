import React from "react";
import {Link} from "react-router-dom";

const ProjectLinks = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/Timer'>Run Timer</Link>
      <Link to='/CustomTimer'>Custom Timer</Link>
      <Link to='/TimerWithProps'>Timers with input</Link>
    </div>
  );
};

export default ProjectLinks;
