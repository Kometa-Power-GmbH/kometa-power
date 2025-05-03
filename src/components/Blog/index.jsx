"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.css";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/images/blog/1.jpg",
  "/images/blog/2.jpg",
  "/images/blog/3.jpg",
  "/images/blog/4.jpg",
];

export default function Index({ setCursorIsActive }) {
  return (
    <div id="blog" className="w-full p-0">
      <div className="lg:py-20 py-10 flex flex-col items-center justify-center">
        <div>
          <h1
            onMouseEnter={() => setCursorIsActive(true)}
            onMouseLeave={() => setCursorIsActive(false)}
            className="text-4xl lg:text-5xl font-extrabold font-heading lg:mb-13 mb-10"
          >
            Aus unserem Alltag
          </h1>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          className="w-full mb-9"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={src}
                  alt="Image"
                  fill
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%) brightness(0.7)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <a
          className="inline-flex items-center text-xl gap-2 px-6 py-3 border border-[#b7ab98] text-[#b7ab98] font-semibold rounded-full hover:bg-[#ec4e39] hover:border-[#ec4e39] hover:text-white transition"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setCursorIsActive(true)}
          onMouseLeave={() => setCursorIsActive(false)}
        >
          <FaInstagram className="text-xl" />
          Folgt uns auf Instagram
        </a>
      </div>
    </div>
  );
}