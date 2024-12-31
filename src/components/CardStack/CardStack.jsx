import React, { useEffect, useRef } from "react";
import "./CardStack.css";

const CardStack = ({ cards }) => {
  const cardRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (index > 0) {
            cardRefs.current[index - 1].classList.add("fade-out");
          }
        } else {
          entry.target.classList.remove("show");
          if (index > 0) {
            cardRefs.current[index - 1].classList.remove("fade-out");
          }
        }
      });
    }, options);

    if (cardRefs.current) {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    // Dynamically set container height
    const container = containerRef.current;
    if (container) {
      container.style.height = `${cards.length * 100}vh`; // Each card takes one viewport height
    }

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [cards]);

  return (
    <div className="projects-container" ref={containerRef} id="project">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`project-card bg-${card.id}`}
        >
          <img className="proj-img" src={card.img} alt={card.title} />
          <h2 className="title">{card.title}</h2>
          <p className="des">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
