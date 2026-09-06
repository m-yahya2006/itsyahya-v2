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
  metadataBase: new URL("https://www.itsyahya.com"),

  title: {
    default:
      "Muhammad Yahya | Civil Engineering × Intelligent Systems Portfolio",
    template: "%s | Muhammad Yahya",
  },

  description:
    "Portfolio of Muhammad Yahya, a Civil Engineering student at GIKI exploring intelligent systems, embedded computing, robotics, sensing, data, machine learning, and technology-driven engineering solutions.",

  keywords: [
    "Muhammad Yahya",
    "Civil Engineering",
    "Intelligent Systems",
    "GIKI",
    "Engineering Portfolio",
    "Embedded Systems",
    "Robotics",
    "Machine Learning",
    "ESP32",
    "Sensing Systems",
    "Engineering Design",
    "Data",
    "Automation",
  ],

  authors: [
    {
      name: "Muhammad Yahya",
      url: "https://www.itsyahya.com",
    },
  ],

  creator: "Muhammad Yahya",
  publisher: "Muhammad Yahya",

  openGraph: {
    title: "Muhammad Yahya | Civil Engineering × Intelligent Systems",
    description:
      "Exploring the intersection of civil engineering, intelligent systems, embedded computing, robotics, sensing, data, and machine intelligence.",
    url: "https://www.itsyahya.com",
    siteName: "Muhammad Yahya Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yahya | Civil Engineering × Intelligent Systems",
    description:
      "Civil Engineering × Intelligent Systems — engineering design, robotics, sensing, data, embedded systems, and machine intelligence.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.itsyahya.com",
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