import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsyahya.com"),

  title: {
    default: "Yahya | Civil Engineering × Intelligent Systems",
    template: "%s | Yahya",
  },

  description:
    "Portfolio of Muhammad Yahya, a Civil Engineering student at GIKI exploring intelligent physical systems through embedded computing, robotics, sensing, and machine learning.",

  keywords: [
    "Muhammad Yahya",
    "Civil Engineering",
    "GIKI",
    "Intelligent Infrastructure",
    "Embedded Systems",
    "Robotics",
    "Machine Learning",
    "ESP32",
    "Engineering Portfolio",
    "AEVNS",
  ],

  authors: [{ name: "Muhammad Yahya" }],
  creator: "Muhammad Yahya",

  openGraph: {
    title: "Yahya | Civil Engineering × Intelligent Systems",
    description:
      "Exploring the intersection of physical engineering, sensing, embedded systems, robotics, and machine intelligence.",
    url: "https://itsyahya.com",
    siteName: "Yahya",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}