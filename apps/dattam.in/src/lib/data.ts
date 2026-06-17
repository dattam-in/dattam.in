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
  "Python",
  "FastAPI",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Redis",
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
        title: "Family land discovery",
        description:
          "A guided flow scrapes official state portals (Meebhoomi, Bhunaksha, EC) to surface likely pattadar records and match them to a family.",
      },
      {
        title: "AI document intelligence",
        description:
          "Gemini-powered OCR, extraction, and summarization over titles and notices, across 40+ document types.",
      },
      {
        title: "Asset chat",
        description:
          "A Google ADK agent answers plain-language questions over an asset's full context — title, documents, and history.",
      },
      {
        title: "Services & secure payments",
        description:
          "Title packs and legal services with Razorpay checkout and passkey (WebAuthn) sign-in; 28+ service types.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Mapped the NRI ownership journey and the trust gaps in managing property remotely." },
      { phase: "Architecture", detail: "Turborepo monorepo — Next.js frontend, FastAPI backend, async PostgreSQL with row-level multi-tenancy." },
      { phase: "Build", detail: "Shipped assets, documents, services, and the land-record scrapers in tight, reviewed loops." },
      { phase: "Launch & scale", detail: "Dockerised on AWS EC2 (ARM64) with Redis/Taskiq workers; frontend on Amplify + CloudFront." },
    ],
    summary:
      "A property operating system for global Indians — verify title, organise documents, monitor risk, and manage Indian real estate remotely. Multi-tenant, with automated land-record discovery and AI document intelligence.",
    stack: ["Next.js", "React", "Tailwind", "FastAPI", "PostgreSQL", "Redis", "Razorpay", "AWS"],
    metrics: [
      { value: "3", label: "States integrated (TN·TS·AP)" },
      { value: "40+", label: "Document types" },
      { value: "28+", label: "Services offered" },
    ],
    problem:
      "Indian expats managing property back home juggled WhatsApp, spreadsheets, and unreliable local agents — with no single source of truth for title, documents, payments, or land records.",
    vision:
      "One trustworthy platform that makes remote ownership feel local: verified records, organised documents, AI assistance, and an audit trail for every action.",
    architecture:
      "A Turborepo monorepo — a Next.js 15 frontend on AWS Amplify + CloudFront, and a FastAPI (Python 3.13) backend in Docker on EC2 (ARM64) with async PostgreSQL and Alembic migrations. Redis-backed Taskiq workers run background jobs and headless-browser scrapers against state land-record portals; documents and geospatial boundary data live in S3. Gemini (Google ADK) and Claude power document extraction and asset chat.",
    challenges: [
      "Reliable scraping of inconsistent, OTP-gated government land-record portals across states.",
      "Strict multi-tenant isolation across organisations and roles.",
      "Turning messy, multilingual property documents into structured, trustworthy data.",
    ],
    optimizations: [
      "Redis + Taskiq decouple slow scraping and AI work from the request path.",
      "Idempotent payment and scraping jobs stay correct under retries.",
      "ARM-native Docker on EC2 with auto migrations, behind an edge-cached Amplify frontend.",
    ],
    outcome:
      "Assetly gives remote owners a single, trustworthy home for their Indian property — verified records, AI document intelligence, and services on tap — on a codebase the team can extend without fear.",
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
        title: "Ask CRAVIS",
        description:
          "A grounded agent answers plain-language questions with charts, maps, and tables — SQL written by Claude, run read-only over the warehouse, every answer source-backed.",
      },
      {
        title: "The Atlas",
        description:
          "An interactive map and chart builder spanning historical records and RCP 4.5/8.5 projections, with side-by-side comparison.",
      },
      {
        title: "Methodology grounding",
        description:
          "A retrieval layer ties every answer back to the official Atlas methodology — sources, formulas, and assumptions.",
      },
      {
        title: "Multi-model routing",
        description:
          "Tasks route across OpenAI, Gemini, and Bedrock Claude through one abstraction — each model used where it's strongest.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Scoped the data sources and the questions policymakers actually ask." },
      { phase: "Data warehouse", detail: "Staged 1980–2024 history and RCP 4.5/8.5 projections as Parquet on S3, queried via AWS Athena." },
      { phase: "Agent + Atlas", detail: "Built the Google ADK agent (SQL via Bedrock Claude) and the Mapbox + Vega-Lite Atlas." },
      { phase: "Launch", detail: "Shipped with CEEW as a reference climate-intelligence platform." },
    ],
    summary:
      "CRAVIS — the Climate Resilience Analytics and Visualisation Intelligence System — is a conversational, agentic AI platform built with CEEW that brings historical trends, future projections, and sectoral data into one place, so anyone can ask a question and get a source-backed answer.",
    stack: ["Next.js", "FastAPI", "AWS Athena", "Mapbox GL", "Google ADK", "Claude", "PostgreSQL", "DuckDB"],
    metrics: [
      { value: "45yr", label: "Climate record (1980–2024)" },
      { value: "750+", label: "Districts covered" },
      { value: "5", label: "Hazard indices" },
    ],
    problem:
      "Climate intelligence sat in disconnected CSVs, PDFs, and portals — historical trends in one place, projections in another, sectoral data somewhere else. Policymakers, journalists, and researchers couldn't ask a plain question and get a trustworthy, source-backed answer.",
    vision:
      "One platform where anyone can explore local climate intelligence conversationally — ask in plain language and receive charts, maps, and tables, each traceable back to its source.",
    architecture:
      "Climate datasets land in S3 as Parquet and are queried with AWS Athena. A FastAPI service (PostgreSQL for sessions) hosts a Google ADK agent that orchestrates sub-agents — SQL generation via AWS Bedrock Claude, guarded read-only against Athena; analysis in DuckDB and pandas; plus chart, map, and web-search tools — grounded by a methodology retrieval layer. Answers stream over WebSocket to a Next.js + Mapbox GL + Vega-Lite frontend, with raster layers served as Cloud-Optimized GeoTIFF tiles.",
    challenges: [
      "Grounding the agent so generated SQL is safe (read-only enforced) and answers cite their sources.",
      "Querying a 45-year climate warehouse cheaply within Athena's row limits.",
      "Rendering raster and vector climate layers smoothly across the country.",
    ],
    optimizations: [
      "An in-memory methodology index grounds answers with zero added latency — no vector database.",
      "Cloud-Optimized GeoTIFF tiling keeps raster overlays fast.",
      "Per-conversation result reuse avoids re-running expensive Athena queries.",
    ],
    outcome:
      "CRAVIS gives policymakers, journalists, and researchers a single conversational window into climate risk — turning days of data wrangling into a question and a source-backed answer.",
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
        title: "Six-sector emissions view",
        description:
          "Power, transport, industry, AFOLU, waste, and buildings — emissions, intensity, and energy in one official view.",
      },
      {
        title: "Avoided-emissions tracking",
        description:
          "Measures reductions achieved through policy against a baseline, on the path to net-zero before 2070.",
      },
      {
        title: "Baseline toggle",
        description:
          "Switch between actual and baseline emissions, and between static (2019-20) and moving-baseline methods.",
      },
      {
        title: "Report-ready export",
        description:
          "Any view exports to PNG or CSV and embeds via iframe for official reporting.",
      },
    ],
    timeline: [
      { phase: "Discovery", detail: "Worked with CEEW and TNGCC on the accounting methodology and what the council needs to see." },
      { phase: "Data model", detail: "Structured multi-sector emissions and baseline data as typed JSON." },
      { phase: "Build", detail: "Six sector dashboards in Next.js + MUI + Recharts, with year and baseline controls." },
      { phase: "Ship", detail: "A static, embeddable build for the Tamil Nadu government." },
    ],
    summary:
      "A state-level climate dashboard that tracks Tamil Nadu's greenhouse-gas emissions and the emissions avoided through policy — measured against baselines on the path to net-zero before 2070. Built with CEEW for the Tamil Nadu Green Climate Company.",
    stack: ["Next.js", "React", "TypeScript", "MUI", "Recharts", "Nuqs"],
    metrics: [
      { value: "6", label: "Sectors tracked" },
      { value: "168", label: "MtCO₂ (2022-23)" },
      { value: "2070", label: "Net-zero target" },
    ],
    problem:
      "Tamil Nadu's emissions and the impact of its climate policies were scattered across reports and spreadsheets — with no single, clear view for the Chief Minister's council to track progress toward net zero.",
    vision:
      "One legible dashboard where decision-makers can see emissions by sector, the reductions policy has achieved, and how far the state is from its targets.",
    architecture:
      "A static Next.js 16 / React 19 dashboard. Precomputed multi-sector emissions accounting — using static (2019-20) and moving-baseline methods — ships as typed JSON; MUI and Recharts render six sector views with year and baseline controls; Nuqs drives shareable URL state. Views export to PNG and CSV and embed via iframe, so the dashboard drops straight into official reporting.",
    challenges: [
      "Turning multi-sector emissions accounting, with two baseline methods, into one clear executive view.",
      "Keeping units consistent and comparable across six very different sectors.",
      "Making every view exportable and embeddable for government reporting.",
    ],
    optimizations: [
      "Fully static — precomputed JSON, no backend, instant loads, trivially cacheable.",
      "URL-driven state makes any view shareable and embeddable.",
      "Client-side PNG and CSV export produces report-ready artifacts.",
    ],
    outcome:
      "ERAS gives the Tamil Nadu government a single, legible view of its emissions and climate progress — turning scattered accounting into a dashboard the state's leadership can act on.",
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
