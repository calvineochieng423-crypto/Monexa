import "./Pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../Components/CTAsection";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPage() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pageWrappers = contentRef.current?.querySelectorAll(".page-wrapper > *");
    if (pageWrappers && contentRef.current) {
      gsap.fromTo(
        pageWrappers,
        { yPercent: 300, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.4,
          stagger: 0.5,
          ease: "circ.inout",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 65%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section className="page-section">
        <div className="page-content" ref={contentRef}>
          <div className="page-wrapper">
            <h1>Your Trust, Our Commitment</h1>
          </div>
          <div className="page-wrapper">
            <p>
              Safeguarding your information is at the heart of everything we do. We
              maintain strict confidentiality standards and modern security
              protocols to keep your data protected at every step.
            </p>
          </div>
          <div className="page-wrapper button-group">
            <Link to="/teampage"  className="btn btn-primary">Read Our Policy</Link>
            <Link to="/contactpage" className="btn btn-secondary">Contact Support</Link>
          </div>
        </div>

        <div className="page-image">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
            alt="Data security and privacy"
            loading="lazy"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
