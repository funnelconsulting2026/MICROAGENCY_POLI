export function BannerCta() {
  return (
    <section className="banner" id="banner" aria-labelledby="banner-title">
      <div className="banner-card">
        <div className="banner-copy">
          <h2 id="banner-title">
            Lorem ipsum dolor sit amet? Consectetur adipiscing elit.
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className="banner-aside">
          <div className="banner-image">
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/203_4324.png" />
              <img src="/images/193_162.png" alt="Mano con indice alzato su fondo chiaro" />
            </picture>
          </div>
          <a className="btn btn-light btn-block" href="#contatti">
            Parla con un orientatore →
          </a>
        </div>
      </div>
    </section>
  );
}
