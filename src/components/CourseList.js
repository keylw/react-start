import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <th>{course.title}</th>
              <th>{course.audthorId}</th>
              <th>{course.category}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.prototype = {
  courses: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    audthorId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })
};

export default CourseList;
