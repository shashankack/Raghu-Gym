import React, { useState, useEffect } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll event listener for hiding/showing the header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollPosition(currentScrollPosition);
      setIsScrolled(currentScrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown state for mobile
  const toggleDropdown = (e) => {
    e.preventDefault();
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <>
      <div
        className={`overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={toggleMenu}
      ></div>
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
          showHeader ? "visible" : "hidden"
        }`}
      >
        <div className="header-logo">
          <HashLink smooth to="#" onClick={() => setIsMenuOpen(false)}>
            The Works
          </HashLink>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`navbar ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>
                About
              </HashLink>
            </li>
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={
                isMobile ? undefined : () => setIsDropdownOpen(true)
              }
              onMouseLeave={
                isMobile ? undefined : () => setIsDropdownOpen(false)
              }
            >
              <div className="dropdown-split">
                <HashLink
                  smooth
                  to="/daily-events"
                  className="dropdown-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Daily Classes
                </HashLink>
                <button
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                >
                  <IoIosArrowForward
                    className={`arrow-icon ${isDropdownOpen ? "rotated" : ""}`}
                  />
                </button>
              </div>
              <ul
                className={`dropdown-menu ${
                  isDropdownOpen || !isMobile ? "visible" : ""
                }`}
              >
                <li>
                  <HashLink
                    smooth
                    to="/boxing"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Boxing
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/yoga"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Yoga
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/ice-bath"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ice Bath
                  </HashLink>
                </li>
              </ul>
            </li>
            <li>
              <HashLink
                smooth
                to="/#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Workshops
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Trainers
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/store"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
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
