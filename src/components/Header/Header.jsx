import React, { useState, useEffect } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
        <HashLink smooth to="#">
          RAGHU
        </HashLink>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <HashLink smooth to="#">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact Us
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
