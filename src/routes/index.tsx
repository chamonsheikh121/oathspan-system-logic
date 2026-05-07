import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Counter } from "@/components/site/Stat";
import heroImg from "@/assets/hero-intelligence.jpg";
import {
  ArrowRight, ShieldCheck, Activity, LineChart, Network, Stethoscope,
  Building2, Workflow, Sparkles, Quote, TrendingUp, BarChart3
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OATHSPAN — Healthcare Intelligence & Enterprise Transformation" },
      { name: "description", content: "OATHSPAN integrates financial and clinical excellence across the healthcare enterprise. Strategic transformation, intelligence and value-based care enablement." },
      { property: "og:title", content: "OATHSPAN — Healthcare Intelligence & Enterprise Transformation" },
      { property: "og:description", content: "Unified economic intelligence for hospital systems, payers, and value-based care organizations." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover mix-blend-screen" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep" />
        <div className="container-page relative pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-cyan animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Healthcare Intelligence Platform
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white text-balance animate-fade-up">
            Integrating financial and clinical excellence across the healthcare enterprise.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 animate-fade-up">
            OATHSPAN unifies operational, economic, and clinical intelligence — giving health system
            executives a single, trusted view of performance across every contract, service line, and population.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-cyan transition shadow-elegant">
              Schedule Strategy Session <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
              Explore Solutions
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            {[
              { v: 220, s: "+", l: "Health systems served" },
              { v: 4, s: "B+", l: "Annual claims analyzed" },
              { v: 18, s: "%", l: "Avg. margin uplift" },
              { v: 99, s: ".9%", l: "Platform reliability" },
            ].map((k) => (
              <div key={k.l} className="bg-navy-deep/40 p-6">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter to={k.v} suffix={k.s} />
                </div>
                <div className="mt-1 text-xs text-white/60">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-border">
        <div className="container-page py-12">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Trusted by leading hospital systems, payers, and value-based care organizations
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
            {["Mercy Health","Vanguard Care","Sentara","Northstar","Atlas Medical","Beacon Health"].map((n)=>(
              <div key={n} className="text-center font-display text-sm md:text-base font-semibold text-charcoal/60">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section eyebrow="Capabilities" title="Unified economic intelligence for the modern health system">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: LineChart, t: "Financial + Clinical Data Integration", d: "One trusted source unifying claims, EHR, contracts, and operational data." },
            { icon: Network, t: "Value-Based Care Enablement", d: "Activate risk, contracting, and quality strategy across every payer arrangement." },
            { icon: Activity, t: "Operational Excellence", d: "Service line economics, throughput, and resource optimization at enterprise scale." },
            { icon: BarChart3, t: "Enterprise Analytics Platform", d: "Executive dashboards and modeled forecasts for board-ready decisioning." },
            { icon: Workflow, t: "Healthcare System Resilience", d: "Predictive intelligence to stabilize revenue, cost, and quality through volatility." },
            { icon: ShieldCheck, t: "Trusted Transformation Partner", d: "Senior advisory paired with intelligence — strategy executed, not just delivered." },
          ].map((c) => (
            <div key={c.t} className="group rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center text-white shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DIAGRAM */}
      <Section eyebrow="Platform" title="From fragmented data to enterprise systemness" muted>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            {[
              { t: "Claims & EHR", d: "Encounter, coding, utilization" },
              { t: "Contracts", d: "Payer terms & risk arrangements" },
              { t: "OATHSPAN", d: "Unified intelligence layer", primary: true },
              { t: "Insights", d: "Margin, quality, performance" },
              { t: "Action", d: "Operational + strategic execution" },
            ].map((b, i) => (
              <div key={b.t} className={`relative rounded-xl p-5 text-center ${b.primary ? "bg-gradient-hero text-white shadow-glow" : "bg-muted"}`}>
                <div className={`text-xs uppercase tracking-wider ${b.primary ? "text-cyan" : "text-muted-foreground"}`}>Step {i + 1}</div>
                <div className={`mt-2 font-semibold ${b.primary ? "text-white" : "text-navy-deep"}`}>{b.t}</div>
                <div className={`mt-1 text-xs ${b.primary ? "text-white/70" : "text-muted-foreground"}`}>{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section>
        <div className="rounded-3xl bg-gradient-hero text-white p-10 md:p-16 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
          <Quote className="h-10 w-10 text-cyan" />
          <p className="mt-6 text-2xl md:text-3xl font-display font-medium leading-snug max-w-4xl text-balance">
            "OATHSPAN didn't just deliver analytics — they helped us reorganize the economics of our health
            system. The clarity is now part of how our board makes decisions."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/15 flex items-center justify-center font-semibold">JM</div>
            <div>
              <div className="font-semibold">James Moreau</div>
              <div className="text-sm text-white/70">CFO, Multi-State Health System</div>
            </div>
          </div>
        </div>
      </Section>

      {/* INSIGHTS */}
      <Section eyebrow="Featured Insights" title="Executive thinking from the OATHSPAN team">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { c: "Value-Based Care", t: "The next decade of risk: building durable VBC economics" },
            { c: "Healthcare Economics", t: "Why systemness is the new operating standard" },
            { c: "Operational Excellence", t: "Inside the unified margin: a CFO's playbook" },
          ].map((p) => (
            <Link key={p.t} to="/insights" className="group rounded-2xl border border-border overflow-hidden bg-card hover:shadow-elegant transition">
              <div className="aspect-[16/10] bg-gradient-accent relative">
                <div className="absolute inset-0 grid-bg opacity-20" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal">{p.c}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-teal transition">{p.t}</h3>
                <div className="mt-4 flex items-center gap-1 text-sm text-navy font-medium">Read article <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-gradient-subtle p-10 md:p-16 text-center shadow-soft">
          <Sparkles className="h-8 w-8 mx-auto text-teal" />
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">Build the next era of your health system.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Partner with OATHSPAN to align strategy, intelligence, and execution across your enterprise.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition shadow-elegant">
            Schedule a Strategy Session <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ eyebrow, title, children, muted }: { eyebrow?: string; title?: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section className={muted ? "bg-muted/40 border-y border-border" : ""}>
      <div className="container-page py-20 md:py-24">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-12">
            {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</div>}
            {title && <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-balance">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
