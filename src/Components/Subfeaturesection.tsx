import "./Subfeaturesection.css"
import { Home, Building2, Landmark, Key } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

export default function SubFeature() {
    const SubRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if(!SubRef.current)return;
        const subText = SubRef.current.querySelectorAll(".sub-wrapper > *");
        gsap.fromTo(subText,
            {
                yPercent: 250
            },
            {
                yPercent: 0,
                ease: "circ.out",
                delay: 0.8,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: SubRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        )
    })
  return (
    <section className="sub-feature" ref={SubRef}>
      {/* Section A: Lifestyle Story */}
      <div className="sub-feature__story">
        <div className="sub-feature__text">
          <div className="sub-wrapper">
            <h2>Not Just Houses, But Homes</h2>
          </div>
          <div className="sub-wrapper">
            <p>
            Our properties are more than walls and roofs, these are crafted
            spaces where families thrive, investors gain value, and communities
            flourish.
          </p>
          </div>
          <div className="sub-wrapper">
            <Link to="/gallerypage"  className="btn btn-primary">Explore Properties</Link>
          </div>
        </div>
        <div className="sub-feature__image">
          <img
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
            alt="Modern home"
          />
        </div>
      </div>

      {/* Section B: Premium Benefits */}
      <div className="sub-feature__benefits">
        <div className="benefit-card">
          <Home size={42} />
          <h3>Modern Living</h3>
          <p>Elegant designs that blend comfort and innovation.</p>
        </div>
        <div className="benefit-card">
          <Building2 size={42} />
          <h3>Prime Locations</h3>
          <p>Properties positioned in thriving neighborhoods.</p>
        </div>
        <div className="benefit-card">
          <Landmark size={42} />
          <h3>Trusted Legacy</h3>
          <p>Built with integrity and backed by years of expertise.</p>
        </div>
        <div className="benefit-card">
          <Key size={42} />
          <h3>Smart Investment</h3>
          <p>Value-driven options for homeowners and investors.</p>
        </div>
      </div>
    </section>
  );
}
