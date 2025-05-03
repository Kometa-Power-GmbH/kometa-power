import Link from "next/link";
import React from "react";
import { FaMeteor } from "react-icons/fa";

const quickLinks = [
  {
    text: "Impressum",
    url: "/impressum",
  },
  {
    text: "Datenschutz",
    url: "/datenschutz",
  },
  {
    text: "AGB",
    url: "/agb",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <footer className="bg-[#151515] py-10">
      <div className="font-semibold max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-28">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaMeteor className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
            <h3 className="text-xl text-[#ec4e39] font-black cursor-pointer">
              Kometa
            </h3>
          </Link>
          <p className="mt-3.5">
            Subunternehmer für Glasfaserverlegung, Tiefbau und technische
            Infrastruktur – zuverlässig und präzise
          </p>
        </div>
        <div>
          <h4 className="text-lg mb-4 font-black text-[#ec4e39]">Wichtige Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.text} className="mb-2 transition-colors duration-300 ease-in-out">
                <Link href={link.url} className="hover:text-[#ec4e39]">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-black text-[#ec4e39] mb-4">Kontaktieren Sie uns</h4>
          <a
            href={`mailto:kometa@gmail.com`}
            className="block hover:text-[#ec4e39] mb-2"
          >
            Email: kometa@gmail.com
          </a>
          <a
            href={`tel:017234567459`}
            className="block hover:text-[#ec4e39]"
          >
            Phone: 017234567459
          </a>
        </div>
      </div>
      <div className="mt-8 md:text-center px-6">
        <p>
          Copyright &copy; 2025 Kometa.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
