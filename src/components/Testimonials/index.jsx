import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Andreas Becker",
    role: "Projektleiter bei NetConnect GmbH",
    message:
      "Kometa ist für uns ein zuverlässiger Partner im Bereich Tiefbau und Glasfaserverlegung. Termine werden eingehalten, die Qualität stimmt – so wünscht man sich Subunternehmer.",
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Svenja Klein",
    role: "Bauleiterin bei InfraPlan",
    message:
      "Die Zusammenarbeit mit Kometa ist professionell und effizient. Das Team ist schnell vor Ort, gut ausgestattet und kommuniziert klar. Absolut empfehlenswert.",
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Markus Schmitt",
    role: "Technischer Leiter bei FiberNow",
    message:
      "Ob Trassenbau, Dokumentation oder Montage – Kometa liefert saubere Arbeit mit hohem Verantwortungsbewusstsein. Wir arbeiten immer wieder gerne mit ihnen zusammen.",
    avatar: "/images/testimonial-3.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-20">
      <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-center mb-8">
        Was unsere Kunden sagen
      </h2>
      <p className="lg:mb-20 mb-12 text-xl text-center font-semibold">
        Lesen Sie von denen, die mit uns zusammengearbeitet haben.
      </p>
      <div className="grid gap-14 max-w-md w-full mx-auto lg:gap-14 lg:grid-cols-3 lg:max-w-full">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="">
            <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                width={50}
                height={50}
                className="rounded-full shadow-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-secondary">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-semibold">
                  {testimonial.role}
                </p>
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
