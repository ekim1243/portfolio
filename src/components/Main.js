import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  const letters = [
    "F",
    "o",
    "r",
    "",  
    "F",
    "u",
    "n",
    "!",
  ];

  const renderLetters = () => {
    return letters.map((letter, index) => (
      <span key={index} style={{ "--i": index }}>
        {letter}
      </span>
    ));
  };

  return (
    <div id="main" className="main">
      <ul className="icon-list">
        <a
          href="https://www.linkedin.com/in/eric-kim-522a15165/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </li>
        </a>
        <a href="mailto:erick98@vt.edu">
          <li className="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </li>
        </a>
        <a href="https://github.com/ekim1243" target="_blank" rel="noreferrer">
          <li className="github">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </li>
        </a>
      </ul>
      <h1>Eric Kim</h1>
      <h2 className="waivy">{renderLetters()}</h2>
    </div>
  );
};

export default Main;
