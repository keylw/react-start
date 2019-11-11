import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/AuthorStore";

import { toast } from "react-toastify";
import * as courseAction from "../actions/courseAction";
import * as authorAction from "../actions/authorAction";

const ManageCoursePage = props => {
  const [error, setError] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    authorStore.addChangeListener(authorOnChange);

    if (authors.length === 0) {
      authorAction.loadAuthors();
    }
    return () => authorStore.removeChangeListener(authorOnChange);
  }, [authors.length]);

  function authorOnChange() {
    setAuthors(authorStore.getAuthors());
  }

  useEffect(() => {
    function coursesContainSlug(slug) {
      return courses.findIndex(o => o.slug === slug) !== -1;
    }

    courseStore.addChangeListener(onChange);

    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseAction.loadCourses();
    } else if (!slug) {
    } else if (coursesContainSlug(slug)) {
      setCourse(courseStore.getCourseBySlug(slug));
    } else if (!course.slug) {
      props.history.push("/error");
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [
    courses.length,
    props.match.params.slug,
    props.history,
    courses,
    course.slug
  ]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  //destruction used in parameters
  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _error = {};

    if (!course.title) _error.title = "Title is required";
    if (!course.authorId) _error.authorId = "Author Id is required";
    if (!course.category) _error.category = "Category is required";

    setError(_error);
    return Object.keys(_error).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseAction.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("course Saved !");
    });
  }

  return (
    <>
      <h2> Manager Course</h2>
      <CourseForm
        authors={authors}
        error={error}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
