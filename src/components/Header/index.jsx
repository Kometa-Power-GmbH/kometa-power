"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { FaMeteor } from "react-icons/fa";
import Container from "@/components/Container";

const menuItems = [
  {
    text: "Über uns",
    url: "#about",
  },
  {
    text: "Leistungen",
    url: "#benefits",
  },
  {
    text: "Galerie",
    url: "#blog",
  },
  {
    text: "FAQ",
    url: "#faq",
  },
];

export default function Index({ setCursorIsActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lg:bg-transparent bg-[#0A0A0A] fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onMouseEnter={() => setCursorIsActive(true)}
            onMouseLeave={() => setCursorIsActive(false)}
          >
            <FaMeteor className="w-7 h-7" />
            <h2 className="manrope text-2xl text-[#FDEAA8] font-bold cursor-pointer">
              Kometa
            </h2>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold text-lg">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="hover:text-[#FDEAA8] transition-colors duration-300 ease-in-out"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            {/* 
            <li>
              <Link
                href="#cta"
                className="text-[#0f0f0f] bg-[#ec4e39] px-8 py-3 rounded-full transition-colors duration-300 ease-in-out"
                onMouseEnter={() => setCursorIsActive(true)}
                onMouseLeave={() => setCursorIsActive(false)}
              >
                Kontakt
              </Link>
            </li>
            */}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#0A0A0A] focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)] transform"
        enterFrom="opacity-0 translate-y-6 scale-98"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition-all duration-500 ease-[cubic-bezier(0.55, 0, 0.1, 1)] transform"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-6 scale-98"
      >
        <div id="mobile-menu" className="md:hidden bg-[#0A0A0A] shadow-lg">
          <ul className="flex flex-col justify-center text-2xl font-semibold items-center space-y-4 pt-10 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="block" onClick={toggleMenu}>
                  {item.text}
                </Link>
              </li>
            ))}
            {/* 
            <li>
              <Link
                href="#cta"
                className="text-[#0f0f0f] bg-[#ec4e39] hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                onClick={toggleMenu}
              >
                Kontakt
              </Link>
            </li>
            */}
          </ul>
        </div>
      </Transition>
    </header>
  );
}
