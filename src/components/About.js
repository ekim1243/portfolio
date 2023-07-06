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
          Through my journey on Codecademy, I acquired a solid foundation in
          frontend development, familiarizing myself with the tools and the
          development environment. I soon realized that learning is an ongoing
          process and that I needed to transition from learning to creating
          projects. Working on projects is how I enhanced my abilities and get
          the feel of becoming a fronted-developer. I started learning more by
          encountering problems, then researching in order to find the solution.
          Personally, the most thrilling part about being a software engineer is
          the fact that I’m attaining knowledge every time I encounter a problem
          and solve it. Considering numerous problems I'll face in the future,
          I'm excited by how much more there is to learn.{" "}
        </p>
        <p className="description2">
          Despite my college degree being unrelated to computer science, my
          passion for creativity, design, and computers has drove me to start
          learning how to code in early 2023. At the moment, I have experience
          and knowledge in frontend engineering, but I believe it would be
          beneficial to gain proficiency in backend development as well.
          Regarding my current project, I am assisting a friend's brand in
          building a website utilizing technologies such as GraphQL, Shopify
          Hydrogen, and Tailwind.
        </p>
      </section>
    </div>
  );
};

export default About;
