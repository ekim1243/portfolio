import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";
import ProfilePic from "../images/Profile1.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(aboutElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateText = () => {
    const timeline = gsap.timeline();

    timeline.from(".animate-h1", {
      duration: 1,
      opacity: 0,
      y: -50,
    });

    timeline.from(".animate-h2", {
      duration: 1,
      opacity: 0,
      x: -50,
    });

    timeline.from(".animate-section p", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });
  };

  return (
    <div id="about" ref={aboutRef} className="about">
      <h1 className="animate-h1">My Journey</h1>
      <h2 className="animate-h2">2023</h2>
      <img src={ProfilePic} alt="Profile" />
      <section className="animate-section">
        <p className="description1">
         I created this project because of my love for music and animation. I wanted to build an interactive website that combined both of these passions. It was a way for me to explore how I could bring those interests to life through coding, while also challenging myself to learn new skills and problem-solving techniques along the way.{" "}
        </p>
        <p className="description2">
          Despite my college degree being unrelated to computer science, my
          passion for creativity, design, and computers has drove me to start
          learning how to code in early 2023. At the moment, I have experience
          and knowledge in frontend engineering, but I believe it would be
          beneficial to gain proficiency in backend development as well.
          Regarding my current project, I am integrating the Spotiy API and
          OpenAi's Dall-E 2 API to create an image generator for the user's
          music playlist .
        </p>
      </section>
    </div>
  );
};

export default About;
