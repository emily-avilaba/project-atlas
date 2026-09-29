"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type IconProps = {
  className?: string;
};

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 4.98 8a2.5 2.5 0 0 1 0-4.5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.67 8.59 22 11 22 14.12V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.57-2.33 3.22V21h-4V9Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 2.5A4.5 4.5 0 0 0 2.5 7v10A4.5 4.5 0 0 0 7 21.5h10A4.5 4.5 0 0 0 21.5 17V7A4.5 4.5 0 0 0 17 2.5H7Zm0 1.5h10A3 3 0 0 1 20 7v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm5 2.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Zm0 1.5A4 4 0 1 1 8 12a4 4 0 0 1 4-4Zm5.75-.9a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H16.8V5a22 22 0 0 0-2.34-.12c-2.32 0-3.91 1.42-3.91 4.03V11H8v3h2.55v8h2.95Z" />
    </svg>
  );
}

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "PKF International", href: "/#pkf-international" },
  { label: "Servicios", href: "/servicios" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Sectores", href: "/sectores" },
  { label: "Aprendizaje", href: "/recursos" },
  { label: "Bolsa de Trabajo", href: "/carreras" },
  { label: "Contacto", href: "/#contacto" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pkf-guatemala/?viewAsMember=true",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pkfguatemala?igsi=ZzRjeWN6dXd5amFq&utm_source=qr",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100056212938825&locale=es_LA",
    Icon: FacebookIcon,
  },
];

export default function Footer() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname === href;
  };

  return (
    <footer className="border-t border-black/5 bg-[#f4f2eb] text-slate-700">
      <div className="mx-auto max-w-[1320px] px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <img
              src="/logos/logo-pkf-guatemala.svg"
              alt="PKF Guatemala"
              className="h-14 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Firma de servicios profesionales con visión global y enfoque local,
              comprometida con ofrecer soluciones de auditoría, impuestos,
              consultoría y negocios.
            </p>

            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-semibold text-[#0a2555]">Dirección</p>
                <p className="mt-2">
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
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Navegación
            </p>
            <div className="mt-3 h-px w-20 bg-[#0a2555]" />

            <nav className="mt-5 grid gap-3">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group w-fit text-sm font-medium transition ${
                      active
                        ? "text-[#0a2555]"
                        : "text-slate-600 hover:text-[#0a2555]"
                    }`}
                  >
                    <span className="relative inline-block pb-1">
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#f26e1e] transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a2555]">
              Síguenos
            </p>
            <div className="mt-3 h-px w-20 bg-[#0a2555]" />

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0a2555] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f26e1e] hover:bg-[#0a2555] hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
             <div className="mt-6">
    <p className="text-sm font-semibold text-[#0a2555]">Correo</p>
    <a
      href="mailto:info@pkf.com.gt"
      className="mt-2 inline-block text-sm leading-7 text-slate-600 transition hover:text-[#0a2555]"
    >
      info@pkf.com.gt
    </a>
  </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Conéctate con nosotros en nuestras redes sociales para conocer más
              sobre PKF Guatemala, nuestra cultura y nuestras actualizaciones.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
          © {new Date().getFullYear()} PKF Guatemala. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}