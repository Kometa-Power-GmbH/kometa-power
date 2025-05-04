import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Index({ setCursorIsActive }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div
        style={isLargeScreen ? { y, willChange: "transform" } : {}}
        className="relative h-full w-full"
      >
        {/* 
        <video
          src="/videos/intro.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/30 pointer-events-none" />
        */}
        <Image
          src="/images/background.jpg"
          fill
          alt="image"
          style={{
            objectFit: "cover",
            filter: "grayscale(100%) brightness(0.3)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/10 pointer-events-none" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.div
          style={{ opacity: opacity }}
          className="flex flex-col justify-center items-center mt-20 md:mt-32"
        >
          <h2 className="text-[1.25rem] md:text-3xl font-extrabold uppercase">
            Kometa steht für Energie, Präzision und technische Power
          </h2>
          <h2 className="text-[1.375rem] text-[#FDEAA8] md:text-5xl font-extrabold mt-3 uppercase">
            Bereit für jedes Projekt
          </h2>

          <div className="flex flex-col justify-center items-center gap-6 mt-10">
            <a
              href="#contact"
              className="px-6 py-3 border-2 font-semibold rounded-full hover:bg-[#FDEAA8] hover:border-[#FDEAA8] hover:text-black transition duration-1000"
            >
              Kontaktieren Sie uns
            </a>
            <a
              href="https://wa.me/4917670700689"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3"
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
            >
              <FaWhatsapp size={70} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
