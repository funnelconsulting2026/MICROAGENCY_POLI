import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogCourses, getCourse } from "@/lib/courses";
import { faqs } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StudyPlan } from "@/components/StudyPlan";
import { Lead } from "@/components/Lead";
import { StarIcon, WhatsAppIcon } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return catalogCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Lorem ipsum" };
  return {
    title: `${course.title} — Lorem ipsum`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  };
}

const reviews = [
  {
    quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.”",
    name: "Lorem Ipsum",
    course: "Dolor sit amet elit",
  },
  {
    quote: "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”",
    name: "Dolor Sit",
    course: "Amet elit sed",
  },
  {
    quote: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.”",
    name: "Amet Elit",
    course: "Consectetur adipiscing",
  },
];

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <SiteHeader ctaHref="#contatti" />
      <main id="main">
        <section className="course-hero" aria-labelledby="course-title">
          <nav className="breadcrumb" aria-label="Percorso">
            <a href="/">Lorem</a>
            <span aria-hidden="true">/</span>
            <a href="/corsi">Amet elit sit</a>
            <span aria-hidden="true">/</span>
            <span>{course.title}</span>
          </nav>
          <div className="course-chips-row">
            <span className="chip">{course.chips[0]}</span>
            <span className="chip chip-light">{course.cfu}</span>
            <span className="chip chip-light">{course.years}</span>
            <span className="chip chip-light">{course.mode}</span>
          </div>
          <h1 id="course-title">{course.title}</h1>
          <p className="course-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
          </p>
          <div className="course-hero-actions">
            <a className="btn btn-ink" href="#contatti">
              Lorem ipsum dolor sit <span aria-hidden="true">↘</span>
            </a>
            <a className="btn btn-whatsapp" href="https://wa.me/390000000000" rel="noopener noreferrer">
              <WhatsAppIcon />
              Lorem ipsum dolor
            </a>
          </div>
        </section>

        <section className="course-profile" aria-labelledby="profile-title">
          <div className="course-profile-left">
            <p className="faq-eyebrow">Lorem ipsum dolor</p>
            <h2 id="profile-title">Lorem ipsum dolor sit amet, consectetur elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="course-profile-right">
            <article>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat duis aute irure dolor.
              </p>
            </article>
            <article>
              <h3>Sit amet elit</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum sed ut perspiciatis.
              </p>
            </article>
          </div>
        </section>

        <section className="study-plan" aria-labelledby="study-title">
          <p className="faq-eyebrow">Lorem ipsum amet</p>
          <h2 id="study-title">Lorem ipsum dolor sit amet elit</h2>
          <p className="study-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="study-divider">
            <span>Lorem ipsum dolor sit amet elit</span>
          </p>
          <div className="study-callout">
            <WhatsAppIcon />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            <a className="btn btn-outline" href="https://wa.me/390000000000" rel="noopener noreferrer">
              Lorem ipsum dolor
            </a>
          </div>
          <StudyPlan />
        </section>

        <Lead />

        <section className="course-reviews" aria-labelledby="reviews-title">
          <p className="faq-eyebrow">Lorem ipsum</p>
          <h2 id="reviews-title">Lorem ipsum dolor sit amet</h2>
          <div className="reviews-grid">
            {reviews.map((item) => (
              <blockquote className="review-card" key={item.name}>
                <p className="review-stars" aria-label="5 su 5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </p>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.course}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq course-faq" id="faq" aria-labelledby="course-faq-title">
          <div className="faq-intro">
            <p className="faq-eyebrow">Lorem ipsum dolor</p>
            <h2 id="course-faq-title">Lorem ipsum dolor sit amet elit</h2>
            <p className="faq-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>
            <a className="btn btn-outline faq-cta-desktop" href="#contatti">
              Lorem ipsum <span>↘</span>
            </a>
          </div>
          <dl className="faq-list">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <dt>
                  <details>
                    <summary>
                      <span>{item.q}</span>
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{item.a}</p>
                  </details>
                </dt>
              </div>
            ))}
          </dl>
        </section>

        <section className="sede course-sede" id="sede" aria-labelledby="course-sede-title">
          <div className="sede-card">
            <div className="sede-copy">
              <h2 id="course-sede-title">Lorem ipsum</h2>
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
              <a className="btn btn-dark" href="#contatti">
                Lorem ipsum
              </a>
            </div>
            <div className="sede-map catalog-placeholder" role="img" aria-label="Mappa schematica della sede" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
