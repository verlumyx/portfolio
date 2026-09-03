import { skills } from "@/lib/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="habilidades" eyebrow="04 — Habilidades" title="Stack técnico">
      <div className="divide-y divide-border border-y border-border">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 py-6 md:grid-cols-4 md:gap-8"
          >
            <h3 className="text-sm font-medium md:col-span-1">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-3">
              {group.items.map((item) => (
                <li key={item} className="text-[15px] text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
