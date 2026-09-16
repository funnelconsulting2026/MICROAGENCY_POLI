import { stats, testimonials } from "@/lib/content";

export function Results() {
  return (
    <section className="results" aria-labelledby="results-title">
      <h2 id="results-title">Lorem ipsum dolor, sit amet elit.</h2>
      <div className="stats">
        {stats.map((stat) => (
          <article className="stat" key={stat.label}>
            <div className="stat-copy">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-note">{stat.note}</span>
            </div>
            <span className="stat-value">{stat.value}</span>
          </article>
        ))}
      </div>
      <div className="quotes">
        {testimonials.map((item) => (
          <blockquote className="quote" key={item.author}>
            <p>{item.quote}</p>
            <footer>{item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
