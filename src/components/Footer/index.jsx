import Link from "next/link";
import React from "react";
import Image from "next/image";

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
      <div className="font-semibold max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:gap-28 gap-10">
        <div
          onMouseEnter={() => setCursorIsActive(true)}
          onMouseLeave={() => setCursorIsActive(false)}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain w-8 h-8 md:w-10 md:h-10"
            />
            {/* <FaMeteor className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
            <h3 className="text-xl text-[#FDEAA8] font-black cursor-pointer">
              Kometa Power GmbH
            </h3>
          </Link>
          <p className="mt-3.5">
            Subunternehmer für Glasfaserverlegung, Tiefbau und technische
            Infrastruktur – zuverlässig und präzise
          </p>
        </div>
        <div>
          <h4 className="text-lg mb-4 font-black text-[#FDEAA8]">
            Wichtige Links
          </h4>
          <ul>
            {quickLinks.map((link) => (
              <li
                key={link.text}
                className="mb-2 transition-colors duration-300 ease-in-out"
              >
                <Link
                  href={link.url}
                  className="hover:text-[#FDEAA8] transition duration-500"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-black text-[#FDEAA8] mb-4">
            Kontaktieren Sie uns
          </h4>
          <a
            href={`mailto:info@kometa-power.com`}
            className="block hover:text-[#FDEAA8] mb-2 transition duration-500"
          >
            info@kometa-power.com
          </a>
        </div>
      </div>
      <div className="mt-20 text-center px-6 text-sm text-gray-400">
        <p>Copyright &copy; 2025 Kometa. All rights reserved.</p>
        <div className="flex items-center justify-center">
          <p className="mr-0.5">Designed & Developed by</p>
          <Image src="/images/mirka.png" alt="Mirka logo" width={80} height={80} />
        </div>
        <p className="mt-2 text-[#FDEAA8]">
          Energie, Präzision und technische Power – dafür stehen wir.
        </p>
      </div>
    </footer>
  );
}
