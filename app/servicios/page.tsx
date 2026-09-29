import Link from "next/link";

const services = [
  {
    title: "SERVICIOS DE AUDITORÍA",
    iconSrc: "/icons/services/assurance.svg",
    items: [
      "Auditoría de estados financieros",
      "Evaluación de controles internos",
      "Servicios externos de auditoría interna y contraloría financiera",
      "Auditoría SOX",
    ],
  },
  {
    title: "ASESORÍA FISCAL",
    iconSrc: "/icons/services/tax.svg",
    items: [
      "Elaboración de diagnósticos fiscales",
      "Impugnación de ajustes fiscales",
      "Consultoría fiscal permanente",
    ],
  },
  {
    title: "NUEVOS NEGOCIOS / FINANZAS CORPORATIVAS",
    iconSrc: "/icons/services/corporate-finance.svg",
    items: [
      "Análisis de inversiones y nuevos negocios",
      "Valuación de negocios para adquisiciones y/o fusiones",
      "Elaboración de planes de negocios",
      "Finanzas corporativas",
    ],
  },
  {
    title: "CONSULTORÍA DE NEGOCIOS",
    iconSrc: "/icons/services/advisory.svg",
    items: [
      "Planeación estratégica",
      "Análisis de posición competitiva",
      "Mejoramiento de negocios (BPI)",
      "Reestructuraciones administrativas",
      "Sistemas de información",
    ],
  },
  {
    title: "SOLUCIONES DE NEGOCIOS",
    iconSrc: "/icons/services/business-solutions.svg",
    items: [
      "Revisión de estados financieros mensuales y/o trimestrales",
      "Depuración de cuentas de balance",
      "Compilación de estados financieros",
      "Outsourcing de contabilidad",
    ],
  },
];

function ServiceCard({
  title,
  iconSrc,
  items,
}: {
  title: string;
  iconSrc: string;
  items: string[];
}) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
      <div className="flex justify-center">
        <img
          src={iconSrc}
          alt={title}
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-6 text-center text-[15px] font-semibold uppercase leading-6 tracking-[0.04em] text-[#0a2555]">
        {title}
      </h3>

      <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f26e1e]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex justify-end pt-10">
        <Link
          href="/contacto"
          className="group inline-flex items-center gap-3 rounded-full bg-[#0A2555] px-7 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)]"
        >
          Conversemos
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
      </div>
    </article>
  );
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      {/* HERO */}
<section className="relative min-h-[520px] overflow-hidden text-white">
  {/* Imagen */}
  <img
    src="/images/servicios/hero.png"
    alt="Servicios profesionales de PKF Guatemala"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay azul */}
  <div className="absolute inset-0 bg-[#0a2555]/75" />

  {/* Degradado para mejorar lectura */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0a2555]/90 via-[#0a2555]/55 to-transparent" />

  {/* Contenido */}
  <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1320px] items-center px-5 py-20 lg:px-8">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
        Servicios
      </p>

      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Soluciones profesionales para decisiones que generan valor.
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/85 sm:text-lg">
        Combinamos experiencia, conocimiento técnico y acompañamiento cercano
        para responder a las necesidades de nuestros clientes.
      </p>
    </div>
  </div>
</section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}