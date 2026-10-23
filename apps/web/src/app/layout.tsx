import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bungee,
  Bungee_Outline,
  Londrina_Outline,
  Londrina_Solid,
} from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bungee = Bungee({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-bungee",
  display: "swap",
});

const bungeeOutline = Bungee_Outline({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-bungee-outline",
  display: "swap",
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

export const metadata: Metadata = {
  title: "nguyenthanhduyofficial",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bungee.variable} ${bungeeOutline.variable} ${londrinaOutline.variable} ${londrinaSolid.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
