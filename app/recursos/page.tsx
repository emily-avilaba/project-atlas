const resources = [
  {
    type: "Newsletter",
    title: "PKF Worldwide Tax Update",
    date: "June 2026",
    description:
      "Resumen de cambios fiscales globales con perspectivas prácticas de la red PKF.",
    href: "/resources/newsletters/tax-newsletter-q2-2026.pdf",
    image: "/resources/newsletters/tax-newsletter-q2-2026-cover.png",
  },
  {
    type: "Publicación",
    title: "Informe de auditoría recurso",
    date: "Mayo 2026",
    description:
      "Una pieza visual para acompañar contenido técnico y de marca de PKF.",
    href: "/resources/publications/Informe%20de%20auditoría%20recurso.png",
    image: "/resources/publications/Informe%20de%20auditoría%20recurso.png",
  },
  {
    type: "Video",
    title: "NIA 700",
    date: "Mayo 2026",
    description:
      "Contenido audiovisual para reforzar el aprendizaje y la comunicación técnica.",
    href: "/resources/videos/video-NIA700.mp4",
    image: "/resources/videos/video-NIA700.mp4",
  },
];

const filters = ["Todos", "Newsletters", "Publicaciones", "Videos", "Insights"];

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      {/* HERO */}
<section className="relative min-h-[520px] overflow-hidden text-white">
  {/* Imagen */}
  <img
    src="/images/recursos/hero.png"
    alt="Knowledge Hub de PKF Guatemala"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay azul */}
  <div className="absolute inset-0 bg-[#0a2555]/75" />

  {/* Degradado para mejorar la lectura */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0a2555]/90 via-[#0a2555]/55 to-transparent" />

  {/* Contenido */}
  <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1320px] items-center px-5 py-20 lg:px-8">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
        Knowledge Hub
      </p>

      <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Conocimiento que genera confianza.
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/85 sm:text-lg">
        Encuentra newsletters, publicaciones y materiales audiovisuales de PKF
        pensados para compartir ideas, análisis y perspectivas que ayudan a
        tomar mejores decisiones.
      </p>
    </div>
  </div>
</section>

      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
                Explora por categoría
              </p>
              <div className="mt-2 h-px w-20 bg-[#0a2555]" />
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0a2555] transition hover:border-[#f26e1e] hover:text-[#f26e1e]"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f7f5]">
                  {resource.title === "NIA 700" ? (
                    <video
                      src={resource.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a2555] backdrop-blur-sm">
                    {resource.type}
                  </div>
                </div>

                <div className="flex flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a2555]">
                    {resource.date}
                  </p>

                  <h3 className="mt-3 text-[18px] font-semibold leading-7 tracking-[-0.02em] text-[#0a2555]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>

                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a2555] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f]"
                  >
                    Abrir
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}