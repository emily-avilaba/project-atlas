"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CarrerasPage() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      {/* HERO */}
<section className="relative min-h-[520px] overflow-hidden text-white">
  {/* Imagen */}
  <img
    src="/images/carreras/hero.png"
    alt="Bolsa de Trabajo de PKF Guatemala"
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
        Bolsa de Trabajo
      </p>

      <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Construye tu carrera con PKF Guatemala.
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/85 sm:text-lg">
        Muy pronto encontrarás nuestras oportunidades laborales y podrás formar
        parte de nuestro equipo.
      </p>
    </div>
  </div>
</section>
{/* FORMULARIO DE BOLSA DE TRABAJO */}

<section className="px-5 py-16 lg:px-8">
  <div className="mx-auto max-w-[1320px]">

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

      {/* INTRODUCCIÓN */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-10">

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
          Únete a nuestro equipo
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555] sm:text-4xl">
          Construyamos juntos tu próxima oportunidad.
        </h2>

        <p className="mt-5 text-[15px] leading-8 text-slate-600">
          En PKF Guatemala creemos que el crecimiento de una firma también
          depende del desarrollo de las personas que forman parte de ella.
          Comparte tu información con nosotros y déjanos conocer tu perfil.
        </p>

        <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Buscamos profesionales comprometidos, curiosos y con ganas de
            seguir aprendiendo.
          </p>

          <p>
            Tu información podrá ser considerada para futuras oportunidades
            dentro de nuestro equipo.
          </p>
        </div>

      </div>

      {/* FORMULARIO */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-10">

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
          Envíanos tu CV
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
          Queremos conocerte.
        </h2>

        <form className="mt-8 space-y-6">

          {/* NOMBRE */}
          <div>
            <label
              htmlFor="nombre"
              className="mb-2 block text-sm font-semibold text-[#0a2555]"
            >
              Nombre completo: *
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
            />
          </div>

          {/* CORREO */}
          <div>
            <label
              htmlFor="correo"
              className="mb-2 block text-sm font-semibold text-[#0a2555]"
            >
              Correo electrónico: *
            </label>

            <input
              id="correo"
              name="correo"
              type="email"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
            />
          </div>

          {/* TELÉFONO */}
          <div>
            <label
              htmlFor="telefono"
              className="mb-2 block text-sm font-semibold text-[#0a2555]"
            >
              Teléfono: *
            </label>

            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
            />
          </div>

          {/* ÁREA DE INTERÉS */}
          <div>
            <label
              htmlFor="area"
              className="mb-2 block text-sm font-semibold text-[#0a2555]"
            >
              Área de interés
            </label>

            <select
              id="area"
              name="area"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
            >
              <option value="">Selecciona un área</option>
              <option>Auditoría</option>
              <option>Impuestos</option>
              <option>Consultoría</option>
              <option>Administración</option>
              <option>Otra área</option>
            </select>
          </div>

          {/* CV */}
          <div>
            <label
              htmlFor="cv"
              className="mb-2 block text-sm font-semibold text-[#0a2555]"
            >
              CV: *
            </label>

            <input
              id="cv"
              name="cv"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#0a2555] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#14366f]"
            />

            <p className="mt-2 text-xs text-slate-500">
              Formatos permitidos: PDF, DOC y DOCX.
            </p>
          </div>

          {/* PRIVACIDAD */}
          <div className="flex items-start gap-3">
            <input
              id="privacidad"
              name="privacidad"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#0a2555]"
            />

            <label
              htmlFor="privacidad"
              className="text-xs leading-5 text-slate-600"
            >
              Autorizo el tratamiento de mis datos personales para fines de
              selección y consideración de oportunidades laborales. *
            </label>
          </div>
{/* RECAPTCHA */}
<div className="flex justify-start">
  <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    onChange={(value) => setCaptchaValue(value)}
  />
</div>
          {/* BOTÓN */}
          <button
            type="submit"
            disabled={!captchaValue}
            className="group inline-flex items-center gap-3 rounded-full bg-[#0a2555] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)]"
          >
            Enviar CV
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

      </div>

    </div>
  </div>
</section>
    </main>
  );
}