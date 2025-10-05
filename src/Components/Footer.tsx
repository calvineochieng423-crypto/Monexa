import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Company Name */}
        <div className="footer-logo">
          Mon<span className="highlight">exa</span>
        </div>

        {/* Quick Links */}
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/gallerypage">Properties</Link>
          <Link to="/teampage">About Us</Link>
          <Link to="/contactpage">Contact Us</Link>
        </nav>

        {/* Social Media */}
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Monexa. All rights reserved.
      </div>
    </footer>
  );
}
