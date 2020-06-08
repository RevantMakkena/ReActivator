import React from "../node_modules/@types/react";
import {Link} from "../node_modules/react-router-dom";
import {Paper} from "../node_modules/@material-ui/core";

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
