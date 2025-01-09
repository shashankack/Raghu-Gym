import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import carouselImg1 from "../../assets/carousel-1.jpg";
import carouselImg2 from "../../assets/carousel-2.jpg";
import carouselImg3 from "../../assets/carousel-3.jpg";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2200 }}
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
        {/* <h1 className="hero-title">Martial Arts.</h1>
        <h1 className="hero-title">From Raghu.</h1>
        <h1 className="hero-title">With Love.</h1> */}
        <h1 className="hero-title">Reach New Heights: Expert </h1>
        <h1 className="hero-title">Boxing, Fitness, and Yoga for </h1>
        <h1 className="hero-title">Ambitious Professionals</h1>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
