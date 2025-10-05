import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Logo.css";

gsap.registerPlugin(ScrollTrigger);

export default function Logo() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-intro", {
        scrollTrigger: {
          trigger: ".logo-intro",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(".logo-image", {
        scrollTrigger: {
          trigger: ".logo-image",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
      });
      const marquee = marqueeRef.current;
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -250,
          repeat: -1,
          ease: "none",
          duration: 1000,
        });
      }
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="logo-wrapper" ref={logoRef}>
      <div className="logo-div">
        <div className="logo-intro">
          <p>
            Over{" "}
            <span>
              <CountUp start={0} end={100} duration={3} suffix="+" />
            </span>{" "}
            projects
          </p>
        </div>

        <div className="logo-marquee">
          <div className="logo-image" ref={marqueeRef}>
            <img src="./logo1.png" alt="logo" />
            <img src="./logo2.png" alt="logo" />
            <img src="./logo3.png" alt="logo" />
            <img src="./logo4.png" alt="logo" />
            <img src="./logo5.png" alt="logo" />
            <img src="./logo6.png" alt="logo" />

            {/* Duplicate for seamless looping */}
            <img src="./logo1.png" alt="logo" />
            <img src="./logo2.png" alt="logo" />
            <img src="./logo3.png" alt="logo" />
            <img src="./logo4.png" alt="logo" />
            <img src="./logo5.png" alt="logo" />
            <img src="./logo6.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
