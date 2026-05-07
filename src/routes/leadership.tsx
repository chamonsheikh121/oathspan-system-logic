import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";

const leaders = [
  { i: "AR", n: "Dr. Anand Rao", r: "Founder & Chief Executive Officer", b: "Former health system COO and value-based care architect across academic and community systems." },
  { i: "EM", n: "Elena Marquez", r: "President, Strategy & Intelligence", b: "20-year leader in healthcare economics, contracting, and enterprise analytics." },
  { i: "JT", n: "James Thornton", r: "Chief Platform Officer", b: "Led healthcare data platforms at scale across payer and provider environments." },
  { i: "PV", n: "Dr. Priya Venkat", r: "Chief Clinical Officer", b: "Practicing clinician and population health strategist." },
];

const advisors = [
  { i: "RH", n: "Robert Hale", r: "Former CFO, National Health System" },
  { i: "MK", n: "Margaret Kim", r: "Former CEO, Integrated Network" },
  { i: "TS", n: "Thomas Saunders", r: "Former CMO, Academic Medical Center" },
];

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — OATHSPAN" },
      { name: "description", content: "Meet the OATHSPAN leadership team and advisory board — operators, strategists, and clinicians shaping the future of healthcare intelligence." },
      { property: "og:title", content: "OATHSPAN Leadership" },
      { property: "og:description", content: "Operators, strategists, and clinicians." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Leadership" title="Operators. Strategists. Clinicians." subtitle="The OATHSPAN team brings decades of executive healthcare experience to every engagement." />

      <section className="container-page py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Executive Team</div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {leaders.map((l) => (
            <div key={l.n} className="rounded-2xl border border-border bg-card p-8 shadow-soft flex gap-6">
              <div className="h-20 w-20 rounded-2xl bg-gradient-hero text-white flex items-center justify-center font-display text-2xl font-bold shrink-0">{l.i}</div>
              <div>
                <h3 className="text-xl font-semibold">{l.n}</h3>
                <div className="text-sm text-teal font-medium">{l.r}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.b}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-teal">Advisory Board</div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {advisors.map((a) => (
            <div key={a.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-14 w-14 rounded-xl bg-muted flex items-center justify-center font-semibold text-navy-deep">{a.i}</div>
              <div className="mt-4 font-semibold">{a.n}</div>
              <div className="text-sm text-muted-foreground">{a.r}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-hero text-white p-10 md:p-16">
          <div className="text-cyan text-xs uppercase tracking-wider font-semibold">Leadership Principles</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">We hold the oath of every system we serve.</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-white/85">
            <div><div className="font-semibold text-white">Institutional</div>Excellence is engineered, not occasional.</div>
            <div><div className="font-semibold text-white">Integrated</div>Strategy and intelligence are inseparable.</div>
            <div><div className="font-semibold text-white">Inviolable</div>Trust is the precondition of every engagement.</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
