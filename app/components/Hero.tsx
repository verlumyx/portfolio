import { profile } from "@/lib/profile";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
} from "./Icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--accent-soft),transparent_55%)] opacity-70"
      />
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-2xl font-medium tracking-tight text-muted md:text-3xl">
          {profile.role}{" "}
          <span className="text-foreground">
            · <span className="text-accent">{profile.stack}</span>
          </span>
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Desarrollador Full Stack con más de 6 años de experiencia construyendo sistemas ERP y aplicaciones web escalables con Laravel, React, Next.js y Node.js. Destaco por mi capacidad para diseñar, mantener y optimizar plataformas de alto rendimiento orientadas a un gran volumen de usuarios, logrando reducir tiempos de procesamiento de datos críticos de horas a segundos. Especializado en integrar IA en productos reales: automatizaciones con Claude (Anthropic) y MCP, asistentes con RAG y function calling, y agentes conectados a CRMs que automatizan áreas de soporte. Busco equipos remotos que valoren el código limpio, arquitecturas sólidas (TypeScript end-to-end) y un impacto medible en el negocio.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Hablemos
            <ArrowUpRightIcon />
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-foreground"
          >
            <DownloadIcon />
            Descargar CV
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <p className="mt-12 inline-flex items-center gap-2 text-sm text-subtle">
          <MapPinIcon className="text-accent" />
          {profile.location}
        </p>
      </div>
    </section>
  );
}
