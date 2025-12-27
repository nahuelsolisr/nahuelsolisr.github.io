/**
 * @file src/app/page.tsx
 * @description The main homepage of the Quantalink portfolio.
 *              This component arranges all the primary sections of the landing page
 *              in a vertical layout.
 */
import ProfileSection from "@/components/profile-section";
import LinkCards from "@/components/link-cards";
import PageFooter from "@/components/page-footer";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";
import Projects from "@/components/projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * The Home component serves as the main entry point and landing page for the website.
 * It composes various sections like the profile, links, projects, and skills
 * into a single, scrollable view.
 * @returns {JSX.Element} A structured layout of the homepage components.
 */
export default function Home() {
  return (
    // The main container ensures content is centered and properly spaced.
    // `relative z-10` is used to make sure the content appears on top of the animated background.
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between p-4 sm:p-6 lg:p-8">
      {/* This wrapper constrains the width of the content for better readability on larger screens. */}
      <div className="w-full max-w-3xl flex-grow flex flex-col justify-center">
        {/* The `space-y-*` classes add vertical spacing between each child component. */}
        <div className="w-full space-y-6 md:space-y-8">
          <ProfileSection />
          <LinkCards />
          <Separator className="bg-border/50" />
          <div className="text-center">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Conocé más sobre mí &rarr;
            </Link>
          </div>
          <Separator className="bg-border/50" />
          {/* The Projects component is configured to show only featured projects on the homepage. */}
          <Projects featuredOnly />
          <Separator className="bg-border/50" />
          <Skills />
          <Separator className="bg-border/50" />
          {/* CV Download Section */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-primary tracking-tight">
              Currículum
            </h2>
            <p className="text-sm text-foreground/70">
              Descargá mi CV actualizado en formato PDF.
            </p>
            <div>
              <Button
                asChild
                variant="outline"
                className="bg-card/30 border-border/40"
              >
                <a href="/Rodrigo-Solis-CV.pdf" download>
                  Descargar CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <Separator className="bg-border/50" />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
