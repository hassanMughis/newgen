import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextGen Digitals - Creativity Meets Results",
  description: "Transforming ideas into digital experiences that drive results and inspire growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
