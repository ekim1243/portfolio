import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Mouse.css";

const Mouse = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
  }, []);

  const moveCursor = (e) => {
    const { clientX, clientY } = e;
    gsap.to(cursorRef.current, {
      x: clientX,
      y: clientY,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Mouse;
