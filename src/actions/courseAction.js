import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionType";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionType.UPDATE_COURSE
        : actionType.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourse() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionType.LOAD_COURSE,
      courses: courses,
    });
  });
}

export function deleteCourse(courseId) {
  return courseApi.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      actionType: actionType.DELETE_COURSE,
      id: courseId,
    });
  });
}
