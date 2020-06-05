import React from "react";
import {Link} from "react-router-dom";
import {Paper} from "@material-ui/core";

const ProjectLinks = () => {
  return (
    <>
      <Paper>
        <Link to='/'>Home</Link>
        <Link to='/run-timer'>Run Timer</Link>
        <Link to='/custom-timer'>Custom Timer</Link>
        <Link to='/timer-with-input'>Timers with input</Link>
      </Paper>
    </>
  );
};

export default ProjectLinks;
