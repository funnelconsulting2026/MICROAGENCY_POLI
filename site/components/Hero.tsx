import { logosDesktop, nav } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-stage">
        <img
          className="hero-bg"
          src="/images/203_4234.png"
          alt="Figura di schiena con tocco accademico, sullo sfondo un cielo azzurro"
        />
        <div className="hero-ui">
          <div className="header-desktop-in-hero">
            <a className="brand" href="#top">
              Lorem Ipsum Dolor
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
              Lorem ipsum dolor sit,
              <br />
              consectetur adipiscing
              <br />
              elit amet.
            </h1>
            <p className="hero-display" aria-hidden="true">
              LOREM
            </p>
            <p className="hero-sub">
              Lorem ipsum dolor sit amet elit.
              <br />
              Consectetur adipiscing sed do
              <br />
              eiusmod tempor.
            </p>
            <a className="link-arrow" href="#contatti">
              Lorem ipsum dolor sit →
            </a>
            <div className="hero-bottom">
              <a className="btn btn-whatsapp" href="https://wa.me/390000000000" rel="noopener noreferrer">
                <WhatsAppIcon />
                Lorem ipsum dolor
              </a>
              <p className="hero-caption-desktop">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br />
                elit sed do eiusmod tempor incididunt labore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <article className="hero-card">
          <div className="hero-card-bar">Lorem ipsum dolor</div>
          <div className="hero-card-image">
            <img
              src="/images/192_138.png"
              alt="Laureando di spalle con tocco, parola in evidenza sul cielo"
            />
          </div>
          <p className="hero-card-caption">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
          </p>
        </article>

        <article className="hero-orient">
          <h2>Lorem ipsum dolor sit amet elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <div className="hero-orient-image">
            <img src="/images/192_144.png" alt="Mano che solleva un diploma arrotolato" />
          </div>
          <a className="btn btn-whatsapp btn-block" href="https://wa.me/390000000000" rel="noopener noreferrer">
            <WhatsAppIcon />
            Lorem ipsum dolor
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
