import CTASection from "../Components/CTAsection";
import "./FundpartnerPage.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

export default function FundPartner() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fundWrappers = contentRef.current?.querySelectorAll(".fund-wrapper > *");
    if (fundWrappers && contentRef.current) {
      gsap.fromTo(
        fundWrappers,
        { yPercent: 300, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.8,
          stagger: 0.7,
          ease: "circ.inout",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 45%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  }, []);

  return (
    <>
      <section className="page-section" ref={contentRef}>
        <div className="page-content">
          <div className="fund-wrapper">
            <h1>Smart Capital, Strong Returns</h1>
          </div>
          <div className="fund-wrapper">
            <p>
              Our investment platform connects visionary capital with high-value real
              estate projects. Together, we design portfolios that balance growth,
              security, and long-term performance.
            </p>
          </div>
          <div className="fund-wrapper button-group">
            <Link to="/contactpage" className="btn btn-primary">
              Start Investing
            </Link>
            <Link to="/gallerypage" className="btn btn-secondary">
              Explore Opportunities
            </Link>
          </div>
        </div>
        <div className="page-image">
          <img src="/fund.jpeg" alt="Investment growth" />
        </div>
      </section>
      <CTASection />
    </>
  );
}
