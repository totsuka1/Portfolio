import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/1-LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/2-Main/Main";

const App = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
