import React, {useState, useEffect} from "react";
// import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";
import courseStore from "../stores/courseStore";
import {loadCourse, deleteCourse} from "../actions/courseAction";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourse();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function onDelete(id) {
    debugger;
    deleteCourse(id);
  }
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add New Course
      </Link>
      <CourseList courses={courses} onDelete={onDelete} />
    </>
  );
}

export default CoursesPage;
