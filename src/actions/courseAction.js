import dispacther from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionType";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispacther.dispatch({
      actionType: course.id
        ? actionType.UPDATE_COURSE
        : actionType.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispacther.dispatch({
      actionType: actionType.LOAD_COURSES,
      courses: courses
    });
  });
}
