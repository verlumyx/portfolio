import { profile, softSkills } from "@/lib/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="01 — Sobre mí" title="Perfil profesional">
      <div className="grid gap-12 md:grid-cols-5">
        <p className="text-lg leading-relaxed text-muted md:col-span-3">
          {profile.summary}
        </p>
        <div className="md:col-span-2">
          <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-0 md:divide-y md:divide-border">
            {profile.highlights.map((h) => (
              <div key={h.label} className="md:flex md:items-baseline md:gap-4 md:py-4">
                <dt className="text-3xl font-semibold tracking-tight text-accent md:w-20">
                  {h.value}
                </dt>
                <dd className="mt-1 text-sm text-muted md:mt-0">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-14">
        <p className="mb-4 text-sm font-medium">Habilidades blandas</p>
        <ul className="flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
