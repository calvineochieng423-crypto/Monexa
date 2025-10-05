"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CTASection.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const slidesRef = useRef<HTMLDivElement>(null);
  const CTAsectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slidesRef.current || !CTAsectionRef.current) return;

    const slides = slidesRef.current.querySelectorAll(".cta-slide");
    slides.forEach((slide) => {
      const dir = slide.classList.contains("left") ? -1 : 1;
      gsap.to(slide, {
        xPercent: 120 * dir,
        ease: "power1.out",
        scrollTrigger: {
          trigger: slidesRef.current,
          scrub: 125,
          start: "top 60%",
          end: "+=2000",
        },
      });
    });
    const ctaText = CTAsectionRef.current.querySelectorAll(".cta-wrapper > *");
    gsap.fromTo(
      ctaText,
      { yPercent: 300, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: CTAsectionRef.current,
          start: "top 65%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section className="cta-section" ref={CTAsectionRef}>
      <div className="cta-header">
        <div className="cta-wrapper">
          <h2>Ready to Transform Your Living?</h2>
        </div>
        <div className="cta-wrapper">
          <p>
            From modern interiors to timeless designs, discover homes tailored
            to your lifestyle.
          </p>
        </div>
      </div>

      <div ref={slidesRef} className="cta-slides">
        {/* Living Room Chain */}
        <div className="cta-slide left">
          <Block type="text" content="Modern Living Room" />
          <Block type="image" content="/cta1.jpeg" />
          <Block type="text" content="Elegant Design" />
          <Block type="image" content="/cta1a.jpeg" />
          <Block type="text" content="Spacious Comfort" />
          <Block type="image" content="/cta1b.jpeg" />
        </div>

        {/* Bedroom Chain */}
        <div className="cta-slide right">
          <Block type="text" content="Cozy Bedroom" />
          <Block type="image" content="/cta2.jpeg" />
          <Block type="text" content="Relaxed Style" />
          <Block type="image" content="/cta2a.jpeg" />
          <Block type="text" content="Warm Atmosphere" />
          <Block type="image" content="/cta2b.jpeg" />
        </div>

        {/* Kitchen Chain */}
        <div className="cta-slide left">
          <Block type="text" content="Luxury Kitchen" />
          <Block type="image" content="/cta3.jpeg" />
          <Block type="text" content="Functional Elegance" />
          <Block type="image" content="/cta3a.jpeg" />
          <Block type="text" content="Bright Spaces" />
          <Block type="image" content="/cta3b.jpeg" />
        </div>
      </div>

      <div className="cta-button-wrapper">
        <Link to="/gallerypage" className="btn btn-primary">
          Browse Home
        </Link>
      </div>
    </section>
  );
}

interface BlockProps {
  type: "text" | "image";
  content: string;
}

const Block: React.FC<BlockProps> = ({ type, content }) => {
  if (type === "text") return <p className="cta-text">{content}</p>;
  return (
    <span className="cta-img">
      <img src={content} alt="real estate showcase" />
    </span>
  );
};
