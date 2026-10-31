import localFont from "next/font/local";
import {
  Geist,
  Geist_Mono,
  Londrina_Outline,
  Londrina_Solid,
  Roboto,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const londrinaOutline = Londrina_Outline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-londrina-outline",
  display: "swap",
});

export const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
  variable: "--font-londrina-solid",
  display: "swap",
});

export const simpleNails = localFont({
  src: "./SimplesnailsVer40-6Lpx.ttf",
  display: "swap",
});

export const roboto = Roboto({ display: "swap" });
