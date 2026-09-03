import { projects } from "@/lib/profile";
import { ArrowUpRightIcon } from "./Icons";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="proyectos" eyebrow="03 — Proyectos" title="Trabajo destacado">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {projects.map((p) => {
          const inner = (
            <>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                {p.url && (
                  <ArrowUpRightIcon className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-accent" />
                )}
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {p.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </>
          );
          const cls =
            "group flex flex-col bg-background p-8 transition-colors hover:bg-surface";
          return p.url ? (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cls}
            >
              {inner}
            </a>
          ) : (
            <article key={p.title} className={cls}>
              {inner}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
