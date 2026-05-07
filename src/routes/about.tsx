import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Target, Eye, Compass, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OATHSPAN" },
      { name: "description", content: "OATHSPAN is a strategic healthcare transformation and intelligence partner pursuing systemness across the modern enterprise." },
      { property: "og:title", content: "About OATHSPAN" },
      { property: "og:description", content: "Healthcare transformation, intelligence, and the philosophy of systemness." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About OATHSPAN"
        title="The philosophy of systemness, engineered into every layer of the enterprise."
        subtitle="We exist to integrate financial and clinical excellence — turning fragmented operations into a unified, executable strategy."
      />

      <section className="container-page py-20 grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, t: "Mission", d: "Bring measurable systemness to every health system we serve — across operations, finance, contracting, and care delivery." },
          { icon: Eye, t: "Vision", d: "An industry where every clinical decision is informed by economic clarity, and every economic decision honors clinical purpose." },
          { icon: Compass, t: "Philosophy", d: "We pursue systemness relentlessly. We keep our oath without compromise. Excellence is institutional, not occasional." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border p-8 bg-card shadow-soft">
            <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center text-white"><c.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our Story</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">A partner built for the executive table.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              OATHSPAN was founded by healthcare operators, financial strategists, and informaticists who shared a frustration:
              the data, talent, and intent inside America's health systems already exists — but the integration does not.
              We built OATHSPAN to close that gap with senior advisory, durable intelligence, and an institutional commitment
              to the systems we serve.
            </p>
          </div>

          <div className="mt-14 relative pl-6 border-l border-border">
            {[
              ["2018", "Founded", "Established to align financial and clinical operations at scale."],
              ["2020", "Platform v1", "Launched unified intelligence layer across claims, EHR, and contracts."],
              ["2022", "VBC Practice", "Expanded into value-based care strategy and risk enablement."],
              ["2024", "Enterprise scale", "Serving 220+ systems across the United States."],
            ].map(([y, t, d]) => (
              <div key={y} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-teal ring-4 ring-background" />
                <div className="text-sm font-semibold text-teal">{y}</div>
                <div className="mt-1 text-lg font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Values</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">Institutional excellence, executed.</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {["Precision","Trust","Leadership","Innovation"].map((v) => (
            <div key={v} className="rounded-2xl border border-border p-6 bg-card">
              <Award className="h-5 w-5 text-teal" />
              <div className="mt-4 font-semibold">{v}</div>
              <div className="mt-1 text-sm text-muted-foreground">Held without compromise across every engagement.</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition">
            Talk with our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
