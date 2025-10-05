import "./FundpartnerPage.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../Components/CTAsection";
import { Link } from "react-router-dom"; // <-- Added for link buttons
import Logo from "../Components/Logo";

gsap.registerPlugin(ScrollTrigger);

export default function Partnership() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fundWrappers =
      contentRef.current?.querySelectorAll(".fund-wrapper > *");
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
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="page-section" ref={contentRef}>
        <div className="page-content">
          <div className="fund-wrapper">
            <h1>Grow Stronger with Trusted Partnerships</h1>
          </div>
          <div className="fund-wrapper">
            <p>
              We believe in building long-term collaborations that bring value
              to both sides. By combining expertise, resources, and shared
              goals, we create opportunities that scale sustainably.
            </p>
          </div>
          <div className="fund-wrapper button-group">
            <Link to="/contactpage" className="btn btn-primary">
              Become a Partner
            </Link>
            <Link to="/contactpage" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="page-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Business partnership handshake"
          />
        </div>
      </section>
      <Logo />
      <CTASection />
    </>
  );
}
