export function Location() {
  return (
    <section className="sede" id="sede" aria-labelledby="sede-title">
      <div className="sede-card">
        <div className="sede-copy">
          <h2 id="sede-title">Lorem ipsum</h2>
          <p className="sede-address">
            Lorem Ipsum Dolor | Sit Amet Elit
            {"\n"}
            Via Consectetur 00, 00000 Adipiscing
          </p>
          <p className="sede-contact">
            +39 000 000 0000
            {"\n"}
            lorem@ipsum.dolor
          </p>
          <a className="btn btn-dark btn-block" href="#contatti">
            Contattaci
          </a>
        </div>
        <div className="sede-map">
          <img
            src="/images/195_172.png"
            alt="Mappa schematica della zona con indicazione della sede"
          />
        </div>
        <div className="sede-photo-desktop">
          <img
            src="/images/203_4264.png"
            alt="Interno luminoso con tavolo di studio e materiali didattici"
          />
        </div>
      </div>
    </section>
  );
}
