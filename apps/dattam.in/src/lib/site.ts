export const siteConfig = {
  name: "Dattam",
  legalName: "Dattam Labs",
  domain: "dattam.in",
  url: "https://dattam.in",
  description:
    "Dattam is a product engineering studio. We partner with founders and organizations to design, build, and scale production-grade software — SaaS platforms, agentic AI, data products, and cloud infrastructure.",
  tagline: "An engineering studio for production-grade software.",
  email: "contact@dattam.in",
  calendly: "https://calendly.com/pradeep-vanga/30-min-meeting-pradeep-vanga",
  address:
    "Awfis, Prestige Skytech, ISB Road, Financial District, Nanakramguda, Telangana 500032",
  socials: {
    linkedin: "https://www.linkedin.com/company/dattam-in",
    github: "https://github.com/dattam-in",
  },
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
