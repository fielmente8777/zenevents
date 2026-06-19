"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";
import { ZoomIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface SlidingGalleryProps {
  images: string[];
  aspectRatio?: string;
}

const SlidingGallery: React.FC<SlidingGalleryProps> = ({ images , aspectRatio}) => {
  const { openGallery } = useWebContext();
  return (
    <Section defaultPadding={false} className="relative" id="#gallery">
      <SwiperCarousel
        data={images}
        className="w-full demo"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        modules={[Autoplay]}
        speed={3000}
        autoplay={{ delay: 0}}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 2,
          },
        }}
        renderSlide={(src) => (
          <div className={`w-full ${aspectRatio ? aspectRatio : "aspect-4/4.5"} relative`}>
            <Image
              src={src}
              alt={src}
              className="object-cover"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        )}
      />
      <button
        onClick={() => openGallery({ images, index: 0 })}
        className="absolute z-10 bottom-0 right-0 p-2  rounded-lg gap-2 flex items-center justify-center"
      >
        <ZoomIcon />
        <span className="sr-only">Gallery</span>
      </button>
    </Section>
  );
};

export default SlidingGallery;
