import React, { useState, useEffect } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown state
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default link behavior
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
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-logo">
          <HashLink smooth to="#" onClick={() => setIsMenuOpen(false)}>
            WORKSHOP
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
              <HashLink smooth to="#" onClick={() => setIsMenuOpen(false)}>
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
              onClick={isMobile ? toggleDropdown : undefined}
              onMouseEnter={isMobile ? undefined : () => setIsDropdownOpen(true)}
              onMouseLeave={isMobile ? undefined : () => setIsDropdownOpen(false)}
            >
              <HashLink
                smooth
                to="/#daily-events"
                onClick={isMobile ? toggleDropdown : undefined}
              >
                Daily Events <IoIosArrowForward className="arrow-icon" />
              </HashLink>
              <ul className={`dropdown-menu ${isMobile ? "mobile-visible" : ""}`}>
                <li>
                  <HashLink
                    smooth
                    to="/#boxing"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Boxing
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#yoga"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Yoga
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#ice-bath"
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
                Know Us
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
