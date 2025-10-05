import "./Featuresection.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Featuresection() {
  const FeaturesectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!FeaturesectionRef.current) return;
    const header = FeaturesectionRef.current.querySelector(".wrapper h1");
    if (header) {
      const split = new SplitText(header, { type: "words" });

      gsap.from(split.words, {
        yPercent: 300,
        opacity: 0,
        ease: "circ.inout",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: FeaturesectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    const images = FeaturesectionRef.current.querySelectorAll(
      ".feature-wrappers img"
    );
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 0.5 },
        {
          scale: 1,
          ease: "back.inout",
          duration: 1.2,
          delay: 0.5,
          stagger: 0.9,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="feature-section" ref={FeaturesectionRef}>
      <div className="wrapper">
        <h1>Discover our collection of premium homes.</h1>
      </div>
      <div className="feature-wrapper">
        <div className="feature-wrappers">
          <img src="./home1.jpeg" alt="Luxury Villa" />
        </div>
        <div className="feature-wrappers">
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
            alt="Modern Mansion"
          />
        </div>
        <div className="feature-wrappers">
          <img src="./home2.jpeg" alt="Contemporary House" />
        </div>
        <div className="feature-wrappers">
          <img src="./home3.jpeg" alt="Cozy Villa" />
        </div>
        <div className="feature-wrappers">
          <img src="./home4.jpeg" alt="Minimalist Home" />
        </div>
        <div className="feature-wrappers">
          <img src="./home5.jpeg" alt="Minimalist Home" />
        </div>
      </div>
    </div>
  );
}
