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
    slug: "lorem-ipsum-dolor",
    title: "Lorem ipsum dolor sit amet elit",
    eyebrow: "Lorem ipsum  ·  AA-19",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "ipsum",
    classe: "aa-19",
  },
  {
    slug: "dolor-sit-amet",
    title: "Dolor sit amet consectetur",
    eyebrow: "Lorem ipsum  ·  BB-18",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "dolor",
    classe: "bb-18",
  },
  {
    slug: "amet-elit-sed",
    title: "Amet elit sed eiusmod",
    eyebrow: "Lorem ipsum  ·  CC-22",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "amet",
    classe: "cc-22",
  },
  {
    slug: "consectetur-adipiscing",
    title: "Consectetur adipiscing",
    eyebrow: "Lorem ipsum  ·  DD-85",
    years: "2 lorem",
    cfu: "120 ipsum",
    mode: "Amet",
    chips: ["Dolor", "Ipsum dolor"],
    tipologia: "dolor",
    ambito: "ipsum",
    classe: "dd-85",
  },
  {
    slug: "elit-sed-eiusmod",
    title: "Elit sed do eiusmod",
    eyebrow: "Lorem ipsum  ·  EE-14",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "elit",
    classe: "ee-14",
  },
  {
    slug: "incididunt-ut-labore",
    title: "Incididunt ut labore magna",
    eyebrow: "Lorem ipsum  ·  FF-77",
    years: "2 lorem",
    cfu: "120 ipsum",
    mode: "Amet",
    chips: ["Dolor", "Ipsum dolor"],
    tipologia: "dolor",
    ambito: "dolor",
    classe: "ff-77",
  },
  {
    slug: "ut-enim-ad-minim",
    title: "Ut enim ad minim veniam",
    eyebrow: "Lorem ipsum  ·  GG-24",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "amet",
    classe: "gg-24",
  },
  {
    slug: "quis-nostrud-exercitation",
    title: "Quis nostrud exercitation ullamco",
    eyebrow: "Lorem ipsum  ·  Master",
    years: "1 lorem",
    cfu: "60 ipsum",
    mode: "Amet",
    chips: ["Amet", "Ipsum dolor"],
    tipologia: "amet",
    ambito: "elit",
    classe: "master",
  },
  {
    slug: "laboris-nisi-aliquip",
    title: "Laboris nisi ut aliquip",
    eyebrow: "Lorem ipsum  ·  HH-51",
    years: "2 lorem",
    cfu: "120 ipsum",
    mode: "Amet",
    chips: ["Dolor", "Ipsum dolor"],
    tipologia: "dolor",
    ambito: "amet",
    classe: "hh-51",
  },
  {
    slug: "ex-ea-commodo",
    title: "Ex ea commodo consequat",
    eyebrow: "Lorem ipsum  ·  II-31",
    years: "3 lorem",
    cfu: "180 ipsum",
    mode: "Amet",
    chips: ["Lorem", "Ipsum dolor"],
    tipologia: "lorem",
    ambito: "elit",
    classe: "ii-31",
  },
  {
    slug: "duis-aute-irure",
    title: "Duis aute irure dolor sit",
    eyebrow: "Lorem ipsum  ·  Master",
    years: "1 lorem",
    cfu: "60 ipsum",
    mode: "Amet",
    chips: ["Amet", "Ipsum dolor"],
    tipologia: "amet",
    ambito: "ipsum",
    classe: "master",
  },
  {
    slug: "reprehenderit-voluptate",
    title: "Reprehenderit in voluptate",
    eyebrow: "Lorem ipsum  ·  JJ-56",
    years: "2 lorem",
    cfu: "120 ipsum",
    mode: "Amet",
    chips: ["Dolor", "Ipsum dolor"],
    tipologia: "dolor",
    ambito: "dolor",
    classe: "jj-56",
  },
];

export function getCourse(slug: string) {
  return catalogCourses.find((course) => course.slug === slug);
}

export const filterOptions = {
  tipologia: [
    { value: "", label: "Tutte" },
    { value: "lorem", label: "Lorem" },
    { value: "dolor", label: "Dolor" },
    { value: "amet", label: "Amet" },
  ],
  ambito: [
    { value: "", label: "Tutte" },
    { value: "ipsum", label: "Ipsum" },
    { value: "dolor", label: "Dolor" },
    { value: "amet", label: "Amet" },
    { value: "elit", label: "Elit" },
  ],
  classe: [
    { value: "", label: "Tutte" },
    { value: "aa-19", label: "AA-19" },
    { value: "bb-18", label: "BB-18" },
    { value: "master", label: "Master" },
  ],
} as const;
