import React, { useState, useEffect } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`overlay ${isMenuOpen ? "visible" : ""}`} onClick={toggleMenu}></div>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-logo">
          <HashLink smooth to="#" onClick={() => setIsMenuOpen(false)}>
            WORKSHOP
          </HashLink>
        </div>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`navbar ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <HashLink smooth to="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
