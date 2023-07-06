import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={() => handleSectionClick("main")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleSectionClick("music")}>
            Music Project
          </button>
        </li>
        <li>
          <button onClick={() => handleSectionClick("golf")}>
            Golf Project
          </button>
        </li>
        <li>
          <button onClick={() => handleSectionClick("about")}>About Me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
