import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convite-casamente-amanda-joao.vercel.app/"),

  title: "Amanda e João Gabriel | Convite de Casamento",
  description:
    "Convite de casamento de Amanda e João Gabriel — 09 de Maio de 2026",

  openGraph: {
    title: "Amanda e João Gabriel | Convite de Casamento",
    description:
      "Convite de casamento de Amanda e João Gabriel — 09 de Maio de 2026",
    url: "https://convite-casamente-amanda-joao.vercel.app/",
    siteName: "Amanda e João Gabriel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/public/galery/galery-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Amanda e João Gabriel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amanda e João Gabriel | Convite de Casamento",
    description:
      "Convite de casamento de Amanda e João Gabriel — 09 de Maio de 2026",
    images: ["/public/galery/galery-2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${greatVibes.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}