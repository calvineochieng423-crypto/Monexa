import CTASection from "../Components/CTAsection";
import "./Pages.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");

    sections.forEach((section) => {
      const wrappers = section.querySelectorAll(".fund-wrapper > *");
      if (!wrappers.length) return;

      gsap.fromTo(
        wrappers,
        { yPercent: 300, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.9,
          delay: 0.15,
          stagger: 0.35,
          ease: "circ.inout",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section className="page-section">
        <div className="page-content">
          <div className="fund-wrapper">
            <h1>Meet the People Behind the Vision</h1>
          </div>
          <div className="fund-wrapper">
            <p>
              Our strength lies in our people. With decades of combined
              experience across industries, our team brings unmatched expertise
              and creativity to every challenge.
            </p>
          </div>
          <div className="fund-wrapper">
            <div className="button-group">
              <Link to="/" className="btn btn-primary">
                Join Our Team
              </Link>
              <Link to="/contactpage" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="page-image">
          <img
            loading="lazy"
            alt="Company team collaboration"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
          />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="page-section">
        <div className="page-content">
          <div className="fund-wrapper">
            <h2>Leadership That Inspires</h2>
          </div>
          <div className="fund-wrapper">
            <p>
              Guided by visionary leadership, we believe in empowering our
              people and clients alike. Our leaders foster a culture of trust,
              accountability, and innovation.
            </p>
          </div>
        </div>

        <div className="page-image">
          <img src="./Test.jpeg" alt="Testing image" />
        </div>
      </section>

      {/* Culture Section */}
      <section className="page-section">
        <div className="page-content">
          <div className="fund-wrapper">
            <h2>A Culture of Collaboration</h2>
          </div>
          <div className="fund-wrapper">
            <p>
              Our workplace thrives on openness and inclusivity. Every voice
              matters, and every idea contributes to our shared success.
            </p>
          </div>
        </div>

        <div className="page-image">
          <img
            loading="lazy"
            alt="Team culture"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
