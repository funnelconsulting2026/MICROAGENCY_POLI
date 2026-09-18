export type CatalogCourse = {
  slug: string;
  title: string;
  eyebrow: string;
  years: string;
  cfu: string;
  mode: string;
  chips: [string, string];
  tipologia: string;
  ambito: string;
  classe: string;
};

export const catalogCourses: CatalogCourse[] = [
  {
    slug: "management-ai",
    title: "Management AI",
    eyebrow: "ECP Milano  ·  Management AI",
    years: "Percorso",
    cfu: "Piano",
    mode: "Milano",
    chips: ["Management AI", "Milano"],
    tipologia: "percorso",
    ambito: "management",
    classe: "ai",
  },
  {
    slug: "product-design-ai",
    title: "Product Design AI",
    eyebrow: "ECP Milano  ·  Product Design AI",
    years: "Percorso",
    cfu: "Piano",
    mode: "Milano",
    chips: ["Product Design AI", "Milano"],
    tipologia: "percorso",
    ambito: "design",
    classe: "ai",
  },
  {
    slug: "human-research-ai",
    title: "Human Research AI",
    eyebrow: "ECP Milano  ·  Human Research AI",
    years: "Percorso",
    cfu: "Piano",
    mode: "Milano",
    chips: ["Human Research AI", "Milano"],
    tipologia: "percorso",
    ambito: "research",
    classe: "ai",
  },
];

export function getCourse(slug: string) {
  return catalogCourses.find((course) => course.slug === slug);
}

export const filterOptions = {
  tipologia: [
    { value: "", label: "Tutte" },
    { value: "percorso", label: "Percorso" },
  ],
  ambito: [
    { value: "", label: "Tutte" },
    { value: "management", label: "Management AI" },
    { value: "design", label: "Product Design AI" },
    { value: "research", label: "Human Research AI" },
  ],
  classe: [
    { value: "", label: "Tutte" },
    { value: "ai", label: "AI" },
  ],
} as const;
