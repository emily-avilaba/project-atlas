"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Países y territorios", value: 150, suffix: "+" },
  { label: "Firmas miembro", value: 530, suffix: "+" },
  { label: "Profesionales", value: 65000, suffix: "+" },
];
const worldDots = [
  {
    country: "Guatemala",
    top: "55%",
    left: "26%",
    featured: true,
  },
  {
    country: "Estados Unidos",
    top: "32%",
    left: "22%",
  },
  {
    country: "México",
    top: "41%",
    left: "22%",
  },
  {
    country: "Brasil",
    top: "68%",
    left: "34%",
  },
  {
    country: "Reino Unido",
    top: "36%",
    left: "45%",
  },
  {
    country: "España",
    top: "43%",
    left: "46%",
  },
  {
    country: "Emiratos Árabes Unidos",
    top: "45%",
    left: "61%",
  },
  {
    country: "India",
    top: "52%",
    left: "64%",
  },
  {
    country: "Singapur",
    top: "60%",
    left: "73%",
  },
  {
    country: "Australia",
    top: "73%",
    left: "77%",
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function AnimatedStat({
  value,
  suffix,
  animate,
}: {
  value: number;
  suffix: string;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let startTime: number | null = null;
    const duration = 1400;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.floor(value * eased);

      setCount(next);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, value]);

  return (
    <div className="text-3xl font-semibold tracking-[-0.04em] text-[#0a2555] transition-transform duration-300 group-hover:scale-105">
      {value >= 1000 ? formatNumber(count) : count}
      {suffix}
    </div>
  );
}

function StatCard({
  value,
  label,
  suffix,
  animate,
}: {
  value: number;
  label: string;
  suffix: string;
  animate: boolean;
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/50 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
      <AnimatedStat value={value} suffix={suffix} animate={animate} />
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </article>
  );
}

export default function Worldwide() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [animateCounts, setAnimateCounts] = useState(false);
  const [mapHovered, setMapHovered] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCounts(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pkf-international" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              PKF International
            </p>

            <div className="mt-2 h-px w-20 bg-[#0a2555]" />

            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Somos parte de una red global, comprometidos con Guatemala.
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600">
              Formamos parte de PKF International, una red presente en más de
              150 países y territorios. Esto nos permite combinar conocimiento
              internacional con un profundo entendimiento del mercado
              guatemalteco.
            </p>

            <a
  href="https://www.pkf.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a2555] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-lg"
>Explora PKF Global
  

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#fafafa] p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
            <div ref={statsRef} className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  animate={animateCounts}
                />
              ))}
            </div>

            <div
              className="group relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e]/40 hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(10,37,85,0.08),transparent_22%),radial-gradient(circle_at_72%_40%,rgba(242,110,30,0.12),transparent_18%),radial-gradient(circle_at_55%_75%,rgba(10,37,85,0.07),transparent_20%)]" />

              <div className="relative mx-auto flex w-full justify-center">
                <img
                  src="/images/worldwide/world-map.svg"
                  alt="PKF Worldwide"
                  className="w-[86%] select-none object-contain opacity-90 transition duration-300 group-hover:opacity-100"
                />

{worldDots.map((dot, index) => (
  <span
    key={`${dot.top}-${dot.left}-${index}`}
    className={[
      "absolute h-2.5 w-2.5 rounded-full transition-all duration-300",

      mapHovered
        ? dot.featured
          ? "bg-[#0eb4da] scale-125 shadow-[0_0_0_8px_rgba(14,180,218,0.18),0_0_20px_rgba(14,180,218,0.65)]"
          : "bg-[#f26e1e] scale-110 shadow-[0_0_0_8px_rgba(242,110,30,0.14)]"
        : "bg-[#0a2555] animate-pulse shadow-[0_0_0_6px_rgba(10,37,85,0.06)]",
    ].join(" ")}
    style={{
      top: dot.top,
      left: dot.left,
    }}
  />
))}
              </div>

              <div className="relative mt-6 flex flex-wrap justify-center gap-2">
                {["Américas", "Europa", "Asia Pacífico", "África", "Medio Oriente"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0a2555]/10 bg-[#0a2555]/5 px-3 py-1 text-xs font-medium text-[#0a2555]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}