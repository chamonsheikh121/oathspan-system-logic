import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, TrendingUp, Network, HeartPulse, FileBarChart, Workflow, Layers, Activity, Brain } from "lucide-react";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — OATHSPAN" },
      { name: "description", content: "Eight integrated solutions spanning revenue, value-based care, population health, contracting analytics, operations, and predictive intelligence." },
      { property: "og:title", content: "OATHSPAN Solutions" },
      { property: "og:description", content: "Strategic healthcare solutions for executives." },
    ],
  }),
  component: Solutions,
});

const items = [
  { slug: "revenue-optimization", icon: TrendingUp, t: "Revenue Optimization", d: "Unlock margin across service lines, payers, and contract structures.", b: ["Margin diagnostics", "Yield modeling", "Contract optimization"] },
  { slug: "value-based-care", icon: Network, t: "Value-Based Care Strategy", d: "Activate durable economics across every risk arrangement.", b: ["Risk readiness", "VBC playbooks", "Performance management"] },
  { slug: "population-health", icon: HeartPulse, t: "Population Health Intelligence", d: "Stratify, target, and act on the populations that drive cost and quality.", b: ["Cohort analytics", "Care gaps", "Outcomes tracking"] },
  { slug: "contracting-analytics", icon: FileBarChart, t: "Payment & Contracting Analytics", d: "Model, negotiate, and monitor every payer agreement with confidence.", b: ["Term modeling", "Variance tracking", "Negotiation intelligence"] },
  { slug: "operational-integration", icon: Workflow, t: "Enterprise Operational Integration", d: "Connect operations, finance, and clinical execution into one operating model.", b: ["Service line economics", "Throughput", "Resource optimization"] },
  { slug: "clinical-financial", icon: Layers, t: "Clinical + Financial Alignment", d: "Bring clinicians and finance into a shared, defensible decision framework.", b: ["Unified KPIs", "Cost-of-care", "Quality economics"] },
  { slug: "system-performance", icon: Activity, t: "Healthcare System Performance", d: "Board-ready visibility across every dimension of system performance.", b: ["Executive scorecards", "Benchmarking", "Strategic forecasts"] },
  { slug: "predictive", icon: Brain, t: "Predictive Intelligence", d: "Anticipate volatility in revenue, cost, and quality before it materializes.", b: ["Forecasting", "Scenario modeling", "Risk signals"] },
];

function Solutions() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solutions"
        title="Eight integrated practices. One operating system for the enterprise."
        subtitle="Each OATHSPAN solution is delivered through senior advisory and our unified intelligence platform — engineered for measurable, durable outcomes."
      />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <Link key={s.t} to="/solutions/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white shadow-glow shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-teal transition">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.b.map((x) => (
                      <li key={x} className="text-xs px-2.5 py-1 rounded-full bg-muted text-charcoal">{x}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-navy">
                    View detail <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
