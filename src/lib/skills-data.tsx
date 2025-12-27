/**
 * @file /src/lib/skills-data.tsx
 * @description This file contains the data for all technical skills, organized into categories.
 *              To add a new skill or category, modify the `skillsData` array.
 *              This structure makes it easy to render the skills page dynamically.
 * @note This file must have a `.tsx` extension because it imports and uses React components (icons).
 */

import { Code, Wrench, Languages, Layout, Paintbrush } from "lucide-react";
import Image from "next/image";
import { PythonIcon } from "@/components/icons/python";
import { TypescriptIcon } from "@/components/icons/typescript";
import { ReactIcon } from "@/components/icons/react";
import { VscodeIcon } from "@/components/icons/vscode";
import { GithubIcon } from "@/components/icons/github";
import { GitIcon } from "@/components/icons/git";
import { BashIcon } from "@/components/icons/bash";
import { VercelIcon } from "@/components/icons/vercel";
import { UbuntuIcon } from "@/components/icons/ubuntu";
import { CIcon } from "@/components/icons/c";
import { NumpyIcon } from "@/components/icons/numpy";
import { SciktLearnIcon } from "@/components/icons/scikt-learn";
import { ArduinoIcon } from "@/components/icons/arduino";
import { EspressifIcon } from "@/components/icons/espressif";
import { NextjsIcon } from "@/components/icons/nextdotjs";
import { TailwindIcon } from "@/components/icons/tailwind";
import { FirebaseIcon } from "@/components/icons/firebase";
import { ArchlinuxIcon } from "@/components/icons/archlinux";
import { FedoraIcon } from "@/components/icons/fedora";
import { VimIcon } from "@/components/icons/vim";

import { HtmlIcon } from "@/components/icons/html5";
import { CssIcon } from "@/components/icons/css3";
import { JavascriptIcon } from "@/components/icons/javascript";

/**
 * Defines the structure for an individual skill.
 * @property {string} name - The name of the skill (e.g., "Python").
 * @property {React.ReactNode} icon - The React component for the skill's logo.
 * @property {string} [iconClassName] - Optional CSS classes to apply to the icon container.
 */
export interface Skill {
  name: string;
  icon: React.ReactNode;
  iconClassName?: string;
}

/**
 * Defines the structure for a category of skills.
 * @property {string} title - The title of the category (e.g., "Frontend Development").
 * @property {React.ReactNode} icon - The icon representing the category.
 * @property {string} [subtitle] - An optional subtitle to display under the category title.
 * @property {Skill[]} skills - An array of `Skill` objects belonging to this category.
 */
export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  skills: Skill[];
}

/**
 * Data for all technical skills, organized by category.
 */
export const skillsData: SkillCategory[] = [
  {
    title: "Lenguajes base",
    icon: <Languages size={32} />,
    subtitle: "Tecnologías que uso día a día",
    skills: [
      { name: "C#", icon: <Code /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
      { name: "TypeScript", icon: <TypescriptIcon />, iconClassName: "p-1" },
      { name: "PHP", icon: <Code /> },
      { name: "HTML5", icon: <HtmlIcon /> },
      { name: "CSS3", icon: <CssIcon /> },
    ],
  },
  {
    title: "Frameworks & UI",
    icon: <Code size={32} />,
    subtitle: "Stack para frontend, backend y UI.",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Laravel", icon: <Code /> },
      { name: ".NET / WinForms", icon: <Layout /> },
      { name: "Bootstrap", icon: <Paintbrush /> },
      { name: "Next.js", icon: <NextjsIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
  },
  {
    title: "Herramientas",
    icon: <Wrench size={32} />,
    subtitle: "Herramientas de desarrollo y colaboración que uso.",
    skills: [
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub", icon: <GithubIcon /> },
      { name: "VS Code", icon: <VscodeIcon /> },
      { name: "Jira", icon: <Wrench /> },
      { name: "ClickUp", icon: <Wrench /> },
      { name: "Photoshop", icon: <Paintbrush /> },
      { name: "Canva", icon: <Paintbrush /> },
      { name: "Cursor", icon: <Code /> },
      { name: "Windsurf", icon: <Code /> },
    ],
  },
];
