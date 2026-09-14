export const profile = {
  name: "Gibmyx Gomez",
  role: "Desarrollador Full Stack",
  stack: "Laravel & React",
  location: "Carúpano, Sucre, Venezuela",
  availability: "Disponible para trabajo remoto",
  email: "verlumyx.tech@gmail.com",
  phone: "+58 414 846 2621",
  phoneHref: "tel:+584148462621",
  cvUrl: "/cv_ggomez.pdf",
  social: {
    linkedin: "https://linkedin.com/in/gibmyx-gomez",
    github: "https://github.com/verlumyx",
  },
  summary:
    "Desarrollador Full Stack con más de 6 años de experiencia construyendo sistemas ERP y aplicaciones web escalables con Laravel, React, Next.js y Node.js. Destaco por mi capacidad para diseñar, mantener y optimizar plataformas de alto rendimiento orientadas a un gran volumen de usuarios, logrando reducir tiempos de procesamiento de datos críticos de horas a segundos. Especializado en integrar IA en productos reales: automatizaciones con Claude (Anthropic) y MCP, asistentes con RAG y function calling, y agentes conectados a CRMs que automatizan áreas de soporte. Busco equipos remotos que valoren el código limpio, arquitecturas sólidas (TypeScript end-to-end) y un impacto medible en el negocio.",
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
    period: "Nov 2019 — Ago 2026",
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

export type Company = {
  name: string;
  role: string;
  period: string;
  logo: string;
  logoBg?: string;
  description: string;
  url?: string;
};

export const companies: Company[] = [
  {
    name: "Medine.tech",
    role: "Full Stack & Líder de Soporte",
    period: "2019 — 2026",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-[#020818]",
    description:
      "Desarrollo de más de 30 módulos para ERP multiempresa (100+ clientes) y automatizaciones de soporte con IA (Claude + MCP).",
    url: "https://medine.tech",
  },
  {
    name: "Corefix",
    role: "Desarrollador Full Stack",
    period: "2023 — 2024",
    logo: "/img/logo-corefix.png",
    logoBg: "bg-white",
    description:
      "Desarrollo y mantenimiento integral de plataformas web con Laravel y React (AA México y Plenitud AA).",
  },
  {
    name: "Pensanomica",
    role: "Soporte Técnico & Desarrollo",
    period: "Colaboración",
    logo: "/img/logo-pensanomica.png",
    logoBg: "bg-white",
    description:
      "Desarrollo de funciones en el área de soporte técnico, resolución de incidencias y soporte operativo en plataformas y servicios cloud.",
    url: "https://pensanomica.com",
  },
];

export type TechStackItem = {
  layer: string;
  tech: string;
  purpose: string;
};

export type ArchitectureDetail = {
  summary: string;
  diagram?: string;
  keyPoints: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Completado" | "En desarrollo" | "Producción";
  tags: string[];
  githubUrl?: string;
  secondaryGithubUrl?: { label: string; url: string };
  liveUrl?: string;
  architecture: ArchitectureDetail;
  features: string[];
  techStack: TechStackItem[];
  creationNotes: string[];
};

export const projects: Project[] = [
  {
    slug: "plenitud-aa",
    title: "Plenitud AA",
    tagline: "Plataforma Web y Panel Administrativo con Arquitectura Hexagonal",
    description:
      "Plataforma integral para la revista Plenitud de Alcohólicos Anónimos (AA) México. Cuenta con un portal público para usuarios y un panel administrativo avanzado. El backend está construido bajo los principios de Arquitectura Hexagonal (Clean Architecture) con Laravel, asegurando alta escalabilidad y mantenibilidad, mientras que el frontend utiliza React 18 segmentado en múltiples Single Page Applications (SPAs).",
    status: "Producción",
    tags: [
      "Laravel 9",
      "React 18",
      "Hexagonal Architecture",
      "Domain-Driven Design",
      "Tailwind CSS",
      "Vite",
      "Redux Toolkit",
    ],
    liveUrl: "https://www.plenitudaa.org.mx/#inicio",
    architecture: {
      summary:
        "El backend en Laravel 9 está estructurado utilizando Arquitectura Hexagonal (Domain-Driven Design), separando la lógica de negocio (Dominio) de la infraestructura y aplicación. El frontend está desacoplado en dos aplicaciones React independientes (Admin y Web) compiladas a través de Vite e integradas en vistas Blade.",
      diagram: `  ┌─ FRONTEND (React 18 + Vite + Tailwind CSS) ────────────────────────────┐
  │   - App Web: Portal público y navegación de usuarios                 │
  │   - App Admin: Panel de gestión, Redux Toolkit, React Router         │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ API REST / JSON
                                      ▼
  ┌─ BACKEND (Laravel 9 - Arquitectura Hexagonal) ─────────────────────────┐
  │   src/                                                                 │
  │     ├── Plenitud/   (Módulos: Gaceta, Literatura, Usuario, etc.)       │
  │     │     ├── Contract/     (Interfaces y puertos)                     │
  │     │     ├── Controller/   (Adaptadores de entrada HTTP)              │
  │     │     ├── Models/       (Entidades de dominio)                     │
  │     │     ├── Persistence/  (Repositorios y adaptadores de salida)     │
  │     │     └── UserCase/     (Casos de uso e interactors)               │
  │     └── Shared/     (Infraestructura compartida y Base)                │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Eloquent ORM
                                      ▼
  ┌─ BASE DE DATOS ────────────────────────────────────────────────────────┐
  │   - MySQL / PostgreSQL                                                 │
  └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "Arquitectura Hexagonal (Clean Architecture): Separación estricta de responsabilidades usando Contract, Controller, Models, Persistence y UserCase en el directorio 'src/'.",
        "Frontend Desacoplado: Múltiples entry points de React (AdminApp y WebApp) orquestados por Vite e integrados en Laravel.",
        "Manejo de Estado Centralizado: Uso de Redux Toolkit en el panel de administración para el flujo complejo de datos.",
        "Patrón Repositorio: Abstracción de la capa de persistencia de datos mediante repositorios e interfaces en la capa Contract.",
        "Escalabilidad Modular: Los módulos de negocio (Gaceta, Literatura, ExperienciaDiaria) están completamente aislados y son fácilmente extensibles.",
      ],
    },
    features: [
      "Portal público interactivo para acceder a literatura, gacetas e información general de AA México.",
      "Panel de administración seguro con control de acceso y gestión de contenido.",
      "Gestión de usuarios, planes de acción y productos especiales.",
      "Soporte para múltiples Single Page Applications (SPAs) dentro de un solo monolito estructurado.",
      "Integración de animaciones y sliders interactivos con Swiper.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel 9 + PHP",
        purpose: "Orquestación del backend, enrutamiento, seguridad e inyección de dependencias.",
      },
      {
        layer: "Arquitectura",
        tech: "Hexagonal Architecture",
        purpose: "Organización modular del código en Contract, Persistence y UserCases para máxima mantenibilidad.",
      },
      {
        layer: "Frontend / SPAs",
        tech: "React 18 + React Router",
        purpose: "Desarrollo de interfaces dinámicas e interactivas segmentadas para Web y Admin.",
      },
      {
        layer: "Estilos & UI",
        tech: "Tailwind CSS + Headless UI",
        purpose: "Diseño responsivo, utilitario y componentes accesibles.",
      },
      {
        layer: "Estado global",
        tech: "Redux Toolkit",
        purpose: "Manejo centralizado del estado para la aplicación administrativa.",
      },
    ],
    creationNotes: [
      "Se optó por Arquitectura Hexagonal en el backend para domar la complejidad de negocio y facilitar futuras integraciones.",
      "El frontend se dividió en aplicaciones React separadas para mantener el portal público ligero y reservar el peso de Redux Toolkit solo para el panel de administración.",
    ],
  },
  {
    slug: "aa-mexico",
    title: "AA México",
    tagline: "Plataforma Nacional de Gestión de Grupos y Oficinas",
    description:
      "Sistema a nivel nacional para Alcohólicos Anónimos (AA) México, diseñado para la administración integral de todos los grupos de ayuda, oficinas, distritos y estados en el país. Utiliza Arquitectura Hexagonal en el backend para manejar la compleja estructura organizativa y SPAs en React para interfaces fluidas.",
    status: "Producción",
    tags: [
      "Laravel 9",
      "React 18",
      "Hexagonal Architecture",
      "Domain-Driven Design",
      "Tailwind CSS",
      "Vite",
      "Redux Toolkit",
    ],
    liveUrl: "https://www.aamexico.org.mx/",
    architecture: {
      summary:
        "Backend estructurado con Arquitectura Hexagonal (Domain-Driven Design) en Laravel, y un frontend dividido en aplicaciones React independientes para el portal público y el panel administrativo.",
      diagram: `  ┌─ FRONTEND (React 18 + Vite + Tailwind CSS) ────────────────────────────┐
  │   - App Web: Buscador de grupos, directorios y portal público        │
  │   - App Admin: Gestión jerárquica con Redux Toolkit y React Router   │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ API REST / JSON
                                      ▼
  ┌─ BACKEND (Laravel 9 - Arquitectura Hexagonal) ─────────────────────────┐
  │   src/                                                                 │
  │     ├── AAMexico/   (Módulos: Grupos, Estado, Oficinas, Distritos)     │
  │     │     ├── Contract/     (Interfaces y puertos)                     │
  │     │     ├── Controller/   (Adaptadores de entrada HTTP)              │
  │     │     ├── Models/       (Entidades de dominio)                     │
  │     │     ├── Persistence/  (Repositorios y adaptadores de salida)     │
  │     │     └── UserCase/     (Casos de uso e interactors)               │
  │     └── Shared/     (Infraestructura compartida y Base)                │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Eloquent ORM
                                      ▼
  ┌─ BASE DE DATOS ────────────────────────────────────────────────────────┐
  │   - MySQL / PostgreSQL con estructura relacional geográfica            │
  └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "Arquitectura Hexagonal (Clean Architecture): Separación estricta de las reglas de negocio de la infraestructura organizativa.",
        "Módulos de Dominio Jerárquicos: Aislamiento total de los dominios (Estado, Distrito, Oficina, Grupo) en la capa de negocio.",
        "Frontend Desacoplado: Micro-SPAs en React orquestadas por Vite.",
        "Manejo de Estado Centralizado: Uso de Redux Toolkit para gestionar el árbol de datos geográficos y organizativos en el panel admin.",
      ],
    },
    features: [
      "Buscador nacional y geolocalizado de grupos de ayuda y oficinas de AA.",
      "Panel de administración complejo para la gestión jerárquica: Estados > Distritos > Oficinas > Grupos.",
      "Control de acceso y roles para administradores a distintos niveles geográficos.",
      "Manejo avanzado de estado global en frontend para la carga dinámica de zonas y grupos.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel 9 + PHP",
        purpose: "Orquestación, seguridad e inyección de dependencias con separación de capas.",
      },
      {
        layer: "Arquitectura",
        tech: "Hexagonal Architecture",
        purpose: "Mantenibilidad extrema en la lógica de negocio jerárquica (DDD).",
      },
      {
        layer: "Frontend / SPAs",
        tech: "React 18 + React Router",
        purpose: "Interfaces reactivas para la búsqueda y gestión de grupos.",
      },
      {
        layer: "Estilos & UI",
        tech: "Tailwind CSS + Headless UI",
        purpose: "Diseño limpio y responsivo para el directorio nacional.",
      },
      {
        layer: "Estado global",
        tech: "Redux Toolkit",
        purpose: "Flujo predecible de datos para la compleja jerarquía de distritos y grupos.",
      },
    ],
    creationNotes: [
      "El principal reto fue modelar la jerarquía organizativa real de AA (Estados, Distritos, Oficinas y Grupos) en una estructura de base de datos eficiente y rápida de consultar.",
      "La Arquitectura Hexagonal demostró ser invaluable para escalar y mantener el código ordenado a medida que las reglas de negocio para la creación y gestión de grupos se volvían más estrictas.",
    ],
  },
  {
    slug: "chat-ia",
    title: "chatIA",
    tagline: "Asistente Corporativo con RAG Híbrido, Tools y WhatsApp Desacoplado",
    description:
      "Asistente fullstack de inteligencia artificial que combina búsqueda semántica (RAG) sobre documentación en Markdown con consultas SQL en tiempo real mediante Function Calling / Tools tipadas con Zod. Cuenta con chat web con streaming en vivo y atención oficial por WhatsApp con arquitectura de cola asíncrona de alta concurrencia.",
    status: "Completado",
    tags: [
      "Next.js (App Router)",
      "React 19",
      "LangChain.js",
      "Google Gemini",
      "Supabase",
      "pgvector",
      "WhatsApp Cloud API",
      "Tailwind CSS v4",
      "TypeScript",
    ],
    githubUrl: "https://github.com/verlumyx/chat-ia",
    architecture: {
      summary:
        "Arquitectura híbrida de dos canales desacoplados: una interfaz web con streaming de tokens palabra por palabra, y un webhook de WhatsApp de respuesta ultra rápida (<50ms) respaldado por una cola durable en PostgreSQL con procesamiento asíncrono vía workers.",
      diagram: `  ┌─ INGESTA OFFLINE ────────────────────────────────────────────────────────┐
  │   data/*.md  ──▶  TextSplitter  ──▶  Gemini Embeddings (768d)  ──▶  Vector  │
  └─────────────────────────────────────┬────────────────────────────────────┘
                                        ▼
                          ┌───────────────────────────┐
                          │     Supabase Postgres     │
                          │   - documents (pgvector)  │
                          │   - roles / empleados     │
                          │   - webhook_queue         │
                          └───────────────────────────┘
                                 ▲             ▲
    CANAL 1: CHAT WEB            │             │      CANAL 2: WHATSAPP CLOUD API
   ┌─────────────────────────────┴┐           ┌┴────────────────────────────────────────┐
   │ Next.js (/api/chat)          │           │ Webhook (/api/whatsapp) ──▶ HTTP 200 OK │
   │ ──▶ RAG + SQL Tools (Zod)    │           │ ──▶ Worker (FOR UPDATE SKIP LOCKED)     │
   │ ──▶ Token Streaming SSE      │           │ ──▶ Despacho vía Meta Graph API v21.0   │
   └──────────────────────────────┘           └─────────────────────────────────────────┘`,
      keyPoints: [
        "RAG sin alucinaciones: Búsqueda semántica con distancia coseno sobre vectores de 768 dimensiones con temperature 0 para respuestas exactas.",
        "SQL Tools tipadas con Zod: Consultas dinámicas a base de datos relacional para empleados y roles sin exponer consultas abiertas.",
        "Cola durable desacoplada: El webhook de WhatsApp persiste eventos en 'webhook_queue' y confirma HTTP 200 a Meta en milisegundos para evitar timeouts.",
        "Workers concurrentes seguros: Procesamiento en segundo plano utilizando PostgreSQL 'FOR UPDATE SKIP LOCKED' para evitar condiciones de carrera.",
        "Resiliencia Multi-Model: Fallback automático entre gemini-flash-latest, gemini-3.5-flash y gemini-3.7-flash ante límites de cuota HTTP 429.",
        "Aislamiento de seguridad: Tablas sensibles protegidas a nivel de sistema para mitigar ataques de Prompt Injection.",
      ],
    },
    features: [
      "Búsqueda semántica de alta precisión sobre políticas, normativas y guías técnicas en Markdown.",
      "Consultas en lenguaje natural a base de datos corporativa mediante Function Calling.",
      "Interfaz web con streaming de tokens en tiempo real, renderizado Markdown y syntax highlighting.",
      "Canal de mensajería empresarial en WhatsApp con verificación de webhook e idempotencia.",
      "Cola asíncrona con política de reintentos exponenciales y Dead Letter Queue (DLQ).",
      "Persistencia de conversaciones y sesiones con Supabase.",
    ],
    techStack: [
      {
        layer: "Frontend & Web UI",
        tech: "Next.js (App Router) + React 19 + Tailwind CSS v4",
        purpose: "Interfaz interactiva con streaming de respuestas en vivo y diseño responsive.",
      },
      {
        layer: "Orquestación IA",
        tech: "LangChain.js + Zod",
        purpose: "Cadenas RAG, vector stores, prompt templates y validación estricta de Tools.",
      },
      {
        layer: "Modelos LLM & Embeddings",
        tech: "Google Gemini (flash + embedding-001)",
        purpose: "Inferencia contextual, generación de respuestas y vectores de 768 dimensiones.",
      },
      {
        layer: "Base de Datos & VectorStore",
        tech: "Supabase (PostgreSQL + pgvector)",
        purpose: "Almacenamiento de embeddings, tablas de negocio y cola durable de mensajería.",
      },
      {
        layer: "Integración Móvil",
        tech: "Meta WhatsApp Cloud API (Graph API v21.0)",
        purpose: "Recepción de mensajes por webhook y despacho automatizado de respuestas.",
      },
    ],
    creationNotes: [
      "Creado para resolver el problema de soporte y onboarding interno, unificando la base de conocimiento corporativa tanto en la intranet web como en WhatsApp.",
      "El principal reto de ingeniería fue diseñar el desacoplamiento del webhook para responder a Meta antes del umbral de timeout de 3 segundos, delegando la inferencia del LLM a un worker concurrente.",
    ],
  },
  {
    slug: "condominio",
    title: "Condominio App",
    tagline: "PWA para Administración, Inmuebles y Control Financiero de Condominios",
    description:
      "Aplicación Progresiva (PWA) diseñada para el control administrativo de condominios y edificios residenciales. Permite gestionar inmuebles (edificios, pisos, apartamentos), propietarios, registro de gastos comunes, emisión de cuotas y conciliación de pagos con cálculo de balances en tiempo real.",
    status: "En desarrollo",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Supabase Auth",
      "Tailwind CSS v4",
      "PWA (Serwist)",
      "Server Actions",
      "Vitest",
    ],
    githubUrl: "https://github.com/verlumyx/condominio",
    architecture: {
      summary:
        "Arquitectura Server-Driven con Next.js 16 App Router y Supabase. Utiliza Server Components para renderizado ultraligero, Server Actions para operaciones transaccionales y Serwist como Service Worker para capacidades PWA e instalación en dispositivos móviles.",
      diagram: `  ┌─ PWA CLIENTE (Next.js 16 + React 19 + Tailwind v4) ────────────────────┐
  │   Instalable como PWA + Service Worker (@serwist/next)                 │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Server Actions / Server Components
                                      ▼
  ┌─ SERVIDOR NEXT.JS (Runtime Node) ──────────────────────────────────────┐
  │   - Autenticación y control de sesión con Supabase Auth               │
  │   - Validación de datos en servidor con esquemas Zod                   │
  │   - Lógica de prorrateo, cálculo de alícuotas y estados de cuenta      │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Consultas SQL Transaccionales
                                      ▼
  ┌─ SUPABASE (PostgreSQL 16) ─────────────────────────────────────────────┐
  │   - Tablas: edificios, pisos, apartamentos, propietarios               │
  │   - Transacciones: gastos, cuotas_emision, pagos_recibos               │
  │   - Vistas calculadas: v_saldos_apartamentos, v_historico_balances     │
  └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "Arquitectura Server-First: Menor payload de JavaScript en el cliente y validaciones seguras en el servidor mediante Server Actions y Zod.",
        "Soporte PWA Completo: Configuración con @serwist/next con Service Worker y manifiesto para uso directo como app móvil o de escritorio.",
        "Consistencia contable en PostgreSQL: Vistas SQL especializadas para saldos y deudas, evitando desfaces de concurrencia y simplificando consultas complejas.",
        "Autenticación segura: Flujo de inicio de sesión con Supabase Auth y cookies de sesión HttpOnly.",
        "Suite de pruebas: Cobertura de pruebas unitarias con Vitest para validar algoritmos de cálculo de cuotas y saldos.",
      ],
    },
    features: [
      "Administración jerárquica de inmuebles: edificios, pisos, alícuotas y apartamentos.",
      "Registro de propietarios con historial de contacto y unidades asociadas.",
      "Carga y distribución de gastos operativos ordinarios y fondos de reserva.",
      "Registro de pagos con soporte para comprobantes y conciliación de saldos.",
      "Cálculo automatizado de saldos a favor, deudas y morosidad por apartamento.",
      "Instalabilidad PWA offline-ready para acceso ágil desde teléfonos inteligentes.",
    ],
    techStack: [
      {
        layer: "Framework Fullstack",
        tech: "Next.js 16 + React 19 + TypeScript",
        purpose: "Renderizado en servidor, Server Actions y navegación instantánea.",
      },
      {
        layer: "PWA & Offline",
        tech: "Serwist (@serwist/next)",
        purpose: "Service worker, caching inteligente e instalabilidad nativa PWA.",
      },
      {
        layer: "Base de Datos & Auth",
        tech: "Supabase (PostgreSQL 16) + Supabase Auth",
        purpose: "Base de datos relacional, vistas calculadas y control de sesiones seguras.",
      },
      {
        layer: "Estilos",
        tech: "Tailwind CSS v4",
        purpose: "Diseño moderno, adaptativo y enfocado en usabilidad táctil y móvil.",
      },
      {
        layer: "Testing",
        tech: "Vitest + Playwright",
        purpose: "Pruebas unitarias de cálculos financieros y pruebas E2E.",
      },
    ],
    creationNotes: [
      "Nació como respuesta a la necesidad de modernizar la gestión manual en papel o Excel que muchos administradores de condominios llevan a cabo.",
      "Se eligió una PWA para ofrecer la inmediatez de una app móvil sin los costes de publicación en tiendas de aplicaciones ni duplicación de código.",
    ],
  },
  {
    slug: "erp-ecommerce",
    title: "ERP & eCommerce",
    tagline: "Plataforma Modular Multiempresa y Tienda en Línea",
    description:
      "Sistema ERP de nivel empresarial estructurado en módulos desacoplados por dominio de negocio (catálogo, inventario multi-almacén, compras, ventas y logística), integrado con una tienda en línea eCommerce. Construido con Laravel 12, Inertia.js 2 y React 19 sobre un entorno hermético en Docker.",
    status: "En desarrollo",
    tags: [
      "Laravel 12",
      "Inertia.js 2",
      "React 19",
      "PostgreSQL 16",
      "Docker",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "PHP 8.3",
    ],
    githubUrl: "https://github.com/verlumyx/erp",
    secondaryGithubUrl: {
      label: "eCommerce Storefront",
      url: "https://github.com/verlumyx/ecommerce_erp",
    },
    architecture: {
      summary:
        "Arquitectura modular por dominios de negocio (app/Modules/*) en Laravel 12 con PostgreSQL 16. La interfaz interactiva opera como SPA mediante Inertia.js 2 y React 19 sin la fricción de endpoints REST separados, todo orquestado en Docker Compose.",
      diagram: `  ┌─ FRONTEND SPA (Inertia.js 2 + React 19 + TypeScript) ──────────────────┐
  │   Experiencia fluida de SPA reactiva con validación y navegación rica  │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Inertia Protocol (JSON payloads)
                                      ▼
  ┌─ BACKEND LARAVEL 12 (Arquitectura Modular por Dominio) ────────────────┐
  │   app/Modules/                                                         │
  │     ├── Company/   (Tenancy multiempresa y configuración)              │
  │     ├── User/Role/ (RBAC, permisos granulares y auditoría)             │
  │     ├── Catalog/   (Productos, atributos, variantes y categorías)      │
  │     ├── Inventory/ (Multi-almacén, existencias y movimientos)          │
  │     ├── Purchase/  (Órdenes de compra, recepción y proveedores)        │
  │     ├── Sale/      (Presupuestos, pedidos y facturación)               │
  │     └── Logistics/ (Despacho, empaque y seguimiento de envíos)         │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │ Eloquent ORM + Soft Deletes
                                      ▼
  ┌─ INFRAESTRUCTURA CONTENERIZADA (Docker Compose + Makefile) ────────────┐
  │   - erp_app: PHP-FPM 8.3 + Node.js                                     │
  │   - erp_nginx: Servidor web y reverse proxy                            │
  │   - erp_postgres: PostgreSQL 16 con índices relacionales               │
  │   - vite_dev: Servidor HMR en puerto dedicado para desarrollo rápido   │
  └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "Modularidad por dominio (DDD): Cada módulo en 'app/Modules/<Dominio>' encapsula sus modelos, controladores, migraciones y vistas, permitiendo escalabilidad limpia.",
        "Productividad Fullstack con Inertia.js 2: Toda la potencia del backend Laravel conectada de forma directa con componentes React 19 sin duplicar lógica de API.",
        "Soporte Multiempresa y RBAC estricto: Aislamiento por empresa en cada sesión con control de roles y permisos granulares a nivel de función.",
        "Inmutabilidad y política de no borrado: Uso exhaustivo de soft-deletes en operaciones transaccionales para garantizar auditoría fiscal continua.",
        "Entorno Dockerizado y Makefile: Todo el ciclo de desarrollo se orquesta con Docker Compose y Make ('make dev', 'make watch', 'make assets').",
      ],
    },
    features: [
      "Catálogo avanzado con atributos dinámicos, variantes de producto y categorías jerárquicas.",
      "Gestión de inventario en tiempo real con trazabilidad por almacén y movimientos de stock.",
      "Flujo integral de compras: cotizaciones a proveedores, órdenes de compra y recepción.",
      "Ventas y pedidos: presupuestos, confirmación de ventas y facturación.",
      "Módulo de logística: preparación de pedidos (picking/packing) y control de despachos.",
      "Sincronización nativa con el catálogo y pedidos del repositorio de tienda online.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel 12 + PHP 8.3",
        purpose: "Arquitectura modular por dominios, ORM Eloquent, migraciones y seguridad.",
      },
      {
        layer: "Frontend / SPA",
        tech: "Inertia.js 2 + React 19 + TypeScript",
        purpose: "SPA reactiva con tipado seguro y componentes modernos sin API REST redundante.",
      },
      {
        layer: "Base de Datos",
        tech: "PostgreSQL 16",
        purpose: "Motor relacional ACID con soporte para JSONB e índices optimizados.",
      },
      {
        layer: "Contenedores & DevOps",
        tech: "Docker + Docker Compose + Makefile",
        purpose: "Entorno reproducible con PHP-FPM, Nginx, Postgres y Vite.",
      },
      {
        layer: "Herramientas de Build",
        tech: "Vite + Tailwind CSS",
        purpose: "Compilación de assets con recarga rápida (HMR).",
      },
    ],
    creationNotes: [
      "Concebido como un ERP moderno y accesible para sustituir sistemas legados costosos y rígidos.",
      "La arquitectura modular permite que una empresa habilite progresivamente únicamente los módulos que requiere, facilitando además la integración directa con eCommerce.",
    ],
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
  { href: "#empresas", label: "Empresas" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];
