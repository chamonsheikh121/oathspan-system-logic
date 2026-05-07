import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — OATHSPAN Insights` },
      { name: "description", content: "Executive perspective from the OATHSPAN team on healthcare economics and intelligence." },
      { property: "og:title", content: "OATHSPAN Insights" },
      { property: "og:description", content: "Strategic healthcare thought leadership." },
    ],
  }),
  component: InsightDetail,
});

const toc = [
  { id: "intro", t: "Introduction" },
  { id: "context", t: "Industry context" },
  { id: "approach", t: "A new approach" },
  { id: "outcomes", t: "Outcomes that compound" },
  { id: "closing", t: "Closing perspective" },
];

function InsightDetail() {
  const { slug } = Route.useParams();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <SiteLayout>
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border">
        <div className="h-full bg-teal transition-all" style={{ width: `${progress}%` }} />
      </div>

      <section className="bg-gradient-subtle border-b border-border">
        <div className="container-page py-16 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-navy mb-6"><ArrowLeft className="h-4 w-4" /> Back to insights</Link>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Healthcare Economics</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</span>
            <span>By OATHSPAN Editorial</span>
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-[220px_1fr] gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Contents</div>
            <ul className="space-y-2 text-sm">
              {toc.map((t) => <li key={t.id}><a href={`#${t.id}`} className="text-foreground/70 hover:text-teal">{t.t}</a></li>)}
            </ul>
          </div>
        </aside>

        <article className="max-w-3xl prose-lg">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-hero mb-10 relative overflow-hidden"><div className="absolute inset-0 grid-bg opacity-15" /></div>
          <p id="intro" className="text-xl text-charcoal leading-relaxed">
            The most consequential decisions in American healthcare are no longer made one contract at a time —
            they are made through the architecture of the entire enterprise.
          </p>
          <h2 id="context" className="text-2xl font-bold mt-10 mb-3">Industry context</h2>
          <p className="text-foreground/80 leading-relaxed">For two decades, healthcare leaders have invested in point solutions. The next decade will reward the leaders who invest in coherence — in systemness as a measurable operating discipline.</p>
          <blockquote className="my-8 border-l-4 border-teal bg-muted/40 p-6 rounded-r-xl">
            <p className="text-xl font-display italic text-navy-deep">"Coherence beats sophistication. Systemness compounds."</p>
          </blockquote>
          <h2 id="approach" className="text-2xl font-bold mt-10 mb-3">A new approach</h2>
          <p className="text-foreground/80 leading-relaxed">OATHSPAN's intelligence layer unifies the data the enterprise already has — claims, EHR, contracts, cost — and renders it actionable for executives, operators, and clinicians on the same surface.</p>
          <div className="my-8 grid grid-cols-3 gap-3">
            {[["+18%","Margin uplift"],["-22%","Variance"],["3.4x","ROI"]].map(([v,l])=>(
              <div key={l} className="rounded-xl border border-border p-5">
                <div className="text-3xl font-bold text-navy-deep">{v}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
          <h2 id="outcomes" className="text-2xl font-bold mt-10 mb-3">Outcomes that compound</h2>
          <p className="text-foreground/80 leading-relaxed">Health systems that adopt institutional intelligence don't just improve quarterly performance — they change the operating posture of the enterprise.</p>
          <h2 id="closing" className="text-2xl font-bold mt-10 mb-3">Closing perspective</h2>
          <p className="text-foreground/80 leading-relaxed">The work ahead is not technological. It is institutional. And it begins with the oath every health system makes to the communities it serves.</p>

          <div className="mt-16 rounded-2xl bg-gradient-hero text-white p-8">
            <div className="text-cyan text-xs uppercase tracking-wider font-semibold">Newsletter</div>
            <h3 className="mt-2 text-2xl font-bold">Executive briefings, monthly.</h3>
            <form className="mt-5 flex gap-2">
              <input className="flex-1 rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none" placeholder="you@system.org" />
              <button className="rounded-md bg-teal px-5 py-2 text-sm font-semibold hover:bg-cyan hover:text-navy-deep transition">Subscribe</button>
            </form>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-wider text-teal font-semibold">Related</div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <Link to="/insights" className="rounded-xl border border-border p-5 hover:shadow-soft transition"><div className="font-semibold">Why systemness is the new operating standard</div></Link>
              <Link to="/insights" className="rounded-xl border border-border p-5 hover:shadow-soft transition"><div className="font-semibold">Inside the unified margin: a CFO's playbook</div></Link>
            </div>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}
