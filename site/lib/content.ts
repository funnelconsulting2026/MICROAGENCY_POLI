export const nav = [
  { href: "/#mission", label: "ECP Milano" },
  { href: "/#servizi", label: "Sede" },
  { href: "/corsi", label: "Corsi" },
  { href: "/#certificazioni", label: "Percorsi" },
  { href: "/#contatti", label: "Contatti" },
] as const;

export const innerNav = [
  { href: "/", label: "ECP Milano" },
  { href: "/#mission", label: "Sede" },
  { href: "/#servizi", label: "Percorsi" },
  { href: "/corsi", label: "Corsi" },
  { href: "/#certificazioni", label: "Milano" },
] as const;

export const courses = [
  {
    slug: "management-ai",
    image: "/images/milano/course-management-ai.png",
    eyebrow: "ECP Milano  ·  Management AI",
    title: "Management AI",
    meta: "Percorso  ·  Milano  ·  ECP",
    chips: ["Management AI", "Milano"],
  },
  {
    slug: "product-design-ai",
    image: "/images/milano/course-product-design-ai.png",
    eyebrow: "ECP Milano  ·  Product Design AI",
    title: "Product Design AI",
    meta: "Percorso  ·  Milano  ·  ECP",
    chips: ["Product Design AI", "Milano"],
  },
  {
    slug: "human-research-ai",
    image: "/images/milano/course-human-research-ai.png",
    eyebrow: "ECP Milano  ·  Human Research AI",
    title: "Human Research AI",
    meta: "Percorso  ·  Milano  ·  ECP",
    chips: ["Human Research AI", "Milano"],
  },
] as const;

export const benefits = [
  {
    index: "01",
    title: "ECP Milano",
    body: "Preview di campus a Milano. L’offerta non esiste: è un template di lavoro.",
  },
  {
    index: "02",
    title: "Sede a Milano",
    body: "Contesto Milano soltanto. Indirizzo e recapiti in pagina sono placeholder.",
  },
  {
    index: "03",
    title: "Tre percorsi",
    body: "Management AI, Product Design AI, Human Research AI. Stessi slug in home e catalogo.",
  },
  {
    index: "04",
    title: "Orientamento",
    body: "Una sola CTA primaria del template: Parla con un orientatore.",
  },
] as const;

export const stats = [
  { label: "Campus", note: "Contesto Milano", value: "ECP" },
  { label: "Preview", note: "Offerta non attiva", value: "—" },
  { label: "Percorsi", note: "Catalogo di prova", value: "AI" },
] as const;

export const testimonials = [
  {
    quote:
      "Placeholder. Nessuna recensione in questa preview di ECP Milano.",
    author: "ECP Milano · preview",
  },
  {
    quote:
      "Placeholder. Nessuna testimonianza, prova sociale o esito dichiarato.",
    author: "Milano · preview",
  },
] as const;

export const faqs = [
  {
    q: "ECP Milano è un’offerta reale?",
    a: "No. Questa è una preview di template per un campus a Milano. L’offerta non esiste.",
  },
  {
    q: "Quali corsi mostra questa preview?",
    a: "Tre percorsi placeholder: Management AI, Product Design AI e Human Research AI. Gli slug coincidono tra home e catalogo.",
  },
  {
    q: "Dove si trova la sede in questa preview?",
    a: "Il contesto è Milano. Indirizzo e recapiti nella sezione sede sono placeholder, non una sede attiva.",
  },
  {
    q: "Come si parla con un orientatore?",
    a: "Il template tiene una sola CTA primaria: Parla con un orientatore. Non ci sono prezzi né prove sociali in questa preview.",
  },
  {
    q: "I colori di ECP Milano sono definitivi?",
    a: "No. La palette bordeaux è di lavoro, derivata da un primario di preview, e verrà sostituita.",
  },
] as const;

export const logosMobile = [
  { src: "/images/milano/logo-mobile-1.png", alt: "ECP Milano partner placeholder 1" },
  { src: "/images/milano/logo-mobile-2.png", alt: "ECP Milano partner placeholder 2" },
  { src: "/images/milano/logo-mobile-3.png", alt: "ECP Milano partner placeholder 3" },
  { src: "/images/milano/logo-mobile-4.png", alt: "ECP Milano partner placeholder 4" },
  { src: "/images/milano/logo-mobile-5.png", alt: "ECP Milano partner placeholder 5" },
] as const;

export const logosDesktop = [
  { src: "/images/milano/logo-desktop-1.png", alt: "ECP Milano partner placeholder 1" },
  { src: "/images/milano/logo-desktop-2.png", alt: "ECP Milano partner placeholder 2" },
  { src: "/images/milano/logo-desktop-3.png", alt: "ECP Milano partner placeholder 3" },
  { src: "/images/milano/logo-desktop-4.png", alt: "ECP Milano partner placeholder 4" },
  { src: "/images/milano/logo-desktop-5.png", alt: "ECP Milano partner placeholder 5" },
] as const;
