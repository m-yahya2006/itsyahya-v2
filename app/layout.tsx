import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itsyahya.com"),

  title: {
    default: "Yahya | Civil Engineering × Intelligent Systems",
    template: "%s | Yahya",
  },

  description:
    "Portfolio of Yahya, a Civil Engineering student at GIKI exploring embedded systems, machine learning, robotics, software, and intelligent engineering systems.",

  keywords: [
    "Yahya",
    "Civil Engineering",
    "GIKI",
    "Embedded Systems",
    "Machine Learning",
    "Robotics",
    "ESP32",
    "Python",
    "C++",
    "AEVNS",
    "Engineering Portfolio",
  ],

  authors: [{ name: "Yahya" }],
  creator: "Yahya",

  openGraph: {
    title: "Yahya | Civil Engineering × Intelligent Systems",
    description:
      "Building intelligent systems for the physical world through civil engineering, AI, robotics, embedded systems, and software.",
    url: "https://itsyahya.com",
    siteName: "Yahya Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yahya | Civil Engineering × Intelligent Systems",
    description:
      "Civil Engineering student exploring AI, robotics, embedded systems, and intelligent infrastructure.",
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
      <body>{children}</body>
    </html>
  );
}