import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

const cases = [
  { slug: "regional-system", c: "Regional Hospital System", t: "$42M annual margin recovery across 9 hospitals", m: [["+18%","Net margin"],["-22%","Variance"],["9","Hospitals"]] },
  { slug: "vbc-organization", c: "Value-Based Care Organization", t: "Tripled shared savings across 380K covered lives", m: [["3.4x","Shared savings"],["95%","Quality"],["380K","Lives"]] },
  { slug: "academic-system", c: "Academic Medical Center", t: "Unified clinical and financial KPIs across service lines", m: [["100%","Alignment"],["+11%","QA margin"],["-19%","Variation"]] },
  { slug: "multi-state", c: "Multi-state Health System", t: "Board-ready visibility across 27 sites of care", m: [["27","Sites"],["1","Source of truth"],["24/7","Visibility"]] },
];

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — OATHSPAN" },
      { name: "description", content: "Enterprise transformation case studies from health systems, VBC organizations, and academic medical centers partnered with OATHSPAN." },
      { property: "og:title", content: "OATHSPAN Case Studies" },
      { property: "og:description", content: "Measurable transformation across the healthcare enterprise." },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Case Studies" title="Transformation, measured." subtitle="Documented outcomes from health systems and value-based organizations partnering with OATHSPAN." />

      <section className="container-page py-20 grid md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="group rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{c.c}</div>
            <h3 className="mt-3 text-2xl font-bold group-hover:text-teal transition leading-tight">{c.t}</h3>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {c.m.map(([v, l]) => (
                <div key={l} className="rounded-xl bg-muted p-4">
                  <div className="text-2xl font-bold text-navy-deep">{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy">Read case study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
