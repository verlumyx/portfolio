import Image from "next/image";
import { companies } from "@/lib/profile";
import { ArrowUpRightIcon } from "./Icons";

export function Companies() {
  return (
    <section
      id="empresas"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Confianza &amp; Trayectoria
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Empresas con las que he trabajado
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted md:max-w-xs md:text-right">
            Experiencia comprobada en sistemas de misión crítica, ERPs y plataformas web escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((company) => {
            const cardInner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 p-2 shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                      company.logoBg ?? "bg-white"
                    }`}
                  >
                    <Image
                      src={company.logo}
                      alt={`Logo de ${company.name}`}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  {company.url && (
                    <ArrowUpRightIcon className="shrink-0 text-subtle transition-colors group-hover:text-accent" />
                  )}
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                        {company.name}
                      </h3>
                      <span className="font-mono text-xs text-subtle">
                        {company.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-mono text-accent">
                      {company.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {company.description}
                    </p>
                  </div>
                </div>
              </>
            );

            const cardClasses =
              "group flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:border-accent/50 hover:bg-surface hover:shadow-xs";

            return company.url ? (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardInner}
              </a>
            ) : (
              <article key={company.name} className={cardClasses}>
                {cardInner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
