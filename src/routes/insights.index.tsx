import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Search } from "lucide-react";
import { useState } from "react";
import { insightCategories, insights } from "@/lib/mock/insights";

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
  const filtered = insights.filter((p) => (cat === "All" || p.category === cat) && (q === "" || p.title.toLowerCase().includes(q.toLowerCase())));
  const featured = insights[0];

  return (
    <SiteLayout>
      <PageHero eyebrow="Insights" title="Executive thinking from the OATHSPAN team." subtitle="Strategic perspective on the economics, operations, and intelligence of modern healthcare." />

      <section className="container-page py-16">
        <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group grid lg:grid-cols-2 gap-10 rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition">
          <div className="relative min-h-[320px] overflow-hidden">
            <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-10" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Featured · {featured.category}</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight group-hover:text-teal transition">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-6 text-sm font-semibold text-navy">Read article →</div>
          </div>
        </Link>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((c) => (
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal">{p.category}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-teal transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
