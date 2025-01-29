import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Showcase.css";
import musicImage from "../images/Music.png";
import golfImage from "../images/Golf.png";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const musicTitleRef = useRef(null);
  const musicProcessRef = useRef(null);
  const musicDescriptionRef = useRef(null);
  const golfTitleRef = useRef(null);
  const golfProcessRef = useRef(null);
  const golfDescriptionRef = useRef(null);
  const musicUrl = process.env.REACT_APP_MUSIC_PROJECT_URL;
  const golfUrl = process.env.REACT_APP_GOLF_PROJECT_URL;

  useEffect(() => {
    console.log(process.env.REACT_APP_MUSIC_PROJECT_URL);
    console.log(process.env.REACT_APP_GOLF_PROJECT_URL);
    gsap.from(musicTitleRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: musicTitleRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(musicProcessRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: musicProcessRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(musicDescriptionRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: musicDescriptionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(golfTitleRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: golfTitleRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(golfProcessRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: golfProcessRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(golfDescriptionRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: golfDescriptionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section>
      <div id="music" className="container1">
        <h1 ref={musicTitleRef} className="music-h1">
          Music Project
        </h1>
        <div className="music-container">
          <a href={musicUrl} target="_blank" rel="noopener noreferrer">
            <img
              className="music-img"
              src={musicImage}
              alt="Project Screenshot"
            />
          </a>
          <h2 ref={musicProcessRef} className="music-process">
            Process
          </h2>
          <div
            ref={musicDescriptionRef}
            className="music-description-container"
          >
            <p className="music-description">
              The Music Project was primarily intended to provide entertainment
              and user interaction. My goal was to incorporate engaging
              animations on the page, allowing users to interact with them. To
              accomplish this, I utilized GSAP to achieve the desired
              animations.
            </p>
            <p className="music-description">
            
            </p>
          </div>
        </div>
      </div>
      <div id="golf" className="container">
        <h1 ref={golfTitleRef} className="golf-h1">
          Golf Project
        </h1>
        <div className="golf-container">
          <h2 ref={golfProcessRef} className="golf-process">
            Process
          </h2>
          <div ref={golfDescriptionRef} className="golf-description-container">
            <p className="golf-description">
              The Golf Project was the very first project I’ve created, aside
              from the ones I completed through Codecademy. I've created the project
              using HTML, CSS, and JavaScript. With HTML, I've structured the
              layout, CSS brings style and visual appeal, and JavaScript adds
              dynamic event handling. As users interact with the elements, my
              project replicates the engaging experience of golf websites,
              providing insights into their construction while indulging my love
              for the sport.
            </p>
          </div>
          <a href={golfUrl} target="_blank" rel="noopener noreferrer">
            <img
              className="golf-img"
              src={golfImage}
              alt="Project Screenshot"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
