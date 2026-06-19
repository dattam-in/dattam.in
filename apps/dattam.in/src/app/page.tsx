import { Hero } from "@/modules/home/hero";
import { TrustStrip } from "@/modules/home/trust-strip";
import { Services } from "@/modules/home/services";
import { FeaturedProjects } from "@/modules/home/featured-projects";
import { Process } from "@/modules/home/process";
import { Philosophy } from "@/modules/about/philosophy";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      email: siteConfig.email,
      description: siteConfig.description,
      foundingDate: "2022",
      sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Awfis, Prestige Skytech, ISB Rd, Financial District, Nanakramguda",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500032",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Agentic AI",
        "Open Data",
        "Data Visualization",
        "DevOps",
        "LLM Applications",
        "Cloud Native Solutions",
      ],
    },
    {
      "@type": "WebSite",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedProjects />
      <Process />
      <Philosophy />
      <Stats />
      <CTA />
    </>
  );
}
