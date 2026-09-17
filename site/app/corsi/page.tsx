import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CatalogGrid } from "@/components/CatalogGrid";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Lorem ipsum dolor — catalogo",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
};

export default function CatalogPage() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <SiteHeader />
      <main id="main" className="catalog">
        <nav className="breadcrumb" aria-label="Percorso">
          <a href="/">Lorem</a>
          <span aria-hidden="true">/</span>
          <span>Amet elit sit</span>
        </nav>

        <header className="catalog-intro">
          <h1>Amet elit sit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit: sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.
          </p>
        </header>

        <CatalogGrid />

        <aside className="catalog-cta" aria-labelledby="catalog-cta-title">
          <div className="catalog-cta-copy">
            <h2 id="catalog-cta-title">Lorem ipsum dolor sit amet? Consectetur adipiscing elit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </div>
          <div className="catalog-cta-actions">
            <a className="btn btn-ink" href="/#contatti">
              Lorem ipsum dolor sit <span aria-hidden="true">↘</span>
            </a>
            <p className="catalog-cta-note">Lorem ipsum dolor sit amet elit</p>
          </div>
        </aside>

        <aside className="catalog-lead-mobile">
          <h2>Lorem ipsum dolor sit amet, consectetur elit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
          <a className="btn btn-whatsapp" href="https://wa.me/390000000000" rel="noopener noreferrer">
            <WhatsAppIcon />
            Lorem ipsum dolor
          </a>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
