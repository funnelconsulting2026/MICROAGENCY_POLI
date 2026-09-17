export const nav = [
  { href: "/#mission", label: "Lorem ipsum" },
  { href: "/#servizi", label: "Dolor sit" },
  { href: "/corsi", label: "Amet elit sit" },
  { href: "/#certificazioni", label: "Consectetur" },
  { href: "/#contatti", label: "Adipiscing" },
] as const;

export const innerNav = [
  { href: "/", label: "Lorem" },
  { href: "/#mission", label: "Ipsum sit" },
  { href: "/#servizi", label: "Dolor" },
  { href: "/corsi", label: "Amet elit" },
  { href: "/#certificazioni", label: "Consectetur" },
] as const;

export const courses = [
  {
    slug: "lorem-ipsum-dolor",
    image: "/images/194_132.png",
    eyebrow: "Lorem ipsum  ·  AA-00",
    title: "Lorem ipsum dolor sit amet elit",
    meta: "3 lorem  ·  180 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
  {
    slug: "dolor-sit-amet",
    image: "/images/194_139.png",
    eyebrow: "Dolor sit amet  ·  BB-12",
    title: "Dolor sit amet consectetur",
    meta: "3 lorem  ·  180 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
  {
    slug: "amet-elit-sed",
    image: "/images/194_146.png",
    eyebrow: "Amet elit sit  ·  Lorem",
    title: "Amet elit sed eiusmod",
    meta: "3 lorem  ·  180 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
  {
    slug: "consectetur-adipiscing",
    image: "/images/203_4471.png",
    eyebrow: "Ipsum dolor  ·  CC-21",
    title: "Consectetur adipiscing",
    meta: "2 lorem  ·  120 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
  {
    slug: "incididunt-ut-labore",
    image: "/images/203_4490.png",
    eyebrow: "Elit sit amet  ·  DD-34",
    title: "Incididunt ut labore magna",
    meta: "2 lorem  ·  120 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
  {
    slug: "quis-nostrud-exercitation",
    image: "/images/203_4509.png",
    eyebrow: "Ut enim ad  ·  EE-45",
    title: "Quis nostrud exercitation ullamco",
    meta: "1 lorem  ·  60 ipsum  ·  Amet",
    chips: ["Lorem", "Ipsum dolor"],
  },
] as const;

export const benefits = [
  {
    index: "01",
    title: "Lorem ipsum dolor",
    body: "Amet consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    index: "02",
    title: "Sit amet elit",
    body: "Incididunt ut labore et dolore magna aliqua enim.",
  },
  {
    index: "03",
    title: "Consectetur adipiscing",
    body: "Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    index: "04",
    title: "Elit sed eiusmod",
    body: "Ullamco laboris nisi ut aliquip ex ea commodo.",
  },
] as const;

export const stats = [
  { label: "Lorem ipsum", note: "Dolor sit amet elit", value: "98%" },
  { label: "Dolor amet", note: "Consectetur adipiscing", value: "24h" },
  { label: "Sit elit", note: "Sed do eiusmod tempor", value: "1:1" },
] as const;

export const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.”",
    author: "Lorem · Ipsum dolor",
  },
  {
    quote:
      "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”",
    author: "Dolor · Sit amet elit",
  },
] as const;

export const faqs = [
  {
    q: "Lorem ipsum dolor sit amet elit?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Consectetur adipiscing elit sed do?",
    a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "Eiusmod tempor incididunt ut labore?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    q: "Magna aliqua ut enim ad minim?",
    a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    q: "Quis nostrud exercitation ullamco nisi?",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
] as const;

export const logosMobile = [
  { src: "/images/193_129.png", alt: "Lorem partner logo 1" },
  { src: "/images/193_130.png", alt: "Lorem partner logo 2" },
  { src: "/images/193_131.png", alt: "Lorem partner logo 3" },
  { src: "/images/193_133.png", alt: "Lorem partner logo 4" },
  { src: "/images/193_134.png", alt: "Lorem partner logo 5" },
] as const;

export const logosDesktop = [
  { src: "/images/203_4528.png", alt: "Lorem partner logo 1" },
  { src: "/images/203_4529.png", alt: "Lorem partner logo 2" },
  { src: "/images/203_4530.png", alt: "Lorem partner logo 3" },
  { src: "/images/203_4531.png", alt: "Lorem partner logo 4" },
  { src: "/images/203_4532.png", alt: "Lorem partner logo 5" },
] as const;
