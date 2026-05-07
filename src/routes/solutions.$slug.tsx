import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const data: Record<string, { title: string; intro: string; challenge: string; approach: string[]; integration: string; metrics: { v: string; l: string }[]; insight: string; faq: { q: string; a: string }[] }> = {
  "revenue-optimization": { title: "Revenue Optimization", intro: "Unlock durable margin across service lines, payer mix, and contract structures.", challenge: "Health systems lose 4-9% of net revenue to fragmented contracts, coding leakage, and undermanaged service line economics.", approach: ["Diagnose margin leakage at contract and encounter level","Model yield by payer, service, and site","Build governance for sustained recovery"], integration: "Claims, remittance, EHR utilization, and contract data flow into a unified yield model maintained by the OATHSPAN platform.", metrics: [{v:"+18%",l:"Avg. margin uplift"},{v:"$42M",l:"Recovered annually (median)"},{v:"<90d",l:"Time to first impact"}], insight: "Revenue is a system property, not a department. Real recovery starts when finance, RCM, and clinical operations share one truth.", faq: [{q:"How long until we see impact?",a:"Most systems realize first-wave impact within 90 days, with sustained programs maturing over 12-18 months."},{q:"Do you replace our RCM vendor?",a:"No. We make your existing stack measurably more effective."}] },
  "value-based-care": { title: "Value-Based Care Strategy", intro: "Activate durable economics across every risk arrangement.", challenge: "Most VBC contracts underperform because risk strategy, operations, and intelligence are not coordinated.", approach: ["Assess risk readiness","Design portfolio strategy","Operationalize performance management"], integration: "Quality measures, attribution, total cost of care, and contract terms connect into a unified VBC operating view.", metrics: [{v:"3.4x",l:"Shared savings improvement"},{v:"95%",l:"Quality measure attainment"},{v:"$120M",l:"Largest annual program"}], insight: "VBC succeeds when it stops being a side initiative and becomes the operating model.", faq:[{q:"Can you support both ACO REACH and commercial risk?",a:"Yes. The platform is contract-agnostic across federal, commercial, and Medicaid arrangements."},{q:"Do you provide care management?",a:"We enable, measure, and optimize care management — we do not replace it."}] },
  "population-health": { title: "Population Health Intelligence", intro: "Stratify, target, and act on the populations driving cost and quality.", challenge: "Population data exists but rarely informs operational decisions at the front line.", approach: ["Cohort intelligence","Care gap activation","Outcome tracking"], integration: "Claims, EHR, SDOH, and quality data unified into actionable cohorts.", metrics:[{v:"-22%",l:"Avoidable utilization"},{v:"+31%",l:"Care gap closure"},{v:"4.7x",l:"ROI on programs"}], insight: "Population health is operational. Insight without execution doesn't change outcomes.", faq:[{q:"Do you build registries?",a:"Yes — and we connect them into the operating workflow."},{q:"How is data refreshed?",a:"Daily for operational signals, with full reconciliation monthly."}] },
  "contracting-analytics": { title: "Payment & Contracting Analytics", intro: "Model, negotiate, and monitor every payer agreement with confidence.", challenge: "Payer agreements are negotiated annually but managed continuously — and the data rarely keeps up.", approach: ["Term modeling","Variance & yield tracking","Negotiation intelligence"], integration: "Contract terms, claims, denials, and remittance unified at the line-item level.", metrics:[{v:"+6.2%",l:"Negotiated rate uplift"},{v:"-37%",l:"Underpayment leakage"},{v:"100%",l:"Contract visibility"}], insight: "You can't negotiate what you can't measure.", faq:[{q:"Do you support hospital and physician contracts?",a:"Both — across institutional and professional structures."},{q:"Can you load custom fee schedules?",a:"Yes. Any payer, any term type."}] },
  "operational-integration": { title: "Enterprise Operational Integration", intro: "Connect operations, finance, and clinical execution into one operating model.", challenge: "Service lines, finance, and operations work in parallel rather than as one enterprise.", approach: ["Service line economics","Throughput design","Resource optimization"], integration: "Operational, financial, and clinical data are aligned at the unit, service, and site level.", metrics:[{v:"+14%",l:"Throughput"},{v:"-9%",l:"Cost per case"},{v:"+22%",l:"Capacity utilization"}], insight: "Systemness is not a slogan — it is an operating discipline.", faq:[{q:"Do you replace operational leadership?",a:"No, we equip and accelerate it."},{q:"How do you measure success?",a:"Through agreed enterprise KPIs measured before, during, and after engagement."}] },
  "clinical-financial": { title: "Clinical + Financial Alignment", intro: "Bring clinicians and finance into a shared, defensible decision framework.", challenge: "Clinical and financial leaders too often work from incompatible data and incentives.", approach: ["Unified KPI architecture","Cost-of-care intelligence","Quality economics"], integration: "Clinical activity, cost accounting, and contract performance unified into one defensible view.", metrics:[{v:"100%",l:"Shared KPI alignment"},{v:"+11%",l:"Quality-adjusted margin"},{v:"-19%",l:"Variation in care"}], insight: "When clinicians and finance share the same data, the conversation changes.", faq:[{q:"Do you require new cost accounting?",a:"We integrate with existing systems and accelerate, not replace, them."},{q:"Is this physician-facing?",a:"Yes — with workflows tuned to clinical leadership cadence."}] },
  "system-performance": { title: "Healthcare System Performance", intro: "Board-ready visibility across every dimension of system performance.", challenge: "Boards and executive teams need a single, defensible view of how the enterprise is performing — and where it's heading.", approach: ["Executive scorecards","Benchmark intelligence","Strategic forecasting"], integration: "Every domain — financial, operational, clinical, contractual — rolled into one executive operating view.", metrics:[{v:"1",l:"Source of truth"},{v:"24/7",l:"Executive visibility"},{v:"100%",l:"Board confidence"}], insight: "When the executive team shares one truth, the enterprise moves faster.", faq:[{q:"Do you provide custom dashboards?",a:"Yes — designed with your CEO and CFO."},{q:"How often is data refreshed?",a:"Operational data daily, financial monthly with mid-month signals."}] },
  "predictive": { title: "Predictive Intelligence", intro: "Anticipate volatility in revenue, cost, and quality before it materializes.", challenge: "Most health systems react to volatility — predictive intelligence makes anticipation operational.", approach: ["Forecasting models","Scenario engines","Real-time risk signals"], integration: "Historical, operational, and external data combined into forward-looking models maintained by OATHSPAN.", metrics:[{v:"92%",l:"Forecast accuracy"},{v:"-15%",l:"Variance to plan"},{v:"<48h",l:"Risk signal latency"}], insight: "The future is forecastable — when intelligence is institutional.", faq:[{q:"Is AI involved?",a:"Yes — supervised, governed, and explainable."},{q:"Do you guarantee accuracy?",a:"We benchmark and improve every model continuously against actuals."}] },
};

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    if (!data[params.slug]) throw notFound();
    return data[params.slug];
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — OATHSPAN` },
      { name: "description", content: loaderData.intro },
      { property: "og:title", content: `${loaderData.title} — OATHSPAN` },
      { property: "og:description", content: loaderData.intro },
    ] : [],
  }),
  component: SolutionDetail,
  errorComponent: ({ error }) => <div className="p-10">Error: {error.message}</div>,
  notFoundComponent: () => (
    <SiteLayout><div className="container-page py-32 text-center"><h1 className="text-3xl font-bold">Solution not found</h1><Link to="/solutions" className="mt-6 inline-block text-teal">Back to solutions</Link></div></SiteLayout>
  ),
});

function SolutionDetail() {
  const d = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow="Solution" title={d.title} subtitle={d.intro} />

      <section className="container-page py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <Block title="Industry Challenge"><p className="text-muted-foreground leading-relaxed">{d.challenge}</p></Block>
          <Block title="The OATHSPAN Approach">
            <ul className="space-y-3">
              {d.approach.map((a: string) => (
                <li key={a} className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" /><span>{a}</span></li>
              ))}
            </ul>
          </Block>
          <Block title="Data Integration"><p className="text-muted-foreground leading-relaxed">{d.integration}</p></Block>

          <Block title="Workflow">
            <div className="grid grid-cols-4 gap-3">
              {["Discover","Integrate","Activate","Sustain"].map((s, i) => (
                <div key={s} className="rounded-xl border border-border p-4 bg-card text-center">
                  <div className="text-xs text-teal font-semibold">0{i + 1}</div>
                  <div className="mt-1 font-semibold text-sm">{s}</div>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Executive Insight">
            <div className="rounded-2xl bg-gradient-hero text-white p-8">
              <p className="font-display text-xl leading-snug">"{d.insight}"</p>
            </div>
          </Block>

          <Block title="Frequently Asked">
            <div className="space-y-3">
              {d.faq.map((f: {q:string;a:string}) => <FAQ key={f.q} q={f.q} a={f.a} />)}
            </div>
          </Block>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border p-6 bg-card sticky top-24">
            <div className="text-xs uppercase tracking-wider text-teal font-semibold">Outcomes</div>
            <div className="mt-4 space-y-5">
              {d.metrics.map((m: {v:string;l:string}) => (
                <div key={m.l}>
                  <div className="text-3xl font-bold text-navy-deep">{m.v}</div>
                  <div className="text-sm text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-5 py-2.5 text-sm font-semibold w-full justify-center hover:bg-navy transition">
              Discuss your system <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-gradient-subtle p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to apply this to your enterprise?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition">Schedule Strategy Session <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
