/**
 * @file src/app/about/page.tsx
 * @description The dedicated "About Me" page, providing a detailed look at my journey.
 *              This page uses styled cards and icons for a dynamic presentation.
 */
import AnimatedBackground from "@/components/animated-background";
import PageFooter from "@/components/page-footer";
import { BookOpen, Users, Utensils } from "lucide-react";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Page-specific metadata for SEO.
export const metadata: Metadata = {
  title: "Acerca de mí | Rodrigo Solis",
  description:
    "Conoce más sobre Rodrigo Solis, estudiante avanzado en Análisis, Desarrollo y Programación de Aplicaciones. Intereses en desarrollo full stack y diseño de interfaces.",
  // Provides the canonical URL for this page.
  alternates: {
    canonical: "/about",
  },
};

// Data for the different sections of the "About Me" page.
const aboutSections = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Formación",
    content:
      "Actualmente me encuentro finalizando mis estudios en Análisis, Desarrollo y Programación de Aplicaciones (ISFDyT Nº93). Disfruto aprender continuamente y aplicar buenas prácticas de desarrollo.",
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Curiosidad y hobbies",
    content:
      "La cocina es mi pasión y actualmente me dedico a ella. Paralelamente, estoy explorando cómo la tecnología puede potenciar este campo y tengo en mente desarrollar una aplicación que optimice mis procesos. Además, me considero una persona tranquila y responsable ",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Colaboración",
    content:
      "Creo que trabajar en equipo es una de las mejores maneras de aprender. En mi carrera, tuve la oportunidad de participar en proyectos grupales  lo cual ha sido una valiosa experiencia de trabajo en equipo y responsabilidad.",
  },
];

/**
 * AboutPage component renders a detailed, sectioned biography.
 * @returns {JSX.Element} The rendered "About Me" page with animated sections.
 */
export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl">
          <header className="mb-12 text-center pt-20">
            <h1
              className="text-4xl font-bold text-primary tracking-tight animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Acerca de mí
            </h1>
            <p
              className="text-foreground/70 mt-2 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "350ms" }}
            >
              Un poco sobre mi trayectoria e intereses.
            </p>
          </header>
          <main>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {aboutSections.map((section, index) => (
                <Card
                  key={section.title}
                  className={cn(
                    "group relative overflow-hidden bg-card/30 border-border/40 rounded-2xl p-4 text-center shadow-lg animate-fade-in-up",
                    "transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  )}
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  <div className="animate-border-glow"></div>
                  <div className="relative z-10">
                    <CardHeader className="flex flex-col items-center gap-4">
                      <div className="text-primary bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                        {section.icon}
                      </div>
                      <CardTitle className="text-xl text-primary">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
        <div className="w-full max-w-4xl flex-grow" />
        <PageFooter />
      </div>
    </>
  );
}
