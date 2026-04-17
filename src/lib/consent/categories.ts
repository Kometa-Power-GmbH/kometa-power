import type { Category } from "./types";

export interface CategoryService {
  name: string;
  provider: string;
  purpose: string;
  cookies: string[];
  duration: string;
}

export interface CategoryDefinition {
  id: Category;
  label: string;
  description: string;
  locked: boolean;
  services: CategoryService[];
}

export const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  {
    id: "necessary",
    label: "Notwendig",
    description:
      "Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern unter anderem Ihre Cookie-Einwilligung.",
    locked: true,
    services: [
      {
        name: "Cookie-Einwilligung",
        provider: "Kometa Power GmbH (Erstanbieter)",
        purpose: "Speicherung Ihrer Cookie-Einwilligung",
        cookies: ["kp_consent"],
        duration: "12 Monate",
      },
    ],
  },
  {
    id: "functional",
    label: "Funktional",
    description:
      "Diese Cookies ermöglichen komfortable Funktionen und speichern Ihre Präferenzen (z. B. bevorzugte Ansichten).",
    locked: false,
    services: [],
  },
  {
    id: "analytics",
    label: "Analyse",
    description:
      "Diese Cookies helfen uns, die Nutzung der Website anonymisiert zu analysieren, um Inhalte und Nutzererlebnis zu verbessern.",
    locked: false,
    services: [],
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Diese Cookies werden verwendet, um die Wirksamkeit von Werbemaßnahmen zu messen und Inhalte externer Anbieter anzuzeigen.",
    locked: false,
    services: [],
  },
];
