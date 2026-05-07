import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

const roles = [
  { t: "Senior Healthcare Strategy Director", l: "Remote · US", d: "Strategy & Advisory" },
  { t: "Principal Data Engineer", l: "Boston, MA", d: "Platform" },
  { t: "Value-Based Care Lead", l: "Remote · US", d: "Solutions" },
  { t: "Healthcare Economist", l: "Chicago, IL", d: "Intelligence" },
  { t: "Director, Client Transformation", l: "Remote · US", d: "Delivery" },
  { t: "Senior Product Designer", l: "Remote · US", d: "Platform" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — OATHSPAN" },
      { name: "description", content: "Join OATHSPAN — a mission-driven team of operators, strategists, and technologists transforming healthcare." },
      { property: "og:title", content: "Careers at OATHSPAN" },
      { property: "og:description", content: "Mission-driven healthcare innovation careers." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build the future of healthcare with us." subtitle="OATHSPAN is hiring operators, strategists, technologists, and clinicians who believe excellence is institutional." />

      <section className="container-page py-16 grid md:grid-cols-3 gap-6">
        {[
          ["Mission-driven culture","We work on problems that matter — measurably."],
          ["Innovation mindset","Senior advisory, product engineering, and clinical fluency under one roof."],
          ["Team values","Trust, precision, and ownership at every level."],
        ].map(([t,d])=>(
          <div key={t} className="rounded-2xl border border-border p-6 bg-card">
            <div className="font-semibold">{t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{d}</div>
          </div>
        ))}
      </section>

      <section className="container-page py-12">
        <h2 className="text-3xl md:text-4xl font-bold">Open positions</h2>
        <div className="mt-8 divide-y divide-border border border-border rounded-2xl bg-card overflow-hidden">
          {roles.map((r) => (
            <a key={r.t} href="#" className="flex items-center justify-between p-6 hover:bg-muted/50 transition group">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{r.d}</div>
                <div className="mt-1 text-lg font-semibold">{r.t}</div>
                <div className="text-sm text-muted-foreground">{r.l}</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-teal group-hover:translate-x-1 transition" />
            </a>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl bg-gradient-subtle border border-border p-8">
          <div className="text-xs uppercase tracking-wider text-teal font-semibold">Hiring Process</div>
          <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
            {["Apply","Conversation","Working session","Offer"].map((s, i) => (
              <div key={s} className="rounded-xl bg-card border border-border p-4">
                <div className="text-xs text-teal">Step {i+1}</div>
                <div className="font-semibold mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
