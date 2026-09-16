"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "./Icons";

type Errors = Partial<Record<"nome" | "cognome" | "telefono" | "email" | "percorso" | "privacy", string>>;

const required = "Campo obbligatorio.";

export function Lead() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    const nome = String(data.get("nome") || "").trim();
    const cognome = String(data.get("cognome") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const email = String(data.get("email") || "").trim();
    const percorso = String(data.get("percorso") || "").trim();
    const privacy = data.get("privacy");

    if (!nome) next.nome = required;
    if (!cognome) next.cognome = required;
    if (!telefono) next.telefono = required;
    if (!email) next.email = required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Inserisci un’email valida.";
    if (!percorso) next.percorso = required;
    if (!privacy) next.privacy = required;

    setErrors(next);
    setSuccess(Object.keys(next).length === 0);
  }

  return (
    <section className="lead" id="contatti" aria-labelledby="lead-title">
      <div className="lead-card">
        <div className="lead-panel">
          <div className="lead-panel-image">
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/203_4272.png" />
              <img
                src="/images/195_131.png"
                alt="Tocchi accademici lanciati in aria durante una cerimonia"
              />
            </picture>
          </div>
          <h2 id="lead-title">
            Lorem ipsum dolor sit amet, consectetur elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore.
          </p>
          <a className="btn btn-whatsapp" href="https://wa.me/390000000000" rel="noopener noreferrer">
            <WhatsAppIcon />
            Lorem ipsum dolor
          </a>
        </div>

        <form className="lead-form" onSubmit={onSubmit} noValidate>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>

          <div className="form-row">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" autoComplete="given-name" placeholder="Lorem ipsum" />
              {errors.nome ? <p className="field-error">{errors.nome}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="cognome">Cognome</label>
              <input id="cognome" name="cognome" type="text" autoComplete="family-name" placeholder="Dolor sit" />
              {errors.cognome ? <p className="field-error">{errors.cognome}</p> : null}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="telefono">Telefono</label>
              <input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="+39 333 000 0000" />
              {errors.telefono ? <p className="field-error">{errors.telefono}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="lorem@ipsum.it" />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}
            </div>
          </div>

          <div className="field">
            <label htmlFor="percorso">Percorso di interesse</label>
            <select id="percorso" name="percorso" defaultValue="">
              <option value="" disabled>
                Scegli un’area
              </option>
              <option value="lorem">Lorem ipsum</option>
              <option value="dolor">Dolor sit amet</option>
              <option value="elit">Consectetur elit</option>
            </select>
            {errors.percorso ? <p className="field-error">{errors.percorso}</p> : null}
          </div>

          <div className="field">
            <label htmlFor="punto">
              A che punto sei <span className="optional">(facoltativo)</span>
            </label>
            <input
              id="punto"
              name="punto"
              type="text"
              placeholder="Lorem ipsum, dolor sit, amet elit…"
            />
          </div>

          <div className="consent">
            <input id="privacy" name="privacy" type="checkbox" />
            <label htmlFor="privacy">
              Lorem ipsum dolor sit amet e acconsento a essere ricontattato.
            </label>
          </div>
          {errors.privacy ? <p className="field-error">{errors.privacy}</p> : null}

          <button className="btn btn-deep btn-block" type="submit">
            Lorem ipsum dolor
          </button>

          {success ? (
            <p className="form-success" role="status">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Grazie.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
