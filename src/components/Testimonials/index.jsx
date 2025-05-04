import React from "react";
import { FaHardHat, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";

const testimonials = [
  {
    name: "Projektleitung (Tiefbau)",
    message:
      "Reibungsloser Ablauf, saubere Dokumentation und pünktliche Umsetzung – genau das, was wir brauchen",
    icon: <FaProjectDiagram className="w-6 h-6 text-[#FDEAA8]" />,
  },
  {
    name: "Bauleitung (Glasfaser)",
    message:
      "Gute Kommunikation, ausgerüstete Teams und hohe Eigenverantwortung. Sehr professionell",
    icon: <FaHardHat className="w-6 h-6 text-[#FDEAA8]" />,
  },
  {
    name: "Montagekoordination (Netzbetreiber)",
    message:
      "Kometa liefert zuverlässig – egal ob beim Verlegen, Einblasen oder in der Nacharbeit",
    icon: <FaNetworkWired className="w-6 h-6 text-[#FDEAA8]" />,
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-20 px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-center mb-8">
        Bewertungen aus der Branche
      </h2>
      <p className="lg:mb-20 mb-12 text-xl text-center font-semibold">
        So wird unsere Arbeit im Bereich Tiefbau und Glasfaser beschrieben
      </p>
      <div className="grid gap-14 max-w-md w-full mx-auto lg:gap-14 lg:grid-cols-3 lg:max-w-full">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="">
            <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
              {testimonial.icon}
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-secondary">
                  {testimonial.name}
                </h3>
              </div>
            </div>
            <p className="text-center lg:text-left">
              &quot;{testimonial.message}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
