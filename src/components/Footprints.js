import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footprints.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Footprints = () => {
  const footprintsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footprints = footprintsRef.current.querySelectorAll(".shoe");
    footprints.forEach((footprint) => {
      gsap.set(footprint, { opacity: 0 });

      gsap.to(footprint, {
        opacity: 1,
        scrollTrigger: {
          trigger: footprint,
          start: "top 100%",
          end: "+=100",
          scrub: 0.5,
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div ref={footprintsRef}>
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-4" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-5" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-6" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-8" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-9" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-10" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-11" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-12" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-13" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-14" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-15" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-16" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-17" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-18" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-19" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-20" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-21" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-22" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-23" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-24" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-25" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-26" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-27" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-28" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-29" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-30" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-31" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-32" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-33" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-34" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-35" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-36" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-37" />
      <FontAwesomeIcon icon={faShoePrints} className="shoe shoe-38" />
    </div>
  );
};

export default Footprints;
