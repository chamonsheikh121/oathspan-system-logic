import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Building2, Network, HeartPulse, Handshake, Layers, Users } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — OATHSPAN" },
      { name: "description", content: "OATHSPAN partners with hospital systems, health networks, value-based care organizations, payer-provider collaboratives, multi-site enterprises, and population health organizations." },
      { property: "og:title", content: "Industries — OATHSPAN" },
      { property: "og:description", content: "Trusted across the healthcare enterprise." },
    ],
  }),
  component: Industries,
});

const items = [
  { i: Building2, t: "Hospital Systems", p: "Margin pressure, contract complexity, fragmented data.", o: "Unified financial-clinical operating view." },
  { i: Network, t: "Health Networks", p: "Variability across sites, inconsistent performance.", o: "Standardized intelligence and benchmark performance." },
  { i: HeartPulse, t: "Value-Based Care Organizations", p: "Risk performance falls short of contract design.", o: "Activated VBC operating model and aligned incentives." },
  { i: Handshake, t: "Payer-Provider Collaboratives", p: "Misaligned data and fractured negotiation.", o: "Shared truth across contracted relationships." },
  { i: Layers, t: "Multi-site Healthcare Enterprises", p: "Scale without systemness.", o: "Enterprise-wide alignment and execution." },
  { i: Users, t: "Population Health Organizations", p: "Data without operational pull-through.", o: "Insight executed where care is delivered." },
];

function Industries() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Industries" title="Built for the entire healthcare enterprise." subtitle="From regional hospital systems to national VBC organizations — OATHSPAN scales to the institutions that move American healthcare." />

      <section className="container-page py-20 grid md:grid-cols-2 gap-6">
        {items.map((x) => (
          <div key={x.t} className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white"><x.i className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-semibold">{x.t}</h3>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Pain points</div>
                <div className="mt-1">{x.p}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-teal">Strategic outcome</div>
                <div className="mt-1 font-medium">{x.o}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
