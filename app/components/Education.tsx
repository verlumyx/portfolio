import { certifications, education, languages } from "@/lib/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="formacion" eyebrow="05 — Formación" title="Educación y cursos">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-12 md:col-span-2">
          <div>
            <p className="mb-4 text-sm font-medium">Educación</p>
            <h3 className="text-xl font-semibold tracking-tight">
              {education.degree}
            </h3>
            <p className="mt-1 text-muted">{education.institution}</p>
            <span className="mt-3 inline-block rounded-md bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
              {education.status}
            </span>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium">Idiomas</p>
            <ul className="space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4 text-[15px]">
                  <span>{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-sm font-medium">Cursos y certificaciones</p>
          <ul className="divide-y divide-border border-y border-border">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <div>
                  <p className="text-[15px]">{c.title}</p>
                  <p className="mt-0.5 text-sm text-subtle">{c.issuer}</p>
                </div>
                <span className="font-mono text-xs text-subtle">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
