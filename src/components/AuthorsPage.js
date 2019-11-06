import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorList from "./AuthorList";

import authorStore from "../stores/AuthorStore";
import { loadAuthors } from "../actions/authorAction";

function AuthorPage() {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authors.length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange); // cleanup
  }, [authors.length]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  function deleteAuthor(id) {
    // to do, Add delete function in author action
  }

  return (
    <>
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/authors">
        Add Authors
      </Link>

      <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </>
  );
}

export default AuthorPage;
