/**
 * @file /src/lib/projects-data.ts
 * @description This file contains the data for all projects.
 *              To add a new project, simply add a new object to the `projects` array.
 *              The data is structured to be easily mapped over in the UI components.
 */

/**
 * Defines the structure for a single project object.
 */
export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  license: string;
  /** Optional. If true, the project will be displayed on the home page. */
  isFeatured?: boolean;
  /** Optional. If true, you can use this to style or filter contributions differently. */
  isContribution?: boolean;
}

/**
 * An array of project objects.
 */
export const projects: Project[] = [
  // To feature a project on the home page, set `isFeatured: true`.
  {
    title: 'Tickets-Laravel-12',
    description:
      'Sistema de tickets/helpdesk construido con Laravel 12. Gestión de incidencias con estados, prioridad, categorías y asignación, pensado para soporte interno y atención al cliente.',
    githubUrl: 'https://github.com/nahuelsolisr/Tickets-Laravel-12',
    license: '',
    isFeatured: true,
  },
  {
    title: 'glitch.impresiones',
    description:
      'Landing page para una gráfica/impresiones. Diseño claro orientado a conversión y presentación de servicios.',
    githubUrl: 'https://github.com/nahuelsolisr/glitch.impresiones',
    license: '',
    isFeatured: true,
  },
  {
    title: 'Generala 2.0',
    description: 'Rework del juego de dados Generala/Yahtzee con mejoras de interfaz y lógica de puntuación.',
    githubUrl: 'https://github.com/nahuelsolisr/Generala2.0',
    license: '',
    isFeatured: false
  },
  {
    title: 'ISFDYT-93',
    description: 'Web landing page para Instituto Superior de Formación Docente y Técnica N°93 con sistema de inscripción, registro y login. Incluye 6 carreras educativas, integración con Google Maps, YouTube y plataforma INFD.',
    githubUrl: 'https://github.com/nahuelsolisr/ISFDYT-93',
    license: '',
    isFeatured: false,
  },
  {
    title: 'Agraria',
    description: 'Aplicación vinculada a "Escuela de Campo" con enfoque educativo. Componentes de gestión y presentación de información.',
    githubUrl: 'https://github.com/nahuelsolisr/Agraria',
    license: '',
    isFeatured: false,
  },
  {
    title: 'Sistema-EE',
    description: 'Sistema de gestión para inventario, ventas y compras con administración de clientes y proveedores. Proyecto orientado a PyMEs.',
    githubUrl: 'https://github.com/nahuelsolisr/Sistema-EE',
    license: '',
    isFeatured: false,
  },
  // To add another project, copy the object structure below:
  // {
  //   title: 'Your New Project Title',
  //   description: 'A brief and engaging description of your project.',
  //   githubUrl: 'https://github.com/your-username/your-repo',
  //   license: 'Your Project License (e.g., MIT, Apache 2.0)',
  //   isFeatured: false, // Set to true to show on home page
  //   isContribution: false, // Set to true if it's a contribution to another project
  // },
];
