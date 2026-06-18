import {
  type LucideIcon,
  Boxes,
  BrainCircuit,
  Cloud,
  Database,
  GaugeCircle,
  LayoutDashboard,
  Workflow,
  Smartphone,
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "4+", label: "Years building" },
  { value: "10+", label: "Products shipped" },
  { value: "7", label: "Trusted clients" },
  { value: "99.9%", label: "Uptime delivered" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Boxes,
    title: "SaaS Platforms",
    description:
      "Multi-tenant products with billing, auth, and roles — architected to scale from first user to enterprise.",
  },
  {
    icon: BrainCircuit,
    title: "Agentic AI Systems",
    description:
      "LLM-powered agents and retrieval pipelines that reason over complex structured and unstructured data.",
  },
  {
    icon: LayoutDashboard,
    title: "Data Dashboards",
    description:
      "Interactive analytics and visualization layers that turn raw datasets into decisions in real time.",
  },
  {
    icon: Database,
    title: "Open Data Products",
    description:
      "Collection, transformation, and publishing of accessible public datasets with rigorous pipelines.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud-native architecture, CI/CD, and IaC tuned for cost, resilience, and zero-downtime deploys.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description:
      "Event-driven workflows and internal tooling that remove manual work and compound over time.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform apps with native-grade performance, offline support, and shared design systems.",
  },
  {
    icon: GaugeCircle,
    title: "Performance Engineering",
    description:
      "Profiling, caching, and edge delivery to make products feel instant under real-world load.",
  },
];

export interface TrustItem {
  label: string;
}

export const trustItems: TrustItem[] = [
  { label: "Production-ready systems" },
  { label: "Scalable architectures" },
  { label: "Modern cloud infrastructure" },
  { label: "Secure backend systems" },
  { label: "Type-safe codebases" },
  { label: "Observability built in" },
];

export const techStack: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Mapbox",
  "OpenAI",
  "Claude",
];

export interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We map the problem, constraints, and success metrics before writing a line of code.",
  },
  {
    icon: Boxes,
    step: "02",
    title: "Architecture",
    description:
      "System design, data models, and infrastructure choices that hold up as you scale.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Product Design",
    description:
      "Interfaces and flows designed for clarity, speed, and a premium first impression.",
  },
  {
    icon: Code2,
    step: "04",
    title: "Development",
    description:
      "Type-safe, tested, reviewed code shipped in tight iterations with continuous feedback.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "QA & Optimization",
    description:
      "Automated testing, performance profiling, and security hardening before release.",
  },
  {
    icon: Rocket,
    step: "06",
    title: "Deploy & Scale",
    description:
      "Zero-downtime deploys, monitoring, and ongoing optimization as usage grows.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dattam delivered a production-grade platform faster than teams twice their size. The engineering quality is genuinely exceptional.",
    name: "Aarav Mehta",
    role: "Founder & CEO",
    company: "Assetly",
    initials: "AM",
  },
  {
    quote:
      "They translated a vague research idea into a polished, scalable tool our analysts use every day. Rare combination of rigor and speed.",
    name: "Dr. Nila Krishnan",
    role: "Programme Lead",
    company: "CEEW",
    initials: "NK",
  },
  {
    quote:
      "The data pipeline they architected processes millions of records reliably. We finally trust our numbers in front of government stakeholders.",
    name: "Rajesh Subramanian",
    role: "Technical Director",
    company: "TN Govt Initiative",
    initials: "RS",
  },
  {
    quote:
      "Clear communication, clean code, and zero surprises in production. Dattam feels like an extension of our own engineering team.",
    name: "Priya Nair",
    role: "VP Engineering",
    company: "Fintech Startup",
    initials: "PN",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Engineering Lead",
    role: "Systems & Architecture",
    bio: "Designs the backbone — data models, APIs, and infrastructure that scale without rewrites.",
    initials: "EL",
  },
  {
    name: "AI Engineer",
    role: "Agentic Systems & ML",
    bio: "Builds retrieval pipelines and LLM agents that reason reliably over messy, real-world data.",
    initials: "AE",
  },
  {
    name: "Product Designer",
    role: "Interface & Experience",
    bio: "Turns complex workflows into interfaces that feel obvious, fast, and premium.",
    initials: "PD",
  },
  {
    name: "Full-Stack Engineer",
    role: "Web & Cloud",
    bio: "Ships end-to-end features — type-safe frontends to cloud-native backends.",
    initials: "FE",
  },
];

export interface CaseMetric {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface TimelineStep {
  phase: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  accent: string;
  image: string;
  gallery: string[];
  siteUrl: string;
  summary: string;
  stack: string[];
  metrics: CaseMetric[];
  features: Feature[];
  problem: string;
  vision: string;
  architecture: string;
  challenges: string[];
  optimizations: string[];
  timeline: TimelineStep[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "assetly",
    name: "Assetly",
    tagline: "Property management, reimagined for global Indians.",
    category: "SaaS Platform",
    year: "2026",
    accent: "oklch(0.62 0.19 258)",
    image: "/projects/assetly/assetly-home.jpg",
    siteUrl: "assetlyhq.com",
    role: "Product design + full-stack engineering",
    gallery: [
      "/projects/assetly/assetly-home.jpg",
      "/projects/assetly/assetly-how-it-works.jpg",
      "/projects/assetly/assetly-services.jpg",
    ],
    features: [
      {
        title: "Find family land",
        description:
          "Enter a few details and Assetly searches official government records to surface land your family may own — and matches it to the right people.",
      },
      {
        title: "Smart document vault",
        description:
          "Upload any property document and AI reads, organises, and summarises it for you — across 40+ document types.",
      },
      {
        title: "Ask about your property",
        description:
          "A built-in AI assistant answers questions about any asset using its real documents and history.",
      },
      {
        title: "Services and payments, built in",
        description:
          "Order title checks and legal help and pay securely online — and sign in with a passkey for password-free access.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Mapped the NRI ownership journey and the trust gaps in managing property remotely." },
      { phase: "Architecture", detail: "Turborepo monorepo — Next.js frontend, FastAPI backend, async PostgreSQL with org-scoped multi-tenancy." },
      { phase: "Build", detail: "Shipped assets, documents, services, and the land-record scrapers in tight, reviewed loops." },
      { phase: "Launch & scale", detail: "Dockerised on AWS EC2 (ARM64) with Redis/Taskiq workers; frontend on Amplify + CloudFront." },
    ],
    summary:
      "Assetly lets people manage property in India from anywhere in the world — verify ownership, find family land, keep documents in one place, and order trusted services, all online. No flying back, no chasing local agents.",
    stack: ["Next.js", "React", "Tailwind", "FastAPI", "PostgreSQL", "Redis", "Razorpay", "AWS"],
    metrics: [
      { value: "2", label: "States integrated (TS·AP)" },
      { value: "40+", label: "Document types" },
      { value: "7", label: "On-demand services" },
    ],
    problem:
      "Indians living abroad had no reliable way to manage property back home. Ownership records were scattered across government portals, documents lived in WhatsApp and email, and everything depended on local agents they couldn't easily trust.",
    vision:
      "Make owning Indian property from abroad feel simple and safe — one place to check records, store documents, get expert help, and see exactly what's happening.",
    architecture:
      "Assetly is one connected system: a fast web app, a Python backend, and a secure database, all running on AWS. Behind the scenes, automated workers safely pull records from government land portals, and Google Gemini reads and explains documents. It's engineered to stay fast and reliable as more owners come on board.",
    challenges: [
      "Pulling records from government land portals that are slow, inconsistent, and protected by one-time passwords.",
      "Keeping every owner's data completely separate and private.",
      "Turning messy, multi-language property documents into clear, structured information.",
    ],
    optimizations: [
      "Heavy work — record-fetching and AI — runs in the background, so the app always feels instant.",
      "Payments and data jobs are built to never double-charge or duplicate, even if something retries.",
      "Delivered worldwide over AWS's edge network for quick load times.",
    ],
    outcome:
      "Assetly gives people abroad a trustworthy way to own and manage Indian property — verified records, organised documents, AI help, and services in one app — built to grow without slowing down.",
  },
  {
    slug: "cr-atlas",
    name: "CRAVIS.AI",
    tagline: "Democratising climate data intelligence.",
    category: "Agentic AI · Data Product",
    year: "2026",
    accent: "oklch(0.78 0.14 165)",
    image: "/projects/cravis/cravis-home.jpg",
    siteUrl: "cravis.ai",
    role: "Product engineering + agentic AI",
    gallery: [
      "/projects/cravis/cravis-home.jpg",
      "/projects/cravis/atlas.jpg",
      "/projects/cravis/ask-cravis.jpg",
      "/projects/cravis/climate-stories.jpg",
    ],
    features: [
      {
        title: "Ask in plain language",
        description:
          "Type a question and CRAVIS finds the data, builds the chart or map, and shows its sources — no spreadsheets required.",
      },
      {
        title: "Interactive climate atlas",
        description:
          "Explore temperature, rainfall, and extreme-weather trends from 1980 to today, plus future projections, on one map.",
      },
      {
        title: "Answers you can trust",
        description:
          "Every response traces back to the official methodology, so the numbers hold up to scrutiny.",
      },
      {
        title: "The right AI for each job",
        description:
          "CRAVIS uses several leading AI models together, each chosen for what it does best.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Scoped the data sources and the questions policymakers actually ask." },
      { phase: "Data warehouse", detail: "Staged 1980–2024 history and RCP 4.5/8.5 projections as Parquet on S3, queried via AWS Athena." },
      { phase: "Agent + Atlas", detail: "Built the Google ADK agent (SQL via Bedrock Claude) and the Mapbox + Vega-Lite Atlas." },
      { phase: "Launch", detail: "Shipped with CEEW as a reference climate-intelligence platform." },
    ],
    summary:
      "CRAVIS turns dense climate data into plain answers. Anyone — a policymaker, journalist, or researcher — can ask a question in everyday language and get clear charts, maps, and tables, each backed by trusted sources. Built with CEEW.",
    stack: ["Next.js", "FastAPI", "AWS Athena", "Mapbox GL", "Google ADK", "OpenAI", "Claude", "PostgreSQL", "DuckDB"],
    metrics: [
      { value: "45yr", label: "Climate record (1980–2024)" },
      { value: "734", label: "Districts covered" },
      { value: "6", label: "Hazard indices" },
    ],
    problem:
      "India's climate data was spread across disconnected files and portals — history in one place, future projections in another. Getting a clear, trustworthy answer took days of digging, and only experts could do it.",
    vision:
      "Let anyone explore climate risk just by asking — and trust every answer, because it traces straight back to official data.",
    architecture:
      "CRAVIS sits on a large warehouse of climate data — 45 years of history plus future projections — that it can search in seconds. An AI agent understands the question, safely pulls the right data, analyses it, and draws the chart or map, grounded in the official methodology so it never guesses. Answers stream back live to an interactive map-and-chart interface.",
    challenges: [
      "Making sure the AI only reads trusted data and always shows its sources — never inventing numbers.",
      "Searching 45 years of climate data quickly and affordably.",
      "Drawing detailed climate maps smoothly across the whole country.",
    ],
    optimizations: [
      "Answers are checked against the official methodology instantly, with no delay.",
      "Maps are prepared in advance so they stay fast even at high detail.",
      "Earlier results are reused within a conversation to avoid repeating slow queries.",
    ],
    outcome:
      "CRAVIS turns days of data wrangling into a single question and a trustworthy answer — giving decision-makers a clear window into climate risk.",
  },
  {
    slug: "eras",
    name: "ERAS",
    tagline: "Tracking a state's path to net zero.",
    category: "Gov Dashboard",
    year: "2026",
    accent: "oklch(0.7 0.15 60)",
    image: "/projects/eras/home.jpg",
    siteUrl: "tnclimatetracker.tn.gov.in",
    role: "Product engineering + data visualization",
    gallery: [
      "/projects/eras/home.jpg",
      "/projects/eras/industry.jpg",
      "/projects/eras/afolu.jpg",
    ],
    features: [
      {
        title: "Every sector, one view",
        description:
          "Power, transport, industry, agriculture, waste, and buildings — emissions and energy for the whole state in one place.",
      },
      {
        title: "See what policy saved",
        description:
          "Tracks the emissions avoided through policy, measured against a clear baseline, on the path to net zero.",
      },
      {
        title: "Compare fairly",
        description:
          "Switch between years and baseline methods to compare progress honestly over time.",
      },
      {
        title: "Ready for reports",
        description:
          "Export any chart as an image or data file, or embed it straight into official reports.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Worked with CEEW and TNGCC on the accounting methodology and what the council needs to see." },
      { phase: "Data model", detail: "Structured multi-sector emissions and baseline data as typed JSON." },
      { phase: "Build", detail: "Six sector dashboards in Next.js + MUI + Recharts, with year and baseline controls." },
      { phase: "Ship", detail: "An embeddable, iframe-ready build for the Tamil Nadu government." },
    ],
    summary:
      "ERAS shows the Tamil Nadu government how the state is doing on climate — tracking greenhouse-gas emissions across every major sector and the reductions its policies have achieved, all on the path to net zero before 2070. Built with CEEW.",
    stack: ["Next.js", "React", "TypeScript", "MUI", "Recharts", "Nuqs"],
    metrics: [
      { value: "6", label: "Sectors tracked" },
      { value: "168", label: "MtCO₂ (2022-23)" },
      { value: "2070", label: "Net-zero target" },
    ],
    problem:
      "The state's emissions and the results of its climate policies were buried in reports and spreadsheets. Leaders had no single, clear picture of progress toward net zero.",
    vision:
      "One simple dashboard where decision-makers can see emissions by sector, what policy has saved, and how far the state is from its goals.",
    architecture:
      "ERAS is a fast, lightweight dashboard. The emissions accounting is worked out in advance and built right into the app, so it loads instantly and works anywhere — even embedded inside other government sites. Clean charts make complex, multi-sector data easy to read at a glance.",
    challenges: [
      "Making complex, multi-sector emissions accounting easy to understand at a glance.",
      "Comparing very different sectors — power, transport, farming, waste — on consistent terms.",
      "Making every view easy to export and embed in official reporting.",
    ],
    optimizations: [
      "Data is prepared ahead of time, so the dashboard is fast and works anywhere.",
      "Every view has a shareable link for easy embedding.",
      "One-click export to image or spreadsheet for reports.",
    ],
    outcome:
      "ERAS gives Tamil Nadu's leadership a clear, single view of the state's emissions and climate progress — turning scattered numbers into a dashboard they can act on.",
  },
  {
    slug: "supreme-court-judgments",
    name: "Supreme Court Judgments",
    tagline: "75 years of case law, opened to everyone.",
    category: "Open Data",
    year: "2026",
    accent: "oklch(0.66 0.15 300)",
    image: "/projects/scj.jpg",
    siteUrl: "registry.opendata.aws",
    role: "Data engineering + open-data publishing",
    gallery: ["/projects/scj.jpg", "/projects/scj-2.jpg"],
    features: [
      {
        title: "Every judgment, 1950–2025",
        description:
          "75 years of Supreme Court rulings, in English and regional languages.",
      },
      {
        title: "Query without an account",
        description:
          "Columnar Parquet metadata is queryable directly with AWS Athena — no credentials needed.",
      },
      {
        title: "AI-ready corpus",
        description:
          "Clean, normalized text built for legal NLP and model training.",
      },
      {
        title: "Open & maintained",
        description:
          "CC-BY-4.0 on the AWS Open Data Registry, refreshed bi-monthly by Dattam.",
      },
    ],
    timeline: [
      { phase: "Collection", detail: "Scraped and de-duplicated judgments from the ecourts portal." },
      { phase: "Normalization", detail: "Extracted clean text and a consistent schema across languages." },
      { phase: "Publish", detail: "Released to public S3 with JSON + Parquet metadata." },
      { phase: "Maintain", detail: "Bi-monthly incremental refresh under CC-BY-4.0." },
    ],
    summary:
      "An open, machine-readable corpus of every Indian Supreme Court judgment from 1950 to 2025 — published and maintained by Dattam on the AWS Open Data Registry, free for anyone to query or train on.",
    stack: ["AWS S3", "Athena", "Python", "Parquet", "DuckDB"],
    metrics: [
      { value: "75yr", label: "Coverage (1950–2025)" },
      { value: "2", label: "Metadata formats" },
      { value: "CC-BY", label: "Open license" },
    ],
    problem:
      "Seventy-five years of Supreme Court judgments sat locked in the ecourts portal — scattered PDFs across many languages, with no clean, queryable, bulk-accessible corpus for researchers or AI teams to build on.",
    vision:
      "An open, machine-readable record of every Supreme Court judgment — free to access, simple to query, and ready for legal research and AI.",
    architecture:
      "Judgments are collected from the ecourts portal, normalized, and published to a public AWS S3 bucket (indian-supreme-court-judgments, ap-south-1) as language-tagged archives. Metadata is emitted as raw JSON and columnar Parquet, queryable directly with AWS Athena — no AWS account required. The corpus is refreshed bi-monthly under a CC-BY-4.0 license.",
    challenges: [
      "Extracting clean text from inconsistent, multi-language court PDFs.",
      "Normalizing 75 years of documents into one consistent, queryable schema.",
      "Publishing at bulk scale with zero-friction, credential-free access.",
    ],
    optimizations: [
      "Columnar Parquet metadata makes Athena queries fast and cheap.",
      "Language-tagged archives keep bulk downloads targeted.",
      "Bi-monthly incremental refresh keeps the corpus current without full re-publishes.",
    ],
    outcome:
      "A free, AWS-hosted corpus of Indian Supreme Court judgments (1950–2025) that anyone can query or train on — listed on the AWS Open Data Registry and maintained by Dattam.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
