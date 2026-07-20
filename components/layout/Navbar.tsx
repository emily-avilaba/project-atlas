"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "PKF International", href: "#pkf-international" },
  { label: "Servicios", href: "#servicios" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Sectores", href: "#sectores" },
  { label: "Aprendizaje", href: "#aprendizaje" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-black/5 bg-[#f4f2eb]/95 backdrop-blur-xl"
          : "border-transparent bg-[#f4f2eb]/80 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2555] text-white shadow-sm">
            <Globe className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-[#0a2555]">PKF</div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-slate-600">Guatemala</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#0a2555]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a2555] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
        >
          Hablemos
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}