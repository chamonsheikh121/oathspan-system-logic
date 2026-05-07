import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowLeft, Quote } from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case Study — ${params.slug.replace(/-/g, " ")} — OATHSPAN` },
      { name: "description", content: "OATHSPAN enterprise transformation case study." },
      { property: "og:title", content: "OATHSPAN Case Study" },
      { property: "og:description", content: "Documented outcomes across the healthcare enterprise." },
    ],
  }),
  component: CaseDetail,
});

function CaseDetail() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <SiteLayout>
      <PageHero eyebrow="Case Study" title={title} subtitle="A multi-year transformation engagement that aligned finance, operations, and clinical execution into a single operating model." />

      <section className="container-page py-16">
        <Link to="/case-studies" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-navy"><ArrowLeft className="h-4 w-4" /> All case studies</Link>

        <div className="mt-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Section t="Client Overview"><p className="text-muted-foreground leading-relaxed">A multi-hospital health system serving 2.4M patients across nine acute-care facilities and a connected ambulatory network.</p></Section>
            <Section t="The Challenge"><p className="text-muted-foreground leading-relaxed">Margin compression, contract complexity, and disconnected service line economics had erased visibility into where value was created — and where it was lost.</p></Section>
            <Section t="Strategic Intervention">
              <ul className="space-y-2 text-foreground/85">
                <li>· Unified claims, EHR, contracts, and cost into a single intelligence layer</li>
                <li>· Built service line economic models with monthly executive cadence</li>
                <li>· Established margin governance across finance, ops, and clinical leadership</li>
              </ul>
            </Section>

            <Section t="Operational Improvements">
              <div className="rounded-2xl border border-border p-6 bg-card">
                <div className="text-xs uppercase tracking-wider text-teal font-semibold">Timeline</div>
                <ol className="mt-4 space-y-4 border-l border-border pl-6">
                  {["Diagnostic & data integration","Service line economic activation","Contract & yield governance","Sustained operating discipline"].map((s,i)=>(
                    <li key={s} className="relative">
                      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-teal ring-4 ring-card" />
                      <div className="text-xs text-muted-foreground">Phase 0{i+1}</div>
                      <div className="font-semibold">{s}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </Section>

            <Section t="Financial Impact">
              <div className="grid grid-cols-3 gap-4">
                {[["$42M","Annual recovery"],["+18%","Net margin"],["-22%","Variance to plan"]].map(([v,l])=>(
                  <div key={l} className="rounded-2xl bg-gradient-subtle border border-border p-6">
                    <div className="text-3xl font-bold text-navy-deep">{v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </Section>

            <div className="rounded-2xl bg-gradient-hero text-white p-10">
              <Quote className="h-8 w-8 text-cyan" />
              <p className="mt-4 text-2xl font-display leading-snug">"OATHSPAN became part of how our executive team thinks. The intelligence is now institutional."</p>
              <div className="mt-6 text-sm text-white/70">— Chief Financial Officer</div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border p-6 bg-card sticky top-24">
              <div className="text-xs uppercase tracking-wider text-teal font-semibold">At a glance</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-muted-foreground">Sector</dt><dd className="font-semibold">Health system</dd></div>
                <div><dt className="text-muted-foreground">Footprint</dt><dd className="font-semibold">9 hospitals · 80+ clinics</dd></div>
                <div><dt className="text-muted-foreground">Engagement</dt><dd className="font-semibold">36 months</dd></div>
                <div><dt className="text-muted-foreground">Solutions</dt><dd className="font-semibold">Revenue · Operations · Contracting</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ t, children }: { t: string; children: React.ReactNode }) {
  return <div><h2 className="text-2xl md:text-3xl font-bold mb-4">{t}</h2>{children}</div>;
}
