"use client";

import { useMemo, useState } from "react";
import { catalogCourses, filterOptions } from "@/lib/courses";

export function CatalogGrid() {
  const [tipologia, setTipologia] = useState("");
  const [ambito, setAmbito] = useState("");
  const [classe, setClasse] = useState("");

  const visible = useMemo(
    () =>
      catalogCourses.filter((course) => {
        if (tipologia && course.tipologia !== tipologia) return false;
        if (ambito && course.ambito !== ambito) return false;
        if (classe && course.classe !== classe) return false;
        return true;
      }),
    [tipologia, ambito, classe],
  );

  return (
    <>
      <div className="catalog-filters">
        <div className="field">
          <label htmlFor="filtro-tipologia">Tipologia</label>
          <select id="filtro-tipologia" value={tipologia} onChange={(e) => setTipologia(e.target.value)}>
            {filterOptions.tipologia.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="filtro-ambito">Ambito disciplinare</label>
          <select id="filtro-ambito" value={ambito} onChange={(e) => setAmbito(e.target.value)}>
            {filterOptions.ambito.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="filtro-classe">Classe di laurea</label>
          <select id="filtro-classe" value={classe} onChange={(e) => setClasse(e.target.value)}>
            {filterOptions.classe.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="catalog-grid">
        {visible.map((course) => (
          <article className="course-card catalog-card" key={course.slug}>
            <div className="course-image catalog-media" aria-hidden="true">
              <div className="catalog-placeholder" />
              <div className="course-chips">
                <span className="chip">{course.chips[0]}</span>
                <span className="chip chip-light">{course.chips[1]}</span>
              </div>
            </div>
            <div className="course-copy">
              <p className="course-eyebrow">{course.eyebrow}</p>
              <h3>{course.title}</h3>
              <p className="course-meta">
                {course.years} · {course.cfu} · {course.mode}
              </p>
              <hr className="course-rule" />
              <a className="course-link" href={`/corsi/${course.slug}`}>
                Lorem ipsum dolor <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="catalog-empty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      ) : null}

      <nav className="catalog-pagination" aria-label="Paginazione">
        <span className="page-btn is-disabled">← Precedente</span>
        <div className="page-nums">
          <span className="page-num is-current" aria-current="page">
            1
          </span>
          <span className="page-num">2</span>
          <span className="page-num">3</span>
          <span className="page-num">4</span>
          <span className="page-num">…</span>
          <span className="page-num">5</span>
        </div>
        <span className="page-btn">Successiva →</span>
      </nav>
    </>
  );
}
