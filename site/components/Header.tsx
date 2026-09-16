"use client";

import { useState } from "react";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          Lorem Ipsum Dolor
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </header>
      <nav id="mobile-nav" className={`nav-drawer${open ? " is-open" : ""}`} aria-label="Principale">
        {nav.map((item) => (
          <a key={item.href + item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
