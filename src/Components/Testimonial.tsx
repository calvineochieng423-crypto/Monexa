import { useRef, useEffect } from "react";
import "./Testimonial.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const TestimonialSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!TestimonialSectionRef.current) return;

    gsap.fromTo(
      TestimonialSectionRef.current.querySelectorAll(".t-wrapper > *"),
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "circ.out",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: TestimonialSectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card =
        scrollRef.current.querySelector<HTMLElement>(".testimonial-card");
      if (!card) return;

      const style = getComputedStyle(card);
      const gap = parseInt(style.marginRight || "0");
      const cardWidth = card.offsetWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      text: "The process was smooth, and I found my dream home within weeks. Professional and transparent all the way.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Michael Lee",
      role: "Real Estate Investor",
      text: "As an investor, I needed reliable property insights. This team provided excellent support and market knowledge.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "David Kim",
      role: "Family Buyer",
      text: "Moving with my family was stress-free thanks to their guidance. Highly recommend their services.",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Emily Carter",
      role: "Home Seller",
      text: "I sold my house quickly and at a great price. The team handled everything professionally.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "James Wilson",
      role: "Landlord",
      text: "Their property management services have been excellent. I don’t worry about a thing.",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "Tenant",
      text: "I relocated for work and they made the rental process effortless. Truly helpful staff.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Robert Green",
      role: "Investor",
      text: "I was impressed by their deep market knowledge. I found the perfect investment property.",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Linda Parker",
      role: "First-Time Buyer",
      text: "They guided me through the mortgage process step by step. I felt confident throughout.",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "Daniel Harris",
      role: "Home Seller",
      text: "Communication was excellent, and I always felt well-informed. A pleasure to work with.",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      name: "Olivia Brown",
      role: "Repeat Client",
      text: "From start to finish, the experience was seamless. I’ll definitely use their services again.",
      img: "https://randomuser.me/api/portraits/women/90.jpg",
    },
  ];

  return (
    <section className="testimonial-section" ref={TestimonialSectionRef}>
      <div className="testimonial-wrapper">
        <div className="t-wrapper">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="t-wrapper">
          <p className="section-subtitle">
            Trusted by homeowners, investors, and families across the city.
            Here’s what they have to say about working with us.
          </p>
        </div>

        <div className="carousel-container">
          <div className="testimonial-scroll" ref={scrollRef}>
            {testimonials.map((t, index) => (
              <div
                className={`testimonial-card ${
                  index % 2 === 0 ? "light" : "dark"
                }`}
                key={index}
              >
                <img src={t.img} alt={t.name} className="client-img" />
                <p className="testimonial-text">“{t.text}”</p>
                <h4 className="client-name">{t.name}</h4>
                <span className="client-role">{t.role}</span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            &#10094;
          </button>
          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
