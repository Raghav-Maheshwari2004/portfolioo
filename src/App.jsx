import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Intro/>
    <About/>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
