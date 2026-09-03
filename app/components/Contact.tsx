import { profile } from "@/lib/profile";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";
import { Section } from "./Section";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Teléfono",
    value: profile.phone,
    href: profile.phoneHref,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gibmyx-gomez",
    href: profile.social.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/verlumyx",
    href: profile.social.github,
    Icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contacto" eyebrow="06 — Contacto" title="Hablemos">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-muted">
            ¿Tienes un proyecto o una vacante remota? Escríbeme y te respondo
            lo antes posible.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Enviar correo
            <ArrowUpRightIcon />
          </a>
        </div>
        <ul className="divide-y divide-border border-y border-border md:col-span-3">
          {links.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
              >
                <Icon className="text-subtle transition-colors group-hover:text-accent" />
                <span className="w-24 text-sm text-subtle">{label}</span>
                <span className="flex-1 break-all text-[15px]">{value}</span>
                <ArrowUpRightIcon className="text-subtle opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
