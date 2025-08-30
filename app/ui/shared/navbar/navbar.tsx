"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-primary-900/10 bg-white/70 backdrop-saturate-150 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5">
        <Link href="#" className="flex items-center gap-3 no-underline" aria-label="Página inicial">
          <span className="h-[34px] w-[34px] rounded-[10px] brand-badge" aria-hidden="true" />
          <span className="font-bold tracking-[0.2px] text-primary-900">Pilates & Bem‑Estar</span>
        </Link>

        <button
          className="inline-flex items-center gap-2 rounded-xl border border-primary-900/20 px-3 py-2 text-primary-900 md:hidden"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰ Menu
        </button>

        <div
          id="primary-menu"
          className={
            `hidden items-center gap-2 md:flex ${open ? "absolute left-0 right-0 top-[64px] z-40 block bg-white px-5 py-3 border-b border-primary-900/15" : ""}`
          }
          role="menubar"
        >
          <Link className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold text-primary-900 no-underline hover:bg-primary-600/10" href="#inicio" role="menuitem">Início</Link>
          <Link className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold text-primary-900 no-underline hover:bg-primary-600/10" href="#aulas" role="menuitem">Aulas</Link>
          <Link className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold text-primary-900 no-underline hover:bg-primary-600/10" href="#contato" role="menuitem">Contato</Link>
          <Link className="rounded-xl px-3.5 py-2.5 font-bold text-white no-underline brand-gradient shadow-[var(--shadow-brand)] hover:brightness-105" href="#perfil" role="menuitem">Perfil</Link>
        </div>
      </nav>
    </header>
  );
}