export type InsightMock = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
};

export const insightCategories = [
  "All",
  "Value-Based Care",
  "Healthcare Economics",
  "Population Health",
  "Operational Excellence",
  "Healthcare AI",
];

export const insights: InsightMock[] = [
  {
    slug: "next-decade-vbc",
    category: "Value-Based Care",
    title: "The next decade of risk: building durable VBC economics",
    excerpt: "Why portfolio risk strategy is the new differentiator for health systems.",
    date: "May 2026",
    readTime: "8 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "systemness-standard",
    category: "Healthcare Economics",
    title: "Why systemness is the new operating standard",
    excerpt: "From slogan to operating discipline — what the best systems do differently.",
    date: "May 2026",
    readTime: "7 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "unified-margin",
    category: "Operational Excellence",
    title: "Inside the unified margin: a CFO's playbook",
    excerpt: "How leading CFOs align finance, ops, and clinical teams around one number.",
    date: "May 2026",
    readTime: "6 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ai-in-vbc",
    category: "Healthcare AI",
    title: "Where AI actually moves the needle in value-based care",
    excerpt: "Beyond hype: governed, explainable AI as institutional infrastructure.",
    date: "May 2026",
    readTime: "9 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "population-execution",
    category: "Population Health",
    title: "Population health is operational, not analytical",
    excerpt: "Insight without execution doesn't change outcomes.",
    date: "May 2026",
    readTime: "7 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "negotiating-2026",
    category: "Healthcare Economics",
    title: "Negotiating 2026: what payer contracts are about to demand",
    excerpt: "Modeled scenarios for the next contracting cycle.",
    date: "May 2026",
    readTime: "8 min read",
    author: "OATHSPAN Editorial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export const insightLookup = Object.fromEntries(insights.map((insight) => [insight.slug, insight])) as Record<
  string,
  InsightMock
>;