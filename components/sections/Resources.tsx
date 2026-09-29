type Resource = {
  type: string;
  title: string;
  date: string;
  href: string;
  kind: "pdf" | "image" | "video";
};

const resources: Resource[] = [
  {
    type: "NEWSLETTER",
    title: "Actualidad fiscal Guatemala",
    date: "Mayo 2026",
    href: "/resources/newsletters/tax-newsletter-q2-2026.pdf",
    kind: "pdf",
  },
  {
    type: "PUBLICACIÓN",
    title: "Informe de auditoría recurso",
    date: "Mayo 2026",
    href: "/resources/publications/Informe%20de%20auditoría%20recurso.png",
    kind: "image",
  },
  {
    type: "VIDEO",
    title: "NIA 700",
    date: "Mayo 2026",
    href: "/resources/videos/video-NIA700.mp4",
    kind: "video",
  },
];

function FeaturedResourceCard({ type, title, date, href, kind }: Resource) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)] lg:col-span-1 lg:row-span-2">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f7f5]">
        {kind === "pdf" && (
          <>
            <img
              src="/resources/newsletters/tax-newsletter-q2-2026-cover.png"
              alt="PKF Worldwide Tax Newsletter Q2 2026"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a2555] backdrop-blur-sm">
              {type}
            </div>
          </>
        )}

        {kind === "image" && (
          <>
            <img
              src={href}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {type}
            </div>
          </>
        )}

        {kind === "video" && (
          <>
            <video
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={href}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {type}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a2555]">
          {date}
        </p>

        <h3 className="mt-3 text-[18px] font-semibold leading-7 tracking-[-0.02em] text-[#0a2555]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Consulta contenido oficial de PKF para mantenerte al día con
          actualizaciones fiscales, auditoría y conocimiento técnico.
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#0a2555] transition group-hover:text-[#f26e1e]"
        >
          Abrir
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}

function SmallResourceCard({ type, title, date, href, kind }: Resource) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f7f5]">
        {kind === "image" && (
          <>
            <img
              src={href}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {type}
            </div>
          </>
        )}

        {kind === "video" && (
          <>
            <video
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={href}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {type}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a2555]">
          {date}
        </p>

        <h3 className="mt-3 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-[#0a2555]">
          {title}
        </h3>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#0a2555] transition group-hover:text-[#f26e1e]"
        >
          Abrir
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}

export default function Resources() {
  return (
    <section id="recursos" className="bg-[#f7f7f5] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
            Recursos que impulsan tu crecimiento
          </p>
          <div className="mx-auto mt-2 h-px w-20 bg-[#0a2555]" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <FeaturedResourceCard {...resources[0]} />

          <div className="grid gap-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <SmallResourceCard {...resources[1]} />
              <SmallResourceCard {...resources[2]} />
            </div>

            <div className="flex justify-end">
              <a
                href="/recursos"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#0A2555] bg-white px-7 py-3 text-lg font-bold text-[#0A2555] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F26E1E] hover:bg-[#0A2555] hover:text-white hover:shadow-lg"
              >
                Aprende más
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}