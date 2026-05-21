import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { solutionLookup } from "@/lib/mock/solutions";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = solutionLookup[params.slug];
    if (!solution) throw notFound();
    return solution;
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
              {d.faq.map((f: {question:string;answer:string}) => <FAQ key={f.question} q={f.question} a={f.answer} />)}
            </div>
          </Block>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border p-6 bg-card sticky top-24">
            <div className="text-xs uppercase tracking-wider text-teal font-semibold">Outcomes</div>
            <div className="mt-4 space-y-5">
              {d.metrics.map((m: { value:string; label:string }) => (
                <div key={m.label}>
                  <div className="text-3xl font-bold text-navy-deep">{m.value}</div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
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
