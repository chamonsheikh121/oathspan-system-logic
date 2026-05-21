import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/mock/solutions";

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
          {solutions.map((s) => (
            <Link key={s.title} to="/solutions/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white shadow-glow shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-teal transition">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.intro}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.highlights.map((x) => (
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
