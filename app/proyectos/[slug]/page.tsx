import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/profile";
import { ArrowUpRightIcon, GithubIcon } from "@/app/components/Icons";
import { ThemeToggle } from "@/app/components/ThemeToggle";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Proyecto no encontrado — ${profile.name}`,
    };
  }

  return {
    title: `${project.title} — Arquitectura y Detalles | ${profile.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <Link
            href="/#proyectos"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Volver al portafolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        {/* Project Header */}
        <section className="border-b border-border pb-12 md:pb-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium ${
                project.status === "Completado"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  project.status === "Completado"
                    ? "bg-emerald-500"
                    : "bg-amber-500 animate-pulse"
                }`}
              />
              {project.status}
            </span>

            <span className="font-mono text-xs text-subtle">
              Desarrollado por {profile.name}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 text-xl font-medium leading-relaxed text-muted md:text-2xl">
            {project.tagline}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              <GithubIcon />
              <span>Ver repositorio en GitHub</span>
              <ArrowUpRightIcon />
            </a>

            {project.secondaryGithubUrl && (
              <a
                href={project.secondaryGithubUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                <GithubIcon />
                <span>{project.secondaryGithubUrl.label}</span>
                <ArrowUpRightIcon />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                <span>Ver demo en vivo</span>
                <ArrowUpRightIcon />
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">
              Tecnologías clave
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* System Architecture */}
        <section className="border-b border-border py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Ingeniería &amp; Diseño
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Arquitectura del Sistema
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {project.architecture.summary}
          </p>

          {project.architecture.diagram && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface/80 p-4 md:p-6">
              <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-mono text-xs text-subtle">
                  Diagrama de flujo &amp; topología
                </span>
                <span className="font-mono text-xs text-accent">
                  {project.slug}.architecture
                </span>
              </div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-foreground md:text-sm">
                <code>{project.architecture.diagram}</code>
              </pre>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold tracking-tight">
              Puntos clave de la arquitectura
            </h3>
            <ul className="mt-4 space-y-3">
              {project.architecture.keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="border-b border-border py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Ecosistema
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Stack Tecnológico Detallado
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface/40">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {project.techStack.map((item) => (
                <div key={item.layer} className="p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {item.layer}
                  </span>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    {item.tech}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="border-b border-border py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Capacidades
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Características Principales
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((feature, idx) => (
              <div
                key={feature}
                className="flex items-start gap-3.5 rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
                  {idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Creation notes / Engineering decisions */}
        <section className="py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Decisiones de Ingeniería
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            ¿Cómo se creó este proyecto?
          </h2>

          <div className="mt-6 space-y-4">
            {project.creationNotes.map((note) => (
              <p
                key={note}
                className="rounded-xl border border-border/80 bg-surface/50 p-5 text-base leading-relaxed text-muted"
              >
                {note}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-8">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                ¿Quieres revisar el código fuente completo?
              </h3>
              <p className="mt-1 text-sm text-muted">
                El repositorio público contiene el historial de commits, pruebas e instrucciones de ejecución.
              </p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              <GithubIcon />
              <span>Explorar en GitHub</span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>
      </main>

      {/* Detail Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
          <Link
            href="/#proyectos"
            className="text-muted hover:text-foreground transition-colors"
          >
            ← Volver a todos los proyectos
          </Link>
        </div>
      </footer>
    </div>
  );
}
