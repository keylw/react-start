import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CourserPage";

function App() {
  function getPage() {
    const router = window.location.pathname;
    if (router === "/courses") return <CoursesPage />;
    if (router === "/about") return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
