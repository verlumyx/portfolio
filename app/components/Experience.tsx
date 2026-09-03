import { experience } from "@/lib/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experiencia" eyebrow="02 — Experiencia" title="Trayectoria">
      <ol className="relative border-l border-border">
        {experience.map((job) => (
          <li key={job.company} className="pb-14 pl-8 last:pb-0 md:pl-12">
            <span
              className={`absolute -left-[5px] mt-2 h-[9px] w-[9px] rounded-full ${
                job.current ? "bg-accent" : "bg-border"
              }`}
            />
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-1 text-accent">{job.company}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-subtle">
                {job.period}
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {job.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
