import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.set(footerRef.current, { yPercent: -50 });

    gsap.to(footerRef.current, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: "+=75%",
        scrub: true,
        onEnter: () => ScrollTrigger.refresh(),
        onEnterBack: () => ScrollTrigger.refresh(),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="conclusion" ref={triggerRef}></section>
      <footer className="footer">
        <section className="footer-container" ref={footerRef}>
          <div className="footer-logo">THE WORKS</div>
          <nav className="footer-row">
            <ul>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
              <HashLink smooth to="/#about">
                About
              </HashLink>
              <HashLink smooth to="#daily-classes">
                Daily Classes
              </HashLink>
              <HashLink smooth to="/#services">
                Workshops
              </HashLink>
              <a href="#know-us">Know Us</a>
              <a href="#store">Trainers</a>
              <a href="#store">Store</a>
              <a href="#contact-us">Contact Us</a>
            </ul>
          </nav>
          <div className="footer-row">
            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <p className="copyrights">
            &copy; 2025 WORKSHOP. All rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
