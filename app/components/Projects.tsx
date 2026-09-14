import { projects } from "@/lib/profile";
import { ArrowUpRightIcon, GithubIcon } from "./Icons";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="03 — Proyectos"
      title="Trabajos destacados & Repositorios"
    >
      <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-muted">
        Proyectos personales con código abierto, arquitecturas modernas y soluciones técnicas reales disponibles para revisión en mi perfil de GitHub.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          return (
            <article
              key={p.slug}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                      p.status === "Completado"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.status === "Completado"
                          ? "bg-emerald-500"
                          : "bg-amber-500 animate-pulse"
                      }`}
                    />
                    {p.status}
                  </span>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    title="Ver repositorio en GitHub"
                    aria-label={`Ver repositorio de ${p.title} en GitHub`}
                  >
                    <GithubIcon />
                  </a>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  <a
                    href={`/proyectos/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-hidden"
                  >
                    {p.title}
                  </a>
                </h3>

                <p className="mt-1 font-mono text-xs text-accent">
                  {p.tagline}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-4">
                  {p.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 5).map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent"
                    >
                      {t}
                    </li>
                  ))}
                  {p.tags.length > 5 && (
                    <li className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-subtle">
                      +{p.tags.length - 5}
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-4">
                <a
                  href={`/proyectos/${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  <span>Ver arquitectura &amp; detalle</span>
                  <ArrowUpRightIcon className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

