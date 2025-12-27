/**
 * @file src/app/projects/page.tsx
 * @description The dedicated page for showcasing all projects and contributions.
 *              This page provides a more comprehensive view than the "featured"
 *              section on the homepage.
 */
import AnimatedBackground from "@/components/animated-background";
import PageFooter from "@/components/page-footer";
import Projects from "@/components/projects";
import type { Metadata } from "next";

// Page-specific metadata for SEO.
export const metadata: Metadata = {
  title: "Proyectos y Contribuciones | Rodrigo Solis",
  description:
    "Listado completo de proyectos y contribuciones abiertas de Rodrigo Solis.",
  alternates: {
    canonical: "/projects",
  },
};

/**
 * ProjectsPage component that displays a complete list of all projects.
 * @returns {JSX.Element} The rendered projects page.
 */
export default function ProjectsPage() {
  return (
    <>
      {/* The animated background is included here as well for a consistent look. */}
      <AnimatedBackground />
      {/* `relative z-10` ensures content is displayed above the background. */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl flex-grow">
          <header className="mb-8 pt-20 text-center">
            <h1 className="text-4xl font-bold text-primary tracking-tight">
              Proyectos y Contribuciones
            </h1>
          </header>

          {/* An informational box providing context about the project timeline. */}
          <div className="bg-card/30 border border-border/40 rounded-lg p-4 text-center text-sm text-foreground/70 mb-8 italic">
            Esta es una selección de proyectos públicos alojados en GitHub.
            Algunos repos pueden ser educativos o prototipos.
          </div>

          {/* The Projects component is rendered here without the `featuredOnly` prop,
              so it displays all projects from the data source. */}
          <Projects />
        </div>
        <PageFooter />
      </div>
    </>
  );
}
