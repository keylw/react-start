import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  const router = window.location.pathname;
  if (router === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;
