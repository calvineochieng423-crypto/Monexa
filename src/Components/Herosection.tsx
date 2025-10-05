import "./Herosection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Herosection() {
  const HerosectionRef = useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);
  const SearchRef = useRef<HTMLDivElement | null>(null);

  const [location, setLocation] = useState("Los Angeles");
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(1500000);
  const [type, setType] = useState("buy");

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  useEffect(() => {
    if (!HerosectionRef.current || !ImageRef.current) return;

    const headwrapper =
      HerosectionRef.current.querySelectorAll(".head-wrapper > *");

    gsap.fromTo(
      headwrapper,
      { yPercent: 250 },
      {
        yPercent: 0,
        ease: "circ.out",
        delay: 0.3,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: HerosectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const split = new SplitText(".search-heading", { type: "words" });
    gsap.fromTo(
      split.words,
      { y: 250 },
      {
        y: 0,
        ease: "circ.out",
        duration: 1,
        scrollTrigger: {
          trigger: HerosectionRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ImageRef.current,
      { scale: 1 },
      {
        scale: 1.45,
        ease: "circ.out",
        duration: 1,
        scrollTrigger: {
          trigger: ImageRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    if (SearchRef.current) {
      gsap.fromTo(
        SearchRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: SearchRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Searching for ${type} in ${location} between ${formatCurrency(
        minPrice
      )} - ${formatCurrency(maxPrice)}`
    );
  };

  return (
    <>
      <div className="hero-section" ref={HerosectionRef}>
        <div className="hero-wrapper">
          <div className="head-wrapper">
            <h1>Affordable homeownership</h1>
            <br />
            <h1>opportunity for all.</h1>
          </div>

          <div className="head-wrapper">
            <p>
              From cozy apartments to luxury houses, we connect you with the
              perfect property.
            </p>
          </div>

          <div className="button-group">
            <div className="head-wrapper">
              <Link to="/gallerypage" className="btn btn-primary">
                Browse Homes
              </Link>
            </div>
            <div className="head-wrapper">
              <Link to="/contactpage" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="image-wrapper" ref={ImageRef}>
          <img className="home" src="./home.jpeg" alt="Property" />
        </div>
      </div>

      {/* Search Section */}
      <div className="search-container" ref={SearchRef}>
        <div className="head-wrapper">
          <h2 className="search-heading">
            Your Perfect Home, Just a Search Away
          </h2>
        </div>

        <form className="search-div" onSubmit={handleSearch}>
          <select
            className="search-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Los Angeles">Los Angeles</option>
            <option value="Miami">Miami</option>
            <option value="New York">New York</option>
            <option value="Dallas">Dallas</option>
            <option value="Seattle">Seattle</option>
          </select>

          <select
            className="search-input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>

          <input
            type="number"
            className="search-input"
            placeholder="Min Price ($)"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="number"
            className="search-input"
            placeholder="Max Price ($)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
