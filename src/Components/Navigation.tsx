import { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-bar">
      {/* Centered Logo */}
      <div className="nav-logo">
        <img src="./Monexalogo.PNG" alt="logo" />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/partnership" onClick={() => setMenuOpen(false)}>PARTNERSHIP</Link>
        <Link to="/fundpartners" onClick={() => setMenuOpen(false)}>FUND PARTNER</Link>
        <Link to="/teampage" onClick={() => setMenuOpen(false)}>OUR TEAM</Link>
        <Link to="/privacypage" onClick={() => setMenuOpen(false)}>PRIVACY</Link>
      </div>
    </div>
  );
}
