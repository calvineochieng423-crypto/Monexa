import CTASection from "../Components/CTAsection";
import TestimonialSection from "../Components/Testimonial";
import "./GalleryPage.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const GallaryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if(!GallaryRef.current)return;
    const Gwrapper = GallaryRef.current.querySelectorAll(".gallary-wrapper > *");
    gsap.fromTo(Gwrapper,
      {
        opacity: 0
      },
      {
        opacity: 1,
        ease: "circ.out",
        duration: 0.8,
        stagger: 0.4,
        delay: 0.2,
        scrollTrigger: {
          trigger: GallaryRef.current,
          start: "top 80%",
        }
      }
    )
  })
  return(
    <>
    <div className="gallery-div" ref={GallaryRef}>
      <div className="gallary-wrapper">
        <img src="./g1.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g2.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g3.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g4.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g5.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g6.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g7.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g8.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g9.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g10.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g11.jpeg" alt="image" />
      </div>
      <div className="gallary-wrapper">
        <img src="./g12.jpeg" alt="image" />
      </div>
    </div>
    <CTASection />
    <TestimonialSection />
    </>
  )
}