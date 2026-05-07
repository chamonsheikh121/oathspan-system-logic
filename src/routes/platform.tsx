import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useState } from "react";
import { Database, Cpu, LineChart, ShieldCheck, Workflow, Zap } from "lucide-react";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform Intelligence — OATHSPAN" },
      { name: "description", content: "A unified healthcare intelligence platform — enterprise dashboards, predictive analytics, financial visibility, and AI-supported insight." },
      { property: "og:title", content: "OATHSPAN Platform Intelligence" },
      { property: "og:description", content: "Unified intelligence for the healthcare enterprise." },
    ],
  }),
  component: Platform,
});

const tabs = [
  { k: "unified", t: "Unified Intelligence", d: "One trusted layer integrating claims, EHR, contracts, operations, and quality." },
  { k: "dashboards", t: "Enterprise Dashboards", d: "Executive scorecards, service line economics, and board-ready visibility." },
  { k: "interop", t: "Interoperability", d: "Connectors across all major EHRs, payers, clearinghouses, and ledgers." },
  { k: "predictive", t: "Predictive Analytics", d: "Forecasting, scenario modeling, and risk signals tuned to your operating cadence." },
];

function Platform() {
  const [active, setActive] = useState(tabs[0].k);
  const tab = tabs.find((t) => t.k === active)!;
  return (
    <SiteLayout>
      <PageHero eyebrow="Platform Intelligence" title="A unified intelligence platform engineered for the health system enterprise." subtitle="Built for executives. Trusted by operators. Designed for the long arc of transformation." />

      <section className="container-page py-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-8 md:p-12 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="relative grid md:grid-cols-3 gap-6">
            {[
              { i: Database, t: "Data Layer", d: "Claims · EHR · Contracts · Cost · Quality" },
              { i: Cpu, t: "Intelligence Layer", d: "Models · Forecasts · Risk signals" },
              { i: LineChart, t: "Decision Layer", d: "Dashboards · Workflows · Alerts" },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6">
                <b.i className="h-6 w-6 text-cyan" />
                <div className="mt-4 font-semibold">{b.t}</div>
                <div className="mt-1 text-sm text-white/70">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Capabilities</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for institutional scale.</h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t.k} onClick={() => setActive(t.k)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${active === t.k ? "bg-navy-deep text-white shadow-elegant" : "bg-muted text-charcoal hover:bg-accent"}`}>
              {t.t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">{tab.t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{tab.d}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Zap className="h-4 w-4 text-teal mt-0.5" /> Sub-second query performance at enterprise scale</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-teal mt-0.5" /> HIPAA, HITRUST, and SOC2 aligned</li>
              <li className="flex gap-2"><Workflow className="h-4 w-4 text-teal mt-0.5" /> Integrated into your operating cadence, not bolted on</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="text-xs text-muted-foreground">Mock dashboard</div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[["Net margin","+18.4%","up"],["VBC yield","+6.2%","up"],["Variance","-9.1%","down"]].map(([l,v,d])=>(
                <div key={l} className="rounded-xl bg-muted p-4">
                  <div className="text-xs text-muted-foreground">{l}</div>
                  <div className={`text-xl font-bold ${d==="up"?"text-teal":"text-navy-deep"}`}>{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-navy-deep/5 to-teal/10 relative overflow-hidden">
              <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
                <path d="M0,80 C50,60 100,70 150,40 S250,20 300,30" stroke="currentColor" className="text-teal" fill="none" strokeWidth="2" />
                <path d="M0,80 C50,60 100,70 150,40 S250,20 300,30 L300,100 L0,100 Z" fill="currentColor" className="text-teal/15" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
