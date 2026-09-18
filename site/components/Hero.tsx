import { logosDesktop, nav } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-stage">
        <img
          className="hero-bg"
          src="/images/milano/hero-bg.png"
          alt="Laureati su un prato, tocchi in aria, foto di contesto per la preview"
        />
        <div className="hero-ui">
          <div className="header-desktop-in-hero">
            <a className="brand" href="/">
              ECP Milano
            </a>
            <nav className="nav-desktop" aria-label="Principale">
              {nav.map((item) => (
                <a key={item.href + item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hero-copy">
            <h1 id="hero-title">
              ECP Milano,
              <br />
              preview di campus.
            </h1>
            <p className="hero-display" aria-hidden="true">
              MILANO
            </p>
            <p className="hero-sub">
              Template di lavoro per un campus a Milano.
              <br />
              L’offerta non esiste.
            </p>
            <div className="hero-cta-row">
              <a className="btn hero-cta-primary" href="#contatti">
                Parla con un orientatore
              </a>
              <a className="btn hero-cta-secondary" href="https://wa.me/390000000000" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <div className="hero-bottom">
              <p className="hero-caption-desktop">
                Anteprima di template. Nessun prezzo, nessuna sede attiva.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <article className="hero-card">
          <div className="hero-card-bar">ECP Milano · preview</div>
          <div className="hero-card-image">
            <img
              src="/images/milano/hero-card.png"
              alt="Corridoio di una biblioteca, foto di contesto per la preview"
            />
          </div>
          <p className="hero-card-caption">
            Foto di contesto per questa preview. Non è una sede attiva.
          </p>
        </article>

        <article className="hero-orient">
          <h2>Una sola richiesta di contatto</h2>
          <p>Apri il form in pagina. Non è un servizio reale di orientamento.</p>
          <div className="hero-orient-image">
            <img src="/images/milano/hero-orient.png" alt="Aula vuota, foto di contesto per la preview" />
          </div>
          <a className="btn hero-cta-secondary btn-block" href="https://wa.me/390000000000" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
        </article>
      </div>

      <div className="hero-logos-desktop" aria-label="Loghi partner">
        {logosDesktop.map((logo) => (
          <img key={logo.src} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}
