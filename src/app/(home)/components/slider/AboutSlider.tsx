"use client";
import { AboutProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import AboutCard from "../cards/AboutCard";

const AboutSlider: React.FC<{ cards: AboutProps["cards"] }> = ({ cards }) => {
    cards = [...cards, ...cards];
  return (
    <div className="w-full lg:hidden">
      <SwiperCarousel
        data={cards}
        slidesPerView={1.5}
        spaceBetween={10}
        modules={[Autoplay]}
        centeredSlides={true}
        speed={2000}
        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
        loop={true}
        className="w-full"
        swiperSlideClassName="w-full"
        renderSlide={(card) => <AboutCard {...card} />}
      />
    </div>
  );
};

export default AboutSlider;
