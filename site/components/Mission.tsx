import { benefits, logosMobile } from "@/lib/content";

export function Mission() {
  return (
    <section className="mission" id="mission" aria-labelledby="mission-title">
      <div className="logos" aria-label="Loghi partner">
        <div className="logos-row">
          {logosMobile.slice(0, 3).map((logo) => (
            <img key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
        </div>
        <div className="logos-row">
          {logosMobile.slice(3).map((logo) => (
            <img key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      <div className="mission-copy">
        <h2 id="mission-title">Lorem ipsum dolor sit amet, consectetur elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit: sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>
        <a href="#sede">Lorem ipsum dolor →</a>
      </div>

      <div className="benefits" id="servizi">
        {benefits.map((item) => (
          <article className="benefit" key={item.index}>
            <span className="benefit-index">{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
