import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import carouselImg1 from "../../assets/carousel-1.webp";
import carouselImg2 from "../../assets/carousel-2.webp";
import carouselImg3 from "../../assets/carousel-3.webp";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        loop={true}
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <SwiperSlide>
          <img src={carouselImg1} alt="Image 1" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg2} alt="Image 2" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg3} alt="Image 3" className="carousel-image" />
        </SwiperSlide>
      </Swiper>
      <div className="hero-content">
        <h1 className="hero-title">Fitness + Health</h1>
        <h1 className="hero-title">Coaching For Busy</h1>
        <h1 className="hero-title">Professionals</h1>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
