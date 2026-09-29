"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  if (!captchaValue) {
    alert("Por favor completa el reCAPTCHA.");
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    correo: formData.get("correo"),
    mensaje: formData.get("mensaje"),
    captchaValue,
  };

  try {
    const response = await fetch("/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
  console.error("Respuesta de la API:", result);

  throw new Error(
    result.message || "Error al enviar el formulario."
  );
}

    setSubmitted(true);
    form.reset();
  } catch (error) {
  console.error("Error al enviar formulario:", error);

  alert(
    error instanceof Error
      ? error.message
      : "No se pudo enviar el formulario. Por favor intenta nuevamente."
  );
}
};

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      {/* HERO */}
<section className="relative min-h-[520px] overflow-hidden text-white">
  {/* Imagen */}
  <img
    src="/images/contacto/hero.png"
    alt="Contacto PKF Guatemala"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay azul */}
  <div className="absolute inset-0 bg-[#0a2555]/75" />

  {/* Degradado */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0a2555]/90 via-[#0a2555]/55 to-transparent" />

  {/* Contenido */}
  <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1320px] items-center px-5 py-20 lg:px-8">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
        Contacto
      </p>

      <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Estamos listos para conversar contigo.
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/85 sm:text-lg">
        Cuéntanos cómo podemos ayudarte y nuestro equipo se pondrá en contacto
        contigo.
      </p>
    </div>
  </div>
</section>

      {/* FORMULARIO + INFORMACIÓN */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* FORMULARIO */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Escríbenos
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Cuéntanos cómo podemos ayudarte.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Completa el formulario y un miembro de nuestro equipo se pondrá en
              contacto contigo.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              
              {/* NOMBRE */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-[#0a2555]"
                >
                  Nombre: *
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
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
                  autoComplete="tel"
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
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
                />
              </div>

              {/* MENSAJE */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-semibold text-[#0a2555]"
                >
                  Mensaje: *
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={7}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0a2555] focus:ring-2 focus:ring-[#0a2555]/10"
                />
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
                  Utilizaremos tu información personal únicamente para atender
                  tu consulta. Al marcar esta casilla confirmas que has leído y
                  aceptas nuestra política de privacidad. *
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
                className="group inline-flex items-center gap-3 rounded-full bg-[#0a2555] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(10,37,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14366f] hover:shadow-[0_14px_28px_rgba(10,37,85,0.28)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Enviar mensaje

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* CONFIRMACIÓN */}
              {submitted && (
                <p className="rounded-2xl bg-[#0eb4da]/10 px-4 py-3 text-sm font-medium text-[#0a2555]">
                  ¡Gracias! Hemos recibido tu consulta.
                </p>
              )}
            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              PKF Guatemala
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0a2555]">
              Encuéntranos
            </h2>

            <div className="mt-8 space-y-8">
              
              {/* DIRECCIÓN */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Dirección
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Edificio Forum Zona Viva
                  <br />
                  3 Avenida 10-80, Zona 10
                  <br />
                  Torre II, Nivel 10, Oficina 1001
                  <br />
                  Guatemala City
                  <br />
                  Guatemala
                </p>
              </div>

              {/* CORREO */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Correo electrónico
                </p>

                <a
                  href="mailto:info@pkf.com.gt"
                  className="mt-3 inline-block text-sm font-semibold text-[#0a2555] transition hover:text-[#f26e1e]"
                >
                  info@pkf.com.gt
                </a>
              </div>

              {/* MENSAJE */}
              <div className="border-t border-slate-200 pt-8">
                <p className="text-sm leading-7 text-slate-600">
                  Nuestro equipo está disponible para conocer tus necesidades y
                  ayudarte a encontrar la solución adecuada para tu organización.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}