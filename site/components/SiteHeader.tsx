"use client";

import { useState } from "react";
import { innerNav } from "@/lib/content";

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function SiteHeader({ ctaHref = "/#contatti", ctaLabel = "Lorem ipsum dolor" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="inner-header">
        <a className="inner-brand" href="/">
          Lorem Ipsum Dolor
        </a>
        <nav className="inner-nav" aria-label="Principale">
          {innerNav.map((item) => (
            <a key={item.href + item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-ink inner-cta" href={ctaHref}>
          {ctaLabel} <span aria-hidden="true">↘</span>
        </a>
        <button
          className="menu-btn inner-menu"
          type="button"
          aria-expanded={open}
          aria-controls="inner-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </header>
      <nav
        id="inner-mobile-nav"
        className={`nav-drawer${open ? " is-open" : ""}`}
        aria-label="Principale"
      >
        {innerNav.map((item) => (
          <a key={item.href + item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={ctaHref} onClick={() => setOpen(false)}>
          {ctaLabel}
        </a>
      </nav>
    </>
  );
}
