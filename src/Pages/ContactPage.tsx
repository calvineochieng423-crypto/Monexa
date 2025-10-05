import "./ContactPage.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialSection from "../Components/Testimonial";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      const wrappers = topRef.current.querySelectorAll(".contact-wrapper > *");
      gsap.fromTo(
        wrappers,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: topRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (formRef.current) {
      const formWrappers = formRef.current.querySelectorAll(".contact-form > *");
      gsap.fromTo(
        formWrappers,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Section 1: CTA + Image */}
      <>
      <section className="contact-top-section" ref={topRef}>
        <div className="contact-content">
          <div className="contact-wrapper">
            <h1>Let’s Connect</h1>
          </div>
          <div className="contact-wrapper">
            <p>
              Whether you’re curious about features, want to partner, or simply
              say hello—we’re here to listen and help.
            </p>
          </div>
        </div>

        <div className="contact-side">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
            alt="Contact support team"
          />
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="contact-form-section" ref={formRef}>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <TestimonialSection />
      </>
    </>
  );
}
