import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollRevealController from "./components/ScrollRevealController";
import PortalPreloader from "./components/PortalPreloader";

const extensionAttributeCleanup = `
  (() => {
    const attributes = [
      "bis_skin_checked",
      "data-yd-metadata-content-site",
      "data-yd-content-ready",
    ];

    const clean = (root) => {
      if (!(root instanceof Element)) return;

      for (const attribute of attributes) {
        root.removeAttribute(attribute);
      }

      root
        .querySelectorAll(attributes.map((attribute) => \`[\${attribute}]\`).join(","))
        .forEach((element) => {
          for (const attribute of attributes) {
            element.removeAttribute(attribute);
          }
        });
    };

    clean(document.documentElement);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          clean(mutation.target);
        }

        for (const node of mutation.addedNodes) {
          clean(node);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: attributes,
      childList: true,
      subtree: true,
    });

    window.addEventListener(
      "load",
      () => {
        clean(document.documentElement);
        window.setTimeout(() => observer.disconnect(), 0);
      },
      { once: true },
    );
  })();
`;

export const metadata: Metadata = {
  title: "NextGen Digitals - Creativity Meets Results",
  description: "Transforming ideas into digital experiences that drive results and inspire growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: extensionAttributeCleanup }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#f6f6f4]" suppressHydrationWarning>
        <PortalPreloader />
        <ScrollRevealController />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
