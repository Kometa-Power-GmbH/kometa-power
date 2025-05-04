"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        {/* Левая колонка — заголовок и текст */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-[#FDEAA8] uppercase">
            Kontaktieren Sie uns
          </h2>
          <p className="my-6 text-xl font-semibold">
            Sie haben Fragen oder ein Projekt? Schreiben Sie uns direkt über das
            Formular. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaPhone color="#FDEAA8" className="text-[#202020] w-5 h-5" />
            +49 15679 624045
          </div>
          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaEnvelope color="#FDEAA8" className="text-[#202020] w-5 h-5" />
            info@flex-sharing.de
          </div>
          <div className="flex items-center gap-3 text-xl font-medium">
            <FaMapMarkerAlt color="#FDEAA8" className="text-[#202020] w-5 h-5" />
            Brunsbütteler Damm 112, 13581, Berlin
          </div>
        </div>

        {/* Правая колонка — форма */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formular wurde abgeschickt (Logik noch nicht eingebaut)");
          }}
          className="w-full lg:w-1/2 grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Ihr Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 shadow-sm text-base font-medium rounded-full border-2 border-[#b7ab98] hover:bg-[#FDEAA8] hover:text-black transition-colors duration-1000"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
