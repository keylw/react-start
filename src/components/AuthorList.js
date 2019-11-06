import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AuthorList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map(author => {
          return (
            <tr key={author.id}>
              <td>
                <Link to={"/author/" + author.id}>{author.name}</Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteAuthor(author.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

AuthorList.prototype = {
  deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default AuthorList;
