import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./DailyEvents.css";

import iceBathBw from '../../assets/ice-bath-bw.jpg';
import iceBath from '../../assets/ice-bath.jpg';
import boxingBw from '../../assets/carousel-1.png';
import boxing from '../../assets/boxing.jpg';

const eventsData = [
  {
    id: 1,
    title: "Boxing",
    img: boxing,
    description:
      "Get in shape and learn the fundamentals of boxing with our experienced coaches.",
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

const DailyEvents = () => {
  const imageRefs = useRef([]);
  const navigate = useNavigate();

  const handleRedirect = (redirectPath) => {
    navigate(redirectPath);
  };

  return (
    <section className="daily-events-section">
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
  );
};

export default DailyEvents;
