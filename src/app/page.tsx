"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Container from "@/components/Container";
import About from "@/components/About";
import Benefits from "@/components/Benefits/Benefits";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  
  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 300);

    function raf(time: number) {
      lenis.raf(time / 3);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Header setCursorIsActive={setCursorIsActive} />
      <Intro setCursorIsActive={setCursorIsActive} />
      <Container>
        <About />
        <Benefits />
        <Stats setCursorIsActive={setCursorIsActive} />
        <Blog setCursorIsActive={setCursorIsActive} />
        <Testimonials />
        <FAQ />
        <Contact />
      </Container>
      <Footer setCursorIsActive={setCursorIsActive} />
    </main>
  );
}
