import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseAction";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
