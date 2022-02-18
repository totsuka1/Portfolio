import React from "react";
import LandingPage from "./components/1-LandingPage/LandingPage";
import Navbar from "./components/2-Navbar/Navbar";
import Main from "./components/3-Main/Main";
import Footer from "./components/4-Footer/Footer";

const App = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
