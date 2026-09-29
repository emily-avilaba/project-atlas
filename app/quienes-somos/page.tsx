import Link from "next/link";
import PageHero from "@/components/shared/PageHero";


function CardLine() {
  return (
    <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
      <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">

      {/* HERO */}

      <section className="relative overflow-hidden text-white">

  <img
    src="/images/quienes-somos/hero.png"
    alt="PKF Guatemala"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-[#0A2555]/75" />

  <div className="relative px-5 py-24 lg:px-8">

    <div className="mx-auto max-w-[1320px]">

      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
        Quiénes somos
      </p>

      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Una firma con visión global y enfoque local.
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/80 sm:text-lg">
        Conoce la historia, misión, visión y valores que dan forma a
        ARÉVALO PÉREZ, IRALDA Y ASOCIADOS.
      </p>

    </div>

  </div>

</section>

      {/* HISTORIA */}

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Nuestra historia
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Más de 25 años acompañando empresas.
            </h2>

            <div className="mt-6 space-y-6 text-[15px] leading-8 text-slate-600">

              <p>
                <span className="font-semibold text-[#0a2555]">
                  ARÉVALO PÉREZ, IRALDA Y ASOCIADOS
                </span>{" "}
                es una firma dedicada a prestar servicios profesionales como:
                Servicio de auditoría externa, consultoría de negocios,
                soluciones de negocios y consultoría fiscal.
              </p>

              <p>
                <span className="font-semibold text-[#0a2555]">
                  PKF Guatemala
                </span>{" "}
                es miembro de{" "}
                <span className="font-semibold text-[#0a2555]">
                  PKF Global
                </span>{" "}
                desde hace más de 25 años, la cual pertenece a una red de
                firmas internacionales cuya sede se encuentra en Londres,
                Inglaterra, con más de 100 años de experiencia.
              </p>

            </div>

            <CardLine />

          </article>

          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">

            <img
              src="/images/quienes-somos/oficina.png"
              alt="Oficina PKF Guatemala"
              className="h-full min-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </article>

        </div>
      </section>
            {/* MISIÓN Y VISIÓN */}

      <section className="px-5 py-4 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-2">

          <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Misión
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Acompañar a nuestros clientes con soluciones que generen confianza.
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Dirigir nuestros esfuerzos, experiencias y conocimientos
              profesionales hacia nuestros clientes para ayudarlos a ser más
              competitivos, rentables y a mejorar y desarrollarse
              continuamente, en el mercado global de negocios. Brindando
              soluciones integrales que satisfagan los requerimientos de
              nuestros clientes con la mejor combinación de experiencia,
              competencias y compromiso.
            </p>

            <CardLine />

          </article>

          <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Visión
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Ser el aliado confiable para empresas que buscan crecer.
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Ser una firma de Servicios Profesionales de alta calidad y
              reconocido prestigio, que satisfaga y exceda las necesidades y
              expectativas de nuestros clientes, creando un nivel de desarrollo
              integral, tanto de sus negocios y clientes, como de cada miembro
              de nuestro equipo de profesionales.
            </p>

            <CardLine />

          </article>

        </div>
      </section>

      {/* VALORES */}

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Nuestros valores
            </p>
            <div className="mx-auto mt-2 h-px w-20 bg-[#0a2555]" />
            <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-8 text-slate-600">
              Nuestros valores guían la forma en que nos relacionamos, definen
              nuestras convicciones y reflejan nuestro compromiso con principios
              compartidos, permitiéndonos trabajar juntos más allá de las
              fronteras.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
            <img
              src="/images/quienes-somos/arbol-valores.png"
              alt="Árbol de valores de PKF Guatemala"
              className="mx-auto w-full max-w-5xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="overflow-hidden rounded-3xl bg-[#0a2555] px-6 py-10 text-white shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  PKF Guatemala
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Conoce más sobre nuestra firma y nuestra forma de trabajar.
                </h2>

                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75">
                  Si quieres saber más sobre nuestro enfoque, nuestra cultura y
                  cómo acompañamos a las organizaciones, estamos listos para
                  conversar contigo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a2555] transition hover:bg-white/90">
                  Contáctanos
                </Link>

                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Ver servicios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}