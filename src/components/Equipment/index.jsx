"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const equipment = [
  {
    name: "LKW MAN",
    quantity: "4 Einheiten",
    image: "/images/equipment/man.png",
  },
  {
    name: "Kleinbusse und Dienstfahrzeuge",
    quantity: "14 Einheiten",
    image: "/images/equipment/bus.png",
  },
  {
    name: "Minibagger",
    quantity: "5 Einheiten",
    image: "/images/equipment/bagger.png",
  },
  {
    name: "Radlader",
    quantity: "4 Einheiten",
    image: "/images/equipment/radlader.png",
  },
  {
    name: "Kipper 3.5 t",
    quantity: "9 Fahrzeuge",
    image: "/images/equipment/kipper.png",
  },
  {
    name: "LKW DAF 40 t",
    quantity: "3 Einheiten",
    image: "/images/equipment/daf.png",
  }
];

export default function Index() {
  return (
    <section className="w-full lg:py-30 py-20 pb-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="rounded-lg text-[#FDEAA8] text-4xl lg:text-5xl font-extrabold font-heading mb-12 text-center lg:text-left">
          Technische Ausstattung
        </h1>

        <p className="text-lg md:text-xl text-center md:text-left leading-relaxed mb-16">
          Unser Unternehmen verfügt über einen modernen Fuhr- und Maschinenpark,
          der es uns ermöglicht, Projekte effizient und zuverlässig umzusetzen.
          Von schweren LKWs über spezialisierte Baumaschinen bis hin zu
          handwerklichem Equipment – wir stellen sicher, dass alle Arbeiten
          termingerecht und mit höchster Qualität durchgeführt werden können.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={15000}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
          }}
        >
          {equipment.map((item, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div className="h-96 rounded-2xl w-full overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#0f0f0f] flex flex-col">
                <div className="h-72 w-full bg-[#202020]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    style={{
                      filter:
                        "sepia(30%) brightness(0.9) contrast(1.15) saturate(1.05)",
                    }}
                  />
                </div>

                <div className="flex flex-col justify-center flex-1 px-4 text-center">
                  <p className="text-neutral-100 font-black text-sm md:text-2xl">
                    {item.name}
                  </p>
                  <p className="text-neutral-400 text-xs md:text-sm mt-2">
                    {item.quantity}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
