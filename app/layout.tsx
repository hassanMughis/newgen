import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollRevealController from "./components/ScrollRevealController";
import PortalPreloader from "./components/PortalPreloader";

export const metadata: Metadata = {
  title: "NextGen Digitals - Creativity Meets Results",
  description: "Transforming ideas into digital experiences that drive results and inspire growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#f6f6f4]" suppressHydrationWarning>
        <PortalPreloader />
        <ScrollRevealController />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
