export const profile = {
  name: "Gibmyx Gomez",
  role: "Desarrollador Full Stack",
  stack: "Laravel & React",
  location: "Carúpano, Sucre, Venezuela",
  availability: "Disponible para trabajo remoto",
  email: "verlumyx.tech@gmail.com",
  phone: "+58 414 846 2621",
  phoneHref: "tel:+584148462621",
  cvUrl: "/cv-gibmyx-gomez.pdf",
  social: {
    linkedin: "https://linkedin.com/in/gibmyx-gomez",
    github: "https://github.com/verlumyx",
  },
  summary:
    "Más de 6 años construyendo y manteniendo sistemas ERP y aplicaciones web escalables con Laravel y React. He desarrollado más de 30 módulos para plataformas usadas por más de 100 empresas y optimizado procesos críticos, reduciendo tiempos de reportes de horas a segundos. Diseño APIs REST, lidero equipos de soporte técnico y automatizo procesos con IA (Claude / Anthropic y MCP). Busco aportar en equipos remotos que valoren el código limpio y el impacto real en el negocio.",
  highlights: [
    { value: "6+", label: "años de experiencia" },
    { value: "30+", label: "módulos ERP desarrollados" },
    { value: "100+", label: "empresas usan mi código" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Desarrollador Full Stack & Líder de Soporte Técnico",
    company: "Medine.tech",
    period: "Nov 2019 — Actualidad",
    current: true,
    bullets: [
      "Desarrollé más de 30 módulos para un sistema ERP utilizado por más de 100 empresas, agilizando procesos operativos y facilitando el trabajo diario de los usuarios.",
      "Optimicé reportes críticos que tardaban minutos e incluso horas en generarse, reduciendo su tiempo de ejecución a segundos.",
      "Implementé un sistema de autenticación de dos pasos (2FA), fortaleciendo la seguridad de acceso de toda la plataforma.",
      "Diseñé y consumí APIs REST para conectar el backend en Laravel con interfaces desarrolladas en Vue.js y React.",
      "Lideré el área de soporte técnico (equipo de 2 personas), garantizando la resolución de incidencias y la continuidad del servicio.",
      "Desarrollé una automatización con IA integrando Claude (Anthropic) mediante MCP con distintas herramientas CRM, para evaluar y priorizar casos de soporte de forma automática y reducir el tiempo de respuesta al cliente.",
    ],
  },
  {
    role: "Desarrollador Full Stack",
    company: "Corefix",
    period: "Ene 2023 — Jun 2024",
    bullets: [
      "Desarrollé e implementé 2 plataformas web desde cero: AA México y Plenitud AA.",
      "Construí el backend con Laravel y el frontend con React, encargándome además del soporte y mantenimiento de ambas plataformas.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema ERP multiempresa",
    description:
      "Más de 30 módulos para una plataforma ERP usada por más de 100 empresas. Reportes críticos optimizados de horas a segundos, autenticación 2FA y APIs REST que conectan Laravel con Vue.js y React.",
    tags: ["Laravel", "Vue.js", "React", "MySQL", "APIs REST"],
  },
  {
    title: "Automatización de soporte con IA",
    description:
      "Integración de Claude (Anthropic) mediante MCP con herramientas CRM para evaluar y priorizar casos de soporte automáticamente, reduciendo el tiempo de respuesta al cliente.",
    tags: ["Claude API", "MCP", "CRM", "Laravel"],
  },
  {
    title: "AA México",
    description:
      "Plataforma web construida desde cero con backend en Laravel y frontend en React. Incluye soporte y mantenimiento continuo.",
    tags: ["Laravel", "React"],
    url: "https://aamexico.org.mx",
  },
  {
    title: "Plenitud AA",
    description:
      "Plataforma web desarrollada e implementada desde cero, con la misma arquitectura Laravel + React y mantenimiento posterior.",
    tags: ["Laravel", "React"],
    url: "https://plenitudaa.org.mx",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Lenguajes", items: ["PHP", "JavaScript", "TypeScript"] },
  {
    category: "Frameworks",
    items: ["Laravel", "Livewire", "Inertia.js", "React", "Vue.js"],
  },
  { category: "Bases de datos", items: ["MySQL", "MariaDB"] },
  {
    category: "DevOps & Herramientas",
    items: ["Docker", "Git", "CI/CD", "Linux", "AWS", "DigitalOcean"],
  },
  {
    category: "IA & Automatización",
    items: [
      "Claude / Anthropic API",
      "MCP (Model Context Protocol)",
      "Integración con CRMs",
      "Claude Code",
    ],
  },
  {
    category: "Otros",
    items: ["APIs REST", "Testing (PHPUnit / Pest)", "Colas / Queues"],
  },
];

export const education = {
  degree: "Licenciatura en Informática",
  status: "En curso",
  institution: "Universidad de Oriente",
};

export const certifications: { title: string; issuer: string; year: number }[] =
  [
    {
      title: "SQL - Curso completo de Bases de Datos, de 0 a Avanzado",
      issuer: "Udemy",
      year: 2025,
    },
    {
      title: "React PRO: Lleva tus bases al siguiente nivel",
      issuer: "Udemy",
      year: 2023,
    },
    {
      title: "Procesa Pagos y Suscripciones con Laravel y Llamados a APIs",
      issuer: "Udemy",
      year: 2023,
    },
    {
      title: "TypeScript: Tu completa guía y manual de mano",
      issuer: "Udemy",
      year: 2023,
    },
    {
      title: "React: De cero a Experto (Hooks y MERN)",
      issuer: "Udemy",
      year: 2023,
    },
    { title: "Vue.js: De cero a experto", issuer: "Udemy", year: 2022 },
    {
      title: "Curso intensivo de Laravel y Android usando JWT y Kotlin",
      issuer: "Udemy",
      year: 2022,
    },
  ];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico (en formación activa)" },
];

export const softSkills = [
  "Resiliencia",
  "Trabajo en equipo",
  "Liderazgo",
  "Adaptabilidad",
  "Resolución de problemas",
  "Aprendizaje continuo",
];

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];
