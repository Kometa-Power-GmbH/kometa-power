"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

export const faqs = [
  {
    question: "Ist Kometa ein zuverlässiger Subunternehmer?",
    answer:
      "Absolut. Wir arbeiten termintreu, qualitätsbewusst und nach höchsten Standards in Sicherheit und Ausführung – ob Tiefbau, Glasfaserverlegung oder Dokumentation.",
  },
  {
    question: "In welchen Regionen ist Kometa tätig?",
    answer:
      "Wir sind deutschlandweit im Einsatz – flexibel und mobil. Unsere Teams sind kurzfristig verfügbar und einsatzbereit, auch bei komplexen Projekten.",
  },
  {
    question: "Arbeitet Kometa auch mit großen Generalunternehmen?",
    answer:
      "Ja. Wir unterstützen zahlreiche große Auftraggeber im Energie- und Telekommunikationsbereich als verlässlicher Subunternehmer – vom Einzelgewerk bis zur kompletten Umsetzung.",
  },
  {
    question: "Welche Leistungen bietet Kometa konkret an?",
    answer:
      "Unsere Schwerpunkte sind Tiefbauarbeiten, Glasfaserverlegung, Trassenbau, technische Dokumentation und projektbezogene Unterstützung vor Ort.",
  },
  {
    question: "Wie schnell kann Kometa einsatzbereit sein?",
    answer:
      "Je nach Projektumfang sind wir oft innerhalb weniger Tage startklar. Unsere Teams sind vollständig ausgerüstet und einsatzfähig.",
  },
];

export default function Index() {
  return (
    <section id="faq" className="py-20">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10">
        <div className="">
          <h2
            className="font-bold text-[#FDEAA8] text-center lg:text-left text-4xl"
          >
            FAQ&apos;S
          </h2>
          <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <p className="lg:mt-10 text-center lg:text-left">
            Stellen Sie uns Ihre Fragen
          </p>
          <a
            href="mailto:info@kometa-power.com"
            className="mt-3 block text-lg lg:text-2xl font-semibold hover:underline text-center lg:text-left"
          >
            info@kometa-power.com
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5" />
                      ) : (
                        <BiPlus className="w-5 h-5" />
                      )}
                    </DisclosureButton>

                    <Transition
                      show={open}
                      enter="transition-all duration-500 ease-out"
                      enterFrom="opacity-0 max-h-0"
                      enterTo="opacity-100 max-h-[500px]"
                      leave="transition-all duration-200 ease-in"
                      leaveFrom="opacity-100 max-h-[500px]"
                      leaveTo="opacity-0 max-h-0"
                    >
                      <DisclosurePanel className="px-4 pt-4 pb-2">
                        {faq.answer}
                      </DisclosurePanel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
