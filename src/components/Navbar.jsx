// --- src/components/Navbar.jsx ---
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <div className="navbar-logo">
          <span>✦</span> FlowWarm
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="btn btn-primary navbar-cta">
          Get a quote
        </a>
        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
