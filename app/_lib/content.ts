// Single source of truth for Cipherswift site content.
// Plain data so it can later move to JSON / a CMS without touching components.

export const site = {
  name: "Cipherswift",
  legalName: "Cipherswift Solutions",
  tagline: "Decode complexity. Ship swiftly.",
  description:
    "Cipherswift is an AI-first software studio. We decode complex problems into secure, intelligent software — AI agents, products, web & mobile apps — and ship them fast.",
  siteUrl: "https://cipherswift.in",
  email: "cipherswift@gmail.com",
  location: "India",
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ai-agents",
    title: "AI Agents & Automation",
    icon: "Bot",
    blurb:
      "Autonomous agents and workflows that handle real work — research, support, operations and decisioning — wired safely into your systems.",
    points: ["Custom multi-step agents", "RAG over your data", "Human-in-the-loop guardrails", "Tool & API integration"],
  },
  {
    slug: "ai-products",
    title: "AI Product Development",
    icon: "Sparkles",
    blurb:
      "From prototype to production: generative AI features, copilots and models engineered to scale with your business.",
    points: ["LLM apps & copilots", "Model fine-tuning & evals", "Vector search", "Production MLOps"],
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    icon: "Code2",
    blurb:
      "Fast, modern web and mobile applications — built on a solid engineering foundation and designed to convert.",
    points: ["Next.js & React", "Mobile apps", "APIs & backends", "UI/UX design"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    blurb:
      "Cloud architecture, automation and CI/CD that keep your platform secure, observable and cost-efficient.",
    points: ["AWS architecture", "CI/CD pipelines", "Containers & serverless", "Cost & security hardening"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: "Compass",
    blurb:
      "Strategy and architecture guidance to help you choose the right technology and adopt AI with confidence.",
    points: ["AI adoption roadmaps", "Architecture review", "Tech due diligence", "Team augmentation"],
  },
  {
    slug: "training-careers",
    title: "AI Training & Careers",
    icon: "GraduationCap",
    blurb:
      "Hands-on Generative AI and modern engineering programs that upskill teams and launch careers.",
    points: ["GenAI bootcamps", "Corporate workshops", "Mentorship", "Placement support"],
  },
];

export const stats = [
  { target: 40, suffix: "+", label: "Projects delivered" },
  { target: 25, suffix: "+", label: "Happy clients" },
  { target: 15, suffix: "+", label: "AI solutions shipped" },
  { target: 100, suffix: "%", label: "Client focused" },
];

export const features = [
  {
    icon: "Cpu",
    title: "AI-first engineering",
    text: "We don't bolt AI on — we design products around it, from data to UX.",
  },
  {
    icon: "ShieldCheck",
    title: "Production-grade",
    text: "Secure, observable, well-tested systems built to scale, not just to demo.",
  },
  {
    icon: "Workflow",
    title: "End-to-end delivery",
    text: "Strategy, design, build and ship — one accountable team across the lifecycle.",
  },
  {
    icon: "Rocket",
    title: "Speed with substance",
    text: "Rapid prototypes that mature into reliable platforms, without the rework.",
  },
];

export const process = [
  { step: "01", title: "Discover", text: "We map the problem, your data and the outcomes that matter." },
  { step: "02", title: "Design", text: "Architecture, UX and an AI approach you can trust." },
  { step: "03", title: "Build", text: "Iterative delivery with working software every sprint." },
  { step: "04", title: "Scale", text: "Hardening, observability and support as you grow." },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
