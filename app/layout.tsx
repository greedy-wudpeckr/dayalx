import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAYALX - One Kit. Every Practical. All Semester.",
  description: "DAYALX delivers syllabus-aligned laboratory kits to colleges — so procurement teams stop chasing 50 vendors.",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/20 flex flex-col min-h-screen relative`}
      >
        <Header />
        <main className="flex-grow flex flex-col pt-16 sm:pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
