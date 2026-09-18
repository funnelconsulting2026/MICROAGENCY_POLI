import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const display = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${geist.variable} ${display.variable}`} data-theme="milano">
      <body>{children}</body>
    </html>
  );
}
