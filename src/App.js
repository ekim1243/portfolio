import React from "react";
import Main from "./components/Main";
import Scroll from "./components/Showcase";
import About from "./components/About";
import Mouse from "./components/Mouse";
import Navbar from "./components/Navbar";
import Footprints from "./components/Footprints";
import "./App.css";

const App = () => {
  return (
    <div>
      <Footprints />
      <Navbar />
      <Main />
      <Scroll />
      <About />
      <Mouse />
    </div>
  );
};

export default App;
