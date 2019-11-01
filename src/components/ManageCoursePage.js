import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  return (
    <>
      <h2> Manager Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?"></Prompt> */}
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
