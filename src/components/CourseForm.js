import React from "react";
import TextInput from "./common/TextInput.js";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.error.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            default={props.course.authorId || ""}
            className="form-control"
          >
            {props.authors.map(author => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
          </select>
        </div>
        {props.error.authorId && (
          <div className="alert alert-danger">{props.error.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.error.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.prototype = {
  authors: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
