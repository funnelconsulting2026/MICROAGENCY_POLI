"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq-intro">
        <p className="faq-eyebrow">Lorem ipsum dolor</p>
        <h2 id="faq-title">Lorem ipsum dolor sit amet</h2>
        <p className="faq-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
        <a className="btn btn-outline faq-cta-desktop" href="#contatti">
          Contattaci <span>→</span>
        </a>
      </div>
      <dl className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div className="faq-item" key={item.q}>
              <dt>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
                </button>
              </dt>
              {isOpen ? <dd>{item.a}</dd> : null}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
