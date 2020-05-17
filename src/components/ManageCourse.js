import React, {useState, useEffect} from "react";
// import {Prompt} from "react-router-dom";
import CourseForm from "./CourseForm";
// import * as courseApi from "../api/courseApi";
import {toast} from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseAction";

const ManageCourse = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourse();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({target}) {
    setCourse({...course, [target.name]: target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved!!!");
    });
  }

  function isFormValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="U r leaving me :(" /> */}
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCourse;
