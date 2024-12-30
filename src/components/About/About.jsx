import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import gsap from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

import aboutImg1 from "../../assets/about-img-one.jpg";

const About = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const cardData = [
    {
      id: 1,
      title: "Brazilian Jiu-Jitsu",
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

  const movementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const movementElement = movementRef.current;

    // Duplicate content for seamless scrolling
    const stripContent = movementElement.innerHTML;
    movementElement.innerHTML += stripContent;

    // GSAP Infinite Animation
    gsap.to(movementElement, {
      x: "-50%", // Move the strip left by 50%
      ease: "none", // Maintain a constant speed
      duration: 70, // Adjust duration for slower movement
      repeat: -1, // Infinite looping
    });
  }, []);

  return (
    <>
      <section className="about-section-one" id="about">
        <div className="about-container">
          <img src={aboutImg1} className="about-img" alt="Custom Fitness" />
          <div className="about-text">
            <p className="about-tagline">EVIDENCE-BASED FITNESS COACHING</p>
            <h1 className="about-title">CUSTOM FITNESS</h1>
            <h1 className="about-title"> & NUTRITION PLANS</h1>
            <p className="about-description">
              Our health and fitness training services cater to individuals of
              all fitness levels and goals. Whether you are looking to lose
              weight, build muscle, improve stamina, or simply maintain a
              healthy lifestyle, our experienced trainers are dedicated to
              guiding you.
            </p>
            <button className="about-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      <section className="about-section-two">
        <div className="about-two-container">
          <div className="about-two-text">
            <p className="about-two-tagline">PERSONALIZED WORKOUT PLANS</p>
            <h1 className="about-two-title">INNOVATIVE TRAINING</h1>
            <h1 className="about-two-title">METHODS FOR WOMEN</h1>
            <p className="about-two-description">
              We provide personalized workout plans based on your unique needs.
              In addition to tailored exercise routines, we offer expert
              nutritional guidance to ensure that you’re fueling your body with
              the right foods and vitamins for optimal results.
            </p>
            <button className="about-two-btn">OUR SERVICES</button>
          </div>
        </div>
        <div className="moving-strip" ref={movementRef}>
          <span>MOVEMENT CORE &nbsp;</span>
          <span>MOVEMENT CORE &nbsp;</span>
          <span>MOVEMENT CORE &nbsp;</span>
        </div>
      </section>
      <section className="about-section-three">
        <div className="grid-container">
          {cardData.map((card) => (
            <div
              className="grid-item card"
              key={card.id}
              onMouseEnter={() => setHoveredImage(card.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <h2>{card.title}</h2>
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
      </section>
    </>
  );
};

export default About;
