"use client";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Container from "@/components/Container";
import About from "@/components/About";
import Benefits from "@/components/Benefits/Benefits";
import Blog from "@/components/Blog";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time / 3)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  return (
    <main>
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Header setCursorIsActive={setCursorIsActive} />
      <Intro setCursorIsActive={setCursorIsActive} />
      <Container>
        <About />
        <Benefits />
        <Stats setCursorIsActive={setCursorIsActive} />
        <Blog setCursorIsActive={setCursorIsActive} />
        <FAQ />
        <Contact />
      </Container>
      <Footer setCursorIsActive={setCursorIsActive} />
    </main>
  );
}
