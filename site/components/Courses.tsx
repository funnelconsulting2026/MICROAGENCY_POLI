import { courses } from "@/lib/content";

export function Courses() {
  return (
    <section className="courses" id="corsi" aria-labelledby="courses-title">
      <div className="courses-heading">
        <h2 id="courses-title">Lorem ipsum dolor sit amet consectetur elit</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
      </div>
      <div className="courses-list">
        {courses.map((course, index) => (
          <article
            className={`course-card${index >= 3 ? " course-desktop-only" : ""}`}
            key={course.title}
          >
            <div className="course-image">
              <img src={course.image} alt={`Immagine illustrativa per ${course.title}`} />
              <div className="course-chips">
                <span className="chip">{course.chips[0]}</span>
                <span className="chip chip-light">{course.chips[1]}</span>
              </div>
            </div>
            <div className="course-copy">
              <p className="course-eyebrow">{course.eyebrow}</p>
              <h3>{course.title}</h3>
              <p className="course-meta">{course.meta}</p>
              <hr className="course-rule" />
              <a className="course-link" href="#contatti">
                Lorem ipsum dolor <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <a className="btn btn-outline btn-block" href="#contatti">
        Lorem ipsum dolor sit →
      </a>
    </section>
  );
}
