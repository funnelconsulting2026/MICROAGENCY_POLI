export function SiteFooter() {
  return (
    <footer className="site-footer inner-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <a className="footer-brand" href="/">
            LOREM IPSUM DOLOR
          </a>
          <p className="footer-tagline">
            Lorem ipsum dolor sit amet, consectetur elit.
            {"\n"}
            Sede · Ipsum (AA)
          </p>
        </div>
        <nav className="footer-links" aria-label="Piè di pagina">
          <a href="/">Lorem</a>
          <a href="/#mission">Ipsum sit</a>
          <a href="/#servizi">Dolor</a>
          <a href="/corsi">Amet elit</a>
          <a href="/#contatti">Contatti</a>
        </nav>
        <div className="footer-cols">
          <div className="footer-col">
            <h3>Lorem</h3>
            <a href="/#mission">Ipsum sit</a>
            <a href="/#servizi">Dolor</a>
            <a href="/#certificazioni">Consectetur</a>
          </div>
          <div className="footer-col">
            <h3>Amet</h3>
            <a href="/corsi">Lorem ipsum</a>
            <a href="/corsi">Dolor sit</a>
            <a href="/corsi">Amet elit</a>
          </div>
          <div className="footer-col">
            <h3>Contatti</h3>
            <p>+39 000 000 0000</p>
            <a href="https://wa.me/390000000000">WhatsApp</a>
            <a href="/#contatti">Email</a>
          </div>
        </div>
      </div>
      <hr className="footer-rule" />
      <p className="footer-legal">
        © 2026 Lorem Ipsum · <a href="/#privacy">Privacy</a> · <a href="/#cookie">Cookie</a> · P.IVA 00000000000
      </p>
    </footer>
  );
}
