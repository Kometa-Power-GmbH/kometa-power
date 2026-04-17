"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Container from "@/components/Container";
import About from "@/components/About";
import Equipment from "@/components/Equipment";
import Benefits from "@/components/Benefits/Benefits";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
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

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Intro />
      <Container>
        <About />
        <Benefits />
        <Stats />
        <Blog />
        <Testimonials />
        <Equipment />
        <FAQ />
        <Contact />
      </Container>
      <Footer />
    </main>
  );
}
