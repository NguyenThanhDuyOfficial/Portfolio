import type { Metadata } from "next";
import "../../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  geistMono,
  geistSans,
  londrinaOutline,
  londrinaSolid,
} from "../../fonts/fonts";

export const metadata: Metadata = {
  title: "Portfolio",
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
      className={`${geistSans.variable} ${geistMono.variable} ${londrinaOutline.variable} ${londrinaSolid.variable}  h-full antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
