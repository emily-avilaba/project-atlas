export default function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="relative h-[620px]">

        <img
          src="/images/contacto/Imagen de contacto.png"
          alt="PKF Guatemala"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0A2555]/75" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-center px-6 lg:px-8">

          <div className="max-w-2xl text-white">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Contacto
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] leading-tight">
              Estamos listos para escuchar  
              <br />
              y acompañar a su organización.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Cada organización enfrenta retos distintos. Nuestro equipo está listo para escucharle y acompañarle con soluciones adaptadas a sus necesidades.
            </p>

            <div className="mt-10">

              <a
                href="/contacto"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#0A2555] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F26E1E] hover:text-white"
              >
                Hablemos

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