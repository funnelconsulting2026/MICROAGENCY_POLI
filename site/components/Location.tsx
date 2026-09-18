export function Location() {
  return (
    <section className="sede" id="sede" aria-labelledby="sede-title">
      <div className="sede-card">
        <div className="sede-copy">
          <h2 id="sede-title">Lorem ipsum</h2>
          <p className="sede-address">
            ECP Milano | Milano
            {"\n"}
            Sede placeholder, Milano
          </p>
          <p className="sede-contact">
            Preview — nessun recapito attivo
            {"\n"}
            orientamento@ecp-milano.preview
          </p>
          <a className="btn btn-dark btn-block" href="#contatti">
            Contattaci
          </a>
        </div>
        <div className="sede-map">
          <img
            src="/images/milano/sede-map.png"
            alt="Mappa schematica della zona con indicazione della sede"
          />
        </div>
        <div className="sede-photo-desktop">
          <img
            src="/images/milano/sede-photo.png"
            alt="Interno luminoso con tavolo di studio e materiali didattici"
          />
        </div>
      </div>
    </section>
  );
}
