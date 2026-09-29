"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "PKF International", href: "/#pkf-international" },
  { label: "PKF C.A.", href: "/#pkf-ca" },
  { label: "Servicios", href: "/servicios" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Sectores", href: "/sectores" },
  { label: "Aprendizaje", href: "/recursos" },
  { label: "Bolsa de Trabajo", href: "/carreras" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onHashChange = () => setHash(window.location.hash);

    onScroll();
    onHashChange();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
    };
  }, []);

  const isActive = (href: string) => {
    const isHashLink = href.startsWith("/#");

    return isHashLink
      ? pathname === "/" && hash === href.slice(1)
      : href === "/"
        ? pathname === "/"
        : pathname === href;
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-black/5 bg-[#f4f2eb]/95 backdrop-blur-xl"
          : "border-transparent bg-[#f4f2eb]/80 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="flex w-full items-center justify-between gap-4 px-3 py-3 lg:px-4">
        <Link href="/" className="flex items-center">
          <img
            src="/logos/logo-pkf-guatemala.svg"
            alt="PKF Guatemala"
            className="h-20 w-auto transition duration-300"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative py-2 text-sm font-medium transition ${
                  active
                    ? "text-[#0a2555]"
                    : "text-slate-700 hover:text-[#0a2555]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#f26e1e] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <a
          href="/contacto"
          className="hidden items-center gap-2 rounded-full bg-[#0a2555] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 xl:inline-flex"
        >
          Hablemos
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-[#0a2555] shadow-sm transition hover:bg-slate-50 xl:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#f4f2eb]/98 px-4 py-4 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white text-[#0a2555]"
                      : "text-slate-700 hover:bg-white hover:text-[#0a2555]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a2555] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}