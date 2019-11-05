import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/AuthorStore";

import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseAction";
import { loadAuthors } from "../actions/authorAction";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(coursesOnChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(coursesOnChange); // cleanup
  }, [courses.length]);

  function coursesOnChange() {
    setCourses(courseStore.getCourses());
  }

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authors.length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange); // cleanup
  }, [authors.length]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  function getAuthor(id) {
    let a = authors.find(author => author.id === id);
    return a === undefined ? "" : a.name;
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseList
        courses={courses}
        getAuthor={getAuthor}
        deleteCourse={deleteCourse}
      />
    </>
  );
}

export default CoursesPage;
