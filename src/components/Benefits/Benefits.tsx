import BenefitSection from "./BenefitSection";

import {
  FiMapPin,
  FiSettings,
  FiTool,
  FiUsers,
  FiShield,
  FiClock,
  FiTarget,
  FiTruck,
  FiCheckSquare,
} from "react-icons/fi";

const benefits = [
  {
    title: "Technische Präzision",
    description:
      "Wir liefern technische Lösungen mit Fokus auf Effizienz, Struktur und Sicherheit.",
    bullets: [
      {
        title: "Planung & Ausführung",
        description:
          "Von der Baustellenvorbereitung bis zur Kabelverlegung – alles aus einer Hand.",
        icon: <FiMapPin size={26} />,
      },
      {
        title: "Professionelles Equipment",
        description:
          "Moderne Maschinen, Werkzeuge und Methoden für saubere Ergebnisse.",
        icon: <FiTool size={26} />,
      },
      {
        title: "Standardisierte Abläufe",
        description:
          "Unsere Teams arbeiten nach geprüften Prozessen – für höchste Qualität.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/optic.png",
  },
  {
    title: "Zuverlässiger Partner für Auftraggeber",
    description:
      "Als erfahrene Subunternehmer unterstützen wir Ihre Projekte flexibel und effizient",
    bullets: [
      {
        title: "Fachkundige Teams",
        description:
          "Unsere eingespielten Kolonnen bringen Erfahrung im Glasfaserausbau, Tiefbau und der Baudokumentation mit.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Verlässliche Termine",
        description:
          "Wir halten Deadlines ein – verbindlich, transparent und mit hoher Eigenverantwortung.",
        icon: <FiClock size={26} />,
      },
      {
        title: "Eigene Logistik & Technik",
        description:
          "Durch unseren Fuhrpark und eigene Ausrüstung sind wir schnell und unabhängig einsatzbereit.",
        icon: <FiTruck size={26} />,
      },
    ],
    imageSrc: "/images/support.png",
  },
  {
    title: "Sicherheit & Qualität",
    description:
      "Wir achten auf jedes Detail – von der Arbeitssicherheit bis zur finalen Abnahme. Unsere Verantwortung endet nicht beim Einbau.",
    bullets: [
      {
        title: "Sicheres Arbeiten",
        description:
          "Wir halten alle Vorschriften strikt ein – für unser Team und Ihre Baustelle.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Dokumentation & Nachweise",
        description:
          "Saubere Protokolle, Fotos und Übergaben – alles nachvollziehbar und vollständig.",
        icon: <FiCheckSquare size={26} />,
      },
      {
        title: "Ergebnisorientiert",
        description:
          "Wir denken in Lösungen – nicht in Ausreden oder Problemen.",
        icon: <FiTarget size={26} />,
      },
    ],
    imageSrc: "/images/safety.png",
  },
];

export default function Index() {
  return (
    <div id="benefits" className="">
      <h2 className="sr-only">Features</h2>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
}
