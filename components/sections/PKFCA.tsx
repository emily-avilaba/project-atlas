"use client";

import { useState } from "react";

const caDots = [
  { country: "Guatemala", top: "32%", left: "20%", featured: true },
  { country: "El Salvador", top: "44%", left: "28%" },
  { country: "Honduras", top: "39%", left: "37%" },
  { country: "Nicaragua", top: "53%", left: "45%" },
  { country: "Costa Rica", top: "72%", left: "51%" },
  { country: "Panamá", top: "75%", left: "78%" },
];

export default function PKFCA() {
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <section id="pkf-ca" className="bg-[#f7f7f5] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-8"
          onMouseEnter={() => setMapHovered(true)}
          onMouseLeave={() => setMapHovered(false)}
        >
          <div className="relative mx-auto w-full max-w-[620px]">
            <img
              src="/images/pkf-ca/hero.png"
              alt="Mapa de PKF Centroamérica"
              className="h-auto w-full object-contain"
            />

            {caDots.map((dot) => (
              <span
                key={dot.country}
                title={dot.country}
                className={[
                  "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                  mapHovered
                    ? dot.featured
                      ? "bg-[#0eb4da] scale-125 shadow-[0_0_0_8px_rgba(14,180,218,0.18),0_0_22px_rgba(14,180,218,0.7)]"
                      : "bg-[#f26e1e] scale-110 shadow-[0_0_0_8px_rgba(242,110,30,0.16),0_0_18px_rgba(242,110,30,0.55)]"
                    : "bg-[#0a2555] shadow-[0_0_0_6px_rgba(10,37,85,0.06)]",
                ].join(" ")}
                style={{
                  top: dot.top,
                  left: dot.left,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
            PKF C.A.
          </p>

          <div className="mt-2 h-px w-20 bg-[#0a2555]" />

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#0a2555] sm:text-5xl">
            Presencia regional, conocimiento cercano.
          </h2>

          <p className="mt-6 max-w-2xl text-[16px] leading-8 text-slate-600">
            PKF Centroamérica conecta experiencia regional con soluciones
            profesionales diseñadas para acompañar a las organizaciones en sus
            distintos mercados.
          </p>

          <a
            href="https://pkf-central-america.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0a2555] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f26e1e] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)]"
          >
            Conoce PKF C.A.
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}