import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
