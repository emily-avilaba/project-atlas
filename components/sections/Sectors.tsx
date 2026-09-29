type Sector = {
  title: string;
  iconSrc: string;
};

const sectors: Sector[] = [
  {
    title: "Almacenadoras",
    iconSrc: "/icons/sectors/almacenadoras.svg",
  },
  {
    title: "Aseguradoras y Afianzadoras",
    iconSrc: "/icons/sectors/aseguradoras y afianzadoras.svg",
  },
  {
    title: "Arrendadoras Financieras",
    iconSrc: "/icons/sectors/arrendadoras financieras.svg",
  },
  {
    title: "Alimentos",
    iconSrc: "/icons/sectors/alimentos.svg",
  },
  {
    title: "Bancos, Entidades y Grupos Financieros",
    iconSrc: "/icons/sectors/bancos-entidades-grupos-financieros.svg",
  },
  {
    title: "Banca Central",
    iconSrc: "/icons/sectors/banca central.svg",
  },
  {
    title: "Casas de Cambio",
    iconSrc: "/icons/sectors/casa de cambio.svg",
  },
  {
    title: "Comercios",
    iconSrc: "/icons/sectors/comercio.svg",
  },
  {
    title: "Grupos Sector Construcción e Inmobiliario",
    iconSrc: "/icons/sectors/construccion e inmobiliario.svg",
  },
  {
    title: "Grupos Agro-Industriales",
    iconSrc: "/icons/sectors/agro-industriales.svg",
  },
  {
    title: "Grupos Industriales",
    iconSrc: "/icons/sectors/industrial.svg",
  },
  {
    title: "Manufactura",
    iconSrc: "/icons/sectors/manufactura.svg",
  },
  {
    title: "Proyectos Financiados por Organismos Internacionales",
    iconSrc: "/icons/sectors/organismos internacionales.svg",
  },
  {
    title: "Universidades y Colegios Educativos",
    iconSrc: "/icons/sectors/colegios y universidades.svg",
  },
  {
    title: "Asociaciones y Otros",
    iconSrc: "/icons/sectors/asociaciones y otros.svg",
  },
];

function SectorCard({ title, iconSrc }: Sector) {
  return (
    <article className="group flex min-h-[180px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <img
          src={encodeURI(iconSrc)}
          alt={title}
          className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-5 text-center text-[14px] font-semibold uppercase leading-5 tracking-[0.03em] text-[#0a2555]">
          {title}
        </h3>
      </div>

      <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
      </div>
    </article>
  );
}

export default function Sectors() {
  return (
    <section id="sectores" className="bg-[#f7f7f5] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
            Sectores
          </p>
          <div className="mx-auto mt-2 h-px w-20 bg-[#0a2555]" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectors.map((sector) => (
            <SectorCard key={sector.title} {...sector} />
          ))}
        </div>

       <div className="mt-12 text-center">
  <p className="text-lg font-semibold text-[#0A2555]">
    ¿Tu industria no aparece?
  </p>

  <a
    href="/sectores"
    className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#0A2555] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)]"
  >
    Conoce más

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
      </div>
    </section>
  );
}