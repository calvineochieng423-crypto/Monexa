import React, { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "circ.inout" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "circ.inout" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleScroll = () => {
      gsap.fromTo(
        cursor,
        { scale: 1.4 },
        { scale: 1, duration: 0.4, ease: "circ.inout" }
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
