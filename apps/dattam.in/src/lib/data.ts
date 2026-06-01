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
  "Terraform",
  "OpenAI",
  "LangChain",
  "Redis",
  "GraphQL",
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

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  accent: string;
  image: string;
  siteUrl: string;
  summary: string;
  stack: string[];
  metrics: CaseMetric[];
  problem: string;
  vision: string;
  architecture: string;
  challenges: string[];
  optimizations: string[];
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
    image: "/projects/assetly.jpg",
    siteUrl: "assetlyhq.com",
    summary:
      "A multi-tenant property management platform that lets NRIs manage Indian real estate remotely — tenants, payments, documents, and maintenance in one place.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "AWS", "Stripe", "Turborepo"],
    metrics: [
      { value: "10k+", label: "Properties tracked" },
      { value: "<200ms", label: "API p95 latency" },
      { value: "99.9%", label: "Uptime" },
    ],
    problem:
      "Indian expats managing property back home juggled WhatsApp, spreadsheets, and unreliable local agents — with no single source of truth for rent, documents, or maintenance.",
    vision:
      "One trustworthy platform that makes remote ownership feel local: real-time visibility, automated collections, and an audit trail for every action.",
    architecture:
      "A Turborepo monorepo with a Next.js App Router frontend and a FastAPI backend, backed by PostgreSQL with row-level multi-tenancy. Background workers handle reminders and reconciliation; S3 presigned uploads keep documents secure.",
    challenges: [
      "Strict multi-tenant data isolation across organisations and roles.",
      "Reliable recurring payment collection across timezones and currencies.",
      "Document-heavy workflows that had to stay fast and auditable.",
    ],
    optimizations: [
      "Query-level caching and connection pooling cut p95 latency below 200ms.",
      "Edge-rendered dashboards with streaming for instant first paint.",
      "Idempotent payment jobs eliminated duplicate charges under retries.",
    ],
    outcome:
      "Assetly launched to a growing base of remote owners with zero critical incidents in its first year — and a codebase the team can extend without fear.",
  },
  {
    slug: "cr-atlas",
    name: "CRAVIS.AI",
    tagline: "Democratising climate data intelligence.",
    category: "Agentic AI · Data Product",
    year: "2026",
    accent: "oklch(0.78 0.14 165)",
    image: "/projects/cr-atlas.jpg",
    siteUrl: "cravis.ai",
    summary:
      "CRAVIS — the Climate Resilience Analytics and Visualisation Intelligence System — is a conversational, agentic AI platform built with CEEW that brings historical trends, future projections, and sectoral data into one place, so anyone can ask a question and get a source-backed answer.",
    stack: ["Next.js", "Python", "PostGIS", "Mapbox", "LLM / RAG", "AWS"],
    metrics: [
      { value: "43yr", label: "Climate record (1981–2024)" },
      { value: "6", label: "Hazard layers" },
      { value: "4", label: "Sectoral datasets" },
    ],
    problem:
      "Climate intelligence sat in disconnected CSVs, PDFs, and portals — historical trends in one place, projections in another, sectoral data somewhere else. Policymakers, journalists, and researchers couldn't ask a plain question and get a trustworthy, source-backed answer.",
    vision:
      "One platform where anyone can explore local climate intelligence conversationally — ask in plain language and receive charts, maps, and tables, each traceable back to its source.",
    architecture:
      "Historical (1981–2024) and projected (2030–2070, RCP 4.5/8.5) climate data, extreme-event records, and sectoral layers are ingested through Python pipelines into PostGIS and served as vector tiles to a Mapbox-powered Next.js Atlas. An agentic AI layer — an LLM grounded by retrieval over the curated datasets — powers Ask CRAVIS, returning source-backed insight with generated charts, maps, and tables.",
    challenges: [
      "Grounding an LLM agent in trusted data so every answer is source-backed, never hallucinated.",
      "Harmonising decades of historical records with multiple future-projection scenarios.",
      "Rendering nationwide hazard and sectoral layers smoothly in the browser.",
    ],
    optimizations: [
      "Retrieval constrained to curated datasets keeps every Ask CRAVIS answer traceable.",
      "Vector tiling and pre-aggregation keep the Atlas interactive at scale.",
      "Progressive loading delivers the first map view in under a second.",
    ],
    outcome:
      "CRAVIS gives policymakers, journalists, and researchers a single conversational window into climate risk — turning days of data wrangling into a question and a source-backed answer.",
  },
  {
    slug: "eras",
    name: "ERAS",
    tagline: "Emissions accounting for an entire state.",
    category: "Gov Platform",
    year: "2026",
    accent: "oklch(0.7 0.15 60)",
    image: "/projects/eras.jpg",
    siteUrl: "tnclimatetracker.tn.gov.in",
    summary:
      "An emissions tracking and reporting system for the Tamil Nadu government — ingesting, validating, and reporting environmental data at state scale.",
    stack: ["FastAPI", "PostgreSQL", "React", "Celery", "Docker", "Grafana"],
    metrics: [
      { value: "State", label: "Scale deployment" },
      { value: "100%", label: "Audit traceability" },
      { value: "24/7", label: "Monitored" },
    ],
    problem:
      "Emissions reporting relied on manual submissions with no validation, no audit trail, and no consolidated view for government stakeholders.",
    vision:
      "A reliable system of record for emissions — validated on ingest, fully auditable, and trusted in official reporting.",
    architecture:
      "A FastAPI ingestion layer validates submissions against domain rules, stores them in PostgreSQL with full history, and runs Celery workers for aggregation. Grafana dashboards give operators real-time observability.",
    challenges: [
      "Enforcing data quality across many inconsistent reporting sources.",
      "Guaranteeing a tamper-evident audit trail for official use.",
      "Operating reliably for a government stakeholder, 24/7.",
    ],
    optimizations: [
      "Validation-on-ingest stopped bad data at the door.",
      "Append-only history gave 100% traceability for audits.",
      "Containerised deploys with health checks kept the system always-on.",
    ],
    outcome:
      "ERAS gave the government a single, trustworthy source for emissions data — replacing fragile spreadsheets with a monitored, auditable platform.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
