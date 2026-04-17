import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ConsentProvider } from "@/components/Consent/ConsentProvider";
import { CookieBanner } from "@/components/Consent/CookieBanner";
import { AnalyticsGate, ConsentModeDefault } from "@/components/Analytics";
import { getServerConsent } from "@/lib/consent/storage";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kometa Power",
  description: "Kometa Power ist Ihr zuverlässiger Partner für Glasfaserverlegung, Tiefbau und technische Infrastruktur. Präzise. Effizient. Bereit für jedes Projekt.",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Kometa Power",
    description: "Kometa Power ist Ihr zuverlässiger Partner für Glasfaserverlegung, Tiefbau und technische Infrastruktur. Präzise. Effizient. Bereit für jedes Projekt.",
    url: "https://kometa-power.com",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 675,
        alt: "https://kometa-power.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kometa Power",
    description: "Kometa Power ist Ihr zuverlässiger Partner für Glasfaserverlegung, Tiefbau und technische Infrastruktur. Präzise. Effizient. Bereit für jedes Projekt.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialConsent = await getServerConsent();
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <ConsentModeDefault />
        <ConsentProvider initialConsent={initialConsent}>
          {children}
          <CookieBanner />
          <AnalyticsGate />
        </ConsentProvider>
      </body>
    </html>
  );
}
