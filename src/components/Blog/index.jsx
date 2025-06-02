"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.css";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/images/blog/1.jpeg",
  "/images/blog/2.jpeg",
  "/images/blog/3.jpeg",
  "/images/blog/4.jpeg",
  "/images/blog/5.jpeg",
  "/images/blog/6.jpeg"
];

export default function Index({ setCursorIsActive }) {
  return (
    <div id="blog" className="w-full p-0">
      <div className="lg:py-20 py-20 flex flex-col items-center text-center justify-center">
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
          className="w-full mb-9 rounded-2xl"
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
                    filter: "brightness(0.7)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <a
          className="inline-flex items-center text-xl gap-2 px-6 py-3 border-2 font-semibold rounded-full hover:bg-[#FDEAA8] hover:border-[#FDEAA8] hover:text-black transition duration-1000"
          href="https://www.instagram.com/kometapower.gmbh"
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
