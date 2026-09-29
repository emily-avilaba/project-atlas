type Value = {
  title: string;
  text: string;
  icon: string;
};

const values: Value[] = [
  {
    title: "Alcance Global",
    text: "Formamos parte de PKF International, una red presente en más de 150 países.",
    icon: "/icons/values/community.svg",
  },
  {
    title: "Conocimiento Local",
    text: "Entendemos el contexto guatemalteco para ofrecer soluciones alineadas a nuestros clientes.",
    icon: "/icons/values/passion.svg",
  },
  {
    title: "Decisiones con Confianza",
    text: "Nuestro enfoque técnico y ético fortalece cada decisión empresarial.",
    icon: "/icons/values/integrity.svg",
  },
  {
    title: "Liderazgo Cercano",
    text: "Cada proyecto es dirigido por un socio que acompaña a nuestros clientes durante todo el proceso.",
    icon: "/icons/values/community.svg",
  },
];

function ValueCard({ title, text, icon }: Value) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">

      <div className="flex justify-center">
        <img
          src={icon}
          alt={title}
          className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-center text-lg font-semibold text-[#0a2555]">
        {title}
      </h3>

      <p className="mt-4 text-center text-sm leading-7 text-slate-600">
        {text}
      </p>

      <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-0 bg-[#f26e1e] transition-all duration-300 group-hover:w-full" />
      </div>

    </article>
  );
}

export default function WhyPKF() {
  return (
    <section className="bg-[#f7f7f5] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1320px]">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
            ¿Por qué elegir PKF Guatemala?
          </p>

          <div className="mx-auto mt-2 h-px w-20 bg-[#0a2555]" />

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}

        </div>

      </div>
    </section>
  );
}