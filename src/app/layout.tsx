/**
 * @file src/app/layout.tsx
 * @description The root layout for the entire application.
 *              This component wraps all pages, providing a consistent HTML structure,
 *              loading global stylesheets and fonts, and setting up metadata for SEO.
 */
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AnimatedBackground from "@/components/animated-background";
import MainNav from "@/components/main-nav";
import GlobalPetRenderer from "@/components/global-pet-renderer";
import { Analytics } from "@vercel/analytics/react";
import MusicBar from "@/components/music-bar";

// Define metadata for the website, used for SEO and browser tab information.
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:9002"),
  title: "Rodrigo Solis | Portfolio",
  description:
    "Portafolio personal de Rodrigo Solis — Estudiante avanzado en Análisis, Desarrollo y Programación de Aplicaciones. Proyectos, experiencia y tecnologías.",
  keywords: [
    "Rodrigo Solis",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "C#",
    "WinForms",
    "SQL Server",
    "Desarrollador de software",
  ],
  openGraph: {
    title: "Rodrigo Solis | Portfolio",
    description:
      "Estudiante · Desarrollo de Software · Proyectos y tecnologías",
    url: "http://localhost:9002",
    siteName: "Portafolio de Rodrigo Solis",
    images: [
      {
        url: "http://localhost:9002/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Rodrigo Solis",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Solis | Portfolio",
    description:
      "Estudiante · Desarrollo de Software · Proyectos y tecnologías",
    images: ["http://localhost:9002/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Sets the canonical URL for the root of the site.
  alternates: {
    canonical: "http://localhost:9002",
  },
};

// JSON-LD structured data for rich search results (Google).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rodrigo Solis",
  alternateName: ["Rodrigo N. Solis"],
  url: "http://localhost:9002",
  jobTitle:
    "Estudiante avanzado en Análisis, Desarrollo y Programación de Aplicaciones",
  sameAs: ["https://github.com/nahuelsolisr"],
};

/**
 * RootLayout component that serves as the main template for all pages.
 * @param {Readonly<{ children: React.ReactNode }>} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered within this layout (i.e., the page content).
 * @returns {JSX.Element} The root HTML structure of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The `suppressHydrationWarning` is used because the animated background can cause
    // minor mismatches on initial load, which is acceptable for this decorative element.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for performance optimization. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Import the "Space Grotesk" font for the main site and "Lobster" for the special cards. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="-ggF-eMSfmD9YH-4yLzcQDEjUmv9WBmZuwxjsFAHifA"
        />
        {/* Add JSON-LD to the head to provide structured data to search engines. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {/* The AnimatedBackground component is rendered here to appear on all pages. */}
        <AnimatedBackground />
        {/* This component renders the roaming pet if one is active in the global state. */}
        <GlobalPetRenderer />
        {/* This div is the portal target for the roaming pet. */}
        <div id="pet-container"></div>
        <MainNav />
        {/* Renders the active page content. */}
        <main>{children}</main>
        {/* Global music player bar */}
        <MusicBar />
        {/* The Toaster component handles pop-up notifications. */}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
