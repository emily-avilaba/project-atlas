import Link from "next/link";
type Service = {
  title: string;
  iconSrc: string;
};

const services: Service[] = [
  {
    title: "SERVICIOS DE AUDITORÍA",
    iconSrc: "/icons/services/assurance.svg",
  },
  {
    title: "ASESORÍA FISCAL",
    iconSrc: "/icons/services/tax.svg",
  },
  {
    title: "NUEVOS NEGOCIOS / FINANZAS CORPORATIVAS",
    iconSrc: "/icons/services/corporate-finance.svg",
  },
  {
    title: "CONSULTORÍA DE NEGOCIOS",
    iconSrc: "/icons/services/advisory.svg",
  },
  {
    title: "SOLUCIONES DE NEGOCIOS",
    iconSrc: "/icons/services/business-solutions.svg",
  },
];

function ServiceCard({ title, iconSrc }: Service) {
  return (
    <article className="group flex min-h-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F26E1E]/40 hover:shadow-lg">
      <div className="flex flex-1 flex-col items-center justify-center">
        <img
          src={iconSrc}
          alt={title}
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-6 text-center text-sm font-semibold uppercase leading-6 tracking-wide text-[#0A2555]">
          {title}
        </h3>
      </div>

      <div className="mt-10 flex justify-end">
  <Link
    href="/servicios"
    className="group inline-flex items-center gap-3 rounded-full bg-[#0A2555] px-7 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)]"
  >
    Ver más
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>

      <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-0 bg-[#F26E1E] transition-all duration-300 group-hover:w-full" />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0A2555]">
            Nuestros servicios
          </p>

          <div className="mx-auto mt-2 h-px w-20 bg-[#0A2555]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}