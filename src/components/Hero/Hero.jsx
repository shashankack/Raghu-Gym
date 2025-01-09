import { useState, useEffect } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Desktop Images
import desktopImg1 from "../../assets/desktop-carousel-1.jpg";
import desktopImg2 from "../../assets/desktop-carousel-2.jpg";
import desktopImg3 from "../../assets/desktop-carousel-3.jpg";

// Mobile Images
import mobileImg1 from "../../assets/mobile-carousel-1.jpg";
import mobileImg2 from "../../assets/mobile-carousel-2.jpg";
import mobileImg3 from "../../assets/mobile-carousel-3.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile
    ? [mobileImg1, mobileImg2, mobileImg3]
    : [desktopImg1, desktopImg2, desktopImg3];

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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Carousel Image ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-content">
        <h1 className="hero-title">Reach New Heights: Expert </h1>
        <h1 className="hero-title">Boxing, Fitness, and Yoga for </h1>
        <h1 className="hero-title">Ambitious Professionals</h1>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
