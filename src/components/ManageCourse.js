import React, {useState} from "react";
import {Prompt} from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCourse = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  function handleTitleChange(event) {
    const updatedCourse = {...course, title: event.target.value};
    setCourse(updatedCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="U r leaving me :(" />
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
};

export default ManageCourse;
