import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Search } from "lucide-react";
import { useState } from "react";

const cats = ["All","Value-Based Care","Healthcare Economics","Population Health","Operational Excellence","Healthcare AI"];
const posts = [
  { slug: "next-decade-vbc", c: "Value-Based Care", t: "The next decade of risk: building durable VBC economics", e: "Why portfolio risk strategy is the new differentiator for health systems." },
  { slug: "systemness-standard", c: "Healthcare Economics", t: "Why systemness is the new operating standard", e: "From slogan to operating discipline — what the best systems do differently." },
  { slug: "unified-margin", c: "Operational Excellence", t: "Inside the unified margin: a CFO's playbook", e: "How leading CFOs align finance, ops, and clinical teams around one number." },
  { slug: "ai-in-vbc", c: "Healthcare AI", t: "Where AI actually moves the needle in value-based care", e: "Beyond hype: governed, explainable AI as institutional infrastructure." },
  { slug: "population-execution", c: "Population Health", t: "Population health is operational, not analytical", e: "Insight without execution doesn't change outcomes." },
  { slug: "negotiating-2026", c: "Healthcare Economics", t: "Negotiating 2026: what payer contracts are about to demand", e: "Modeled scenarios for the next contracting cycle." },
];

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — OATHSPAN" },
      { name: "description", content: "Executive thought leadership on value-based care, healthcare economics, population health, operational excellence, and healthcare AI." },
      { property: "og:title", content: "OATHSPAN Insights" },
      { property: "og:description", content: "Healthcare intelligence thought leadership." },
    ],
  }),
  component: Insights,
});

function Insights() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = posts.filter(p => (cat === "All" || p.c === cat) && (q === "" || p.t.toLowerCase().includes(q.toLowerCase())));
  const featured = posts[0];

  return (
    <SiteLayout>
      <PageHero eyebrow="Insights" title="Executive thinking from the OATHSPAN team." subtitle="Strategic perspective on the economics, operations, and intelligence of modern healthcare." />

      <section className="container-page py-16">
        <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group grid lg:grid-cols-2 gap-10 rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition">
          <div className="aspect-[16/10] bg-gradient-hero relative">
            <div className="absolute inset-0 grid-bg opacity-15" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Featured · {featured.c}</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight group-hover:text-teal transition">{featured.t}</h2>
            <p className="mt-4 text-muted-foreground">{featured.e}</p>
            <div className="mt-6 text-sm font-semibold text-navy">Read article →</div>
          </div>
        </Link>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm transition ${cat === c ? "bg-navy-deep text-white" : "bg-muted text-charcoal hover:bg-accent"}`}>{c}</button>
            ))}
          </div>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search insights" className="pl-9 pr-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-teal" />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} to="/insights/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition">
              <div className="aspect-[16/10] bg-gradient-accent relative"><div className="absolute inset-0 grid-bg opacity-20" /></div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal">{p.c}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-teal transition">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
