export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0a2555] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-55"
          src="/videos/hero-home.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2555]/85 via-[#0a2555]/70 to-[#0a2555]/35" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1320px] items-center px-5 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            PKF Guatemala
          </p>

          <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Visión Global, Enfoque Local.
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-8 text-white/80 sm:text-lg">
            Brindamos soluciones profesionales que generan confianza y fortalecen la toma de decisiones de las orgnizaciones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a2555] transition hover:bg-white/90"
            >
              Ver servicios
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Contáctanos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-white/75">
            <span className="h-px w-12 bg-white/35" />
            <span>Red global · Enfoque local · Confianza técnica</span>
          </div>
        </div>
      </div>
    </section>
  );
}