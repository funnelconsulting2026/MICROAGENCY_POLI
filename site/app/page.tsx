import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { BannerCta } from "@/components/BannerCta";
import { Courses } from "@/components/Courses";
import { Cfu } from "@/components/Cfu";
import { Results } from "@/components/Results";
import { Lead } from "@/components/Lead";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Mission />
        <BannerCta />
        <Courses />
        <Cfu />
        <Results />
        <Lead />
        <Location />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
