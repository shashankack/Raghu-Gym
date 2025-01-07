import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import card1 from "../../assets/BJJ.webp";
import card2 from "../../assets/BOXING.webp";
import card3 from "../../assets/FITNESS.webp";
import card4 from "../../assets/MMA.webp";
import card5 from "../../assets/MUAY_THAI.webp";
import card6 from "../../assets/RECOVERY.webp";

import card1Gradient from "../../assets/BJJ-gradient.webp";
import card2Gradient from "../../assets/BOXING-gradient.webp";
import card3Gradient from "../../assets/FITNESS-gradient.webp";
import card4Gradient from "../../assets/MMA-gradient.webp";
import card5Gradient from "../../assets/MUAY_THAI-gradient.webp";
import card6Gradient from "../../assets/RECOVERY-gradient.webp";

import iceBath from '../../assets/ice-bath.jpg';
import boxing from '../../assets/boxing.jpg';

import aboutImg1 from "../../assets/gloves.jpg";

const About = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);
  let xPercent = -50;
  let direction = -1;
  const imageRefs = useRef([]);
  const navigate = useNavigate();

  const eventsData = [
    {
      id: 1,
      title: "Boxing",
      img: boxing,
      description:
        "Get in shape and learn the fundamentals with our experienced coaches.",
      redirect: "/boxing",
    },
    {
      id: 2,
      title: "Yoga",
      img: "https://placehold.co/500x400",
      description:
        "Improve your flexibility and mental health with our yoga classes.",
      redirect: "/yoga",
    },
    {
      id: 3,
      title: "Ice Bath",
      img: iceBath,
      description:
        "Recover faster and reduce inflammation with our ice bath therapy.",
      redirect: "/ice-bath",
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "BJJ",
      img: card1,
      gradient: card1Gradient,
      description:
        "Learn the art of Brazilian Jiu-Jitsu and improve your self-defense skills with our expert trainers.",
    },
    {
      id: 2,
      title: "Boxing",
      img: card2,
      gradient: card2Gradient,
      description:
        "Get in shape and learn the fundamentals of boxing with our experienced coaches.",
    },
    {
      id: 3,
      title: "Fitness",
      img: card3,
      gradient: card3Gradient,
      description:
        "Reach your fitness goals with our expert trainers and state-of-the-art equipment.",
    },
    {
      id: 4,
      title: "MMA",
      img: card4,
      gradient: card4Gradient,
      description:
        "Train in mixed martial arts and learn a combination of striking and grappling techniques.",
    },
    {
      id: 5,
      title: "Muay Thai",
      img: card5,
      gradient: card5Gradient,
      description:
        "Master the art of Muay Thai and improve your striking and clinching skills.",
    },
    {
      id: 6,
      title: "Recovery",
      img: card6,
      gradient: card6Gradient,
      description:
        "Recover from injuries and improve your mobility with our specialized recovery programs.",
    },
  ];

  const handleRedirect = (redirectPath) => {
    navigate(redirectPath);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a seamless scrolling effect with ScrollTrigger
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement, // Trigger scroll from the root document
        start: "top top", // When the top of the document hits the top of the viewport
        end: "bottom top", // When the bottom of the document hits the top of the viewport
        scrub: true, // Link animation to scroll progress
        onUpdate: (e) => (direction = e.direction), // Track scroll direction
      },
      xPercent: -100, // Move the slider to -100% over the scroll duration
      ease: "none", // Keep the motion linear for a seamless effect
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
      <section className="about-section-one" id="about">
        <div className="about-one-container">
          <div className="about-one-img">
            <img src={aboutImg1} alt="Custom Fitness" />
          </div>
          <div className="about-one-text">
            <p className="about-one-tagline">EVIDENCE-BASED FITNESS COACHING</p>
            <h1 className="about-one-title">CUSTOM FITNESS</h1>
            <h1 className="about-one-title"> & NUTRITION PLANS</h1>
            <p className="about-one-description">
              Our health and fitness training services cater to individuals of
              all fitness levels and goals. Whether you are looking to lose
              weight, build muscle, improve stamina, or simply maintain a
              healthy lifestyle, our experienced trainers are dedicated to
              guiding you.
            </p>
            <button className="about-one-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      <section className="about-section-two" id="services">
        <div className="about-two-container">
          <div className="about-two-text">
            <p className="about-two-tagline">PERSONALIZED WORKOUT PLANS</p>
            <h1 className="about-two-title">INNOVATIVE TRAINING</h1>
            <h1 className="about-two-title">METHODS FOR WOMEN</h1>
            <p className="about-two-description">
              We provide personalized workout plans based on your unique needs.
              In addition to tailored exercise routines, we offer expert
              nutritional guidance to ensure that you're fueling your body with
              the right foods and vitamins for optimal results.
            </p>
            <button className="about-two-btn">OUR SERVICES</button>
          </div>
        </div>
        <div className="slider-container">
          <div ref={sliderRef} className="slider">
            <p ref={firstTextRef}>Fitness Redefined Fitness Redefined </p>
            <p ref={secondTextRef}>Fitness Redefined Fitness Redefined</p>
          </div>
        </div>
      </section>
      {/* <section className="about-section-three" id="daily-classes">
        <div className="grid-container">
          {cardData.map((card) => (
            <div
              className="grid-item card"
              key={card.id}
              onMouseEnter={() => setHoveredImage(card.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <h2 className="card-title">{card.title}</h2>
              <img
                src={hoveredImage === card.id ? card.gradient : card.img}
                alt={card.title}
              />
              <div className="card-content">
                <p className="card-description">{card.description}</p>
                <button className="card-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="about-section-three" id="daily-classes">
        <div className="services-container">
          {eventsData.map((event, index) => (
            <div className="card" key={event.id}>
              <div
                className="card-image"
                ref={(el) => (imageRefs.current[index] = el)}
                onClick={() => handleRedirect(event.redirect)} // Redirect on image click
              >
                <img src={event.img} alt={event.title} />
              </div>
              <div className="card-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button
                  className="redirect-button"
                  onClick={() => handleRedirect(event.redirect)} // Redirect on button click
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
