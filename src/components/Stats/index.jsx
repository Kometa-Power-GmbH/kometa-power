import {
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

export const stats = [
  {
    title: "100+",
    icon: <BsFillCheckCircleFill size={34} className="text-[#FDEAA8]" />,
    description:
      "Erfolgreich abgeschlossene Projekte im Bereich Glasfaser, Tiefbau und Netzinfrastruktur",
  },
  {
    title: "30+",
    icon: <BsFillPeopleFill size={34} className="text-[#FDEAA8]" />,
    description:
      "Einsatzbereite Fachkräfte mit Erfahrung in der technischen Umsetzung vor Ort",
  },
  {
    title: "12h",
    icon: <BsFillGearFill size={34} className="text-[#FDEAA8]" />,
    description:
      "Durchschnittliche Reaktionszeit für neue Anfragen – flexibel und einsatzbereit",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <section id="stats" className="py-10 lg:py-20 px-6 lg:px-0">
      <div className="grid sm:grid-cols-3 gap-11">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
            onMouseEnter={() => setCursorIsActive(true)}
            onMouseLeave={() => setCursorIsActive(false)}
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {stat.title}
            </h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
