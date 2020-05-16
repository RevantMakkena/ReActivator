import React from "react";
import {Prompt} from "react-router-dom";

const ManageCourse = (props) => {
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="U r leaving me :(" />
      {props.match.params.slug}
    </>
  );
};

export default ManageCourse;
