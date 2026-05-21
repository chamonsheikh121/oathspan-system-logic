import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { positionLookup } from "@/lib/mock/careers";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const position = positionLookup[params.slug];
    if (!position) throw notFound();
    return position;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — OATHSPAN Careers` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.summary },
        ]
      : [],
  }),
  component: CareerDetail,
});

function CareerDetail() {
  const role = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Open position"
        title={role.title}
        subtitle={role.summary}
      />

      <section className="container-page py-16 grid lg:grid-cols-[1.35fr_0.9fr] gap-10">
        <div className="space-y-10">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1"><Briefcase className="h-4 w-4 text-teal" /> {role.department}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1"><MapPin className="h-4 w-4 text-teal" /> {role.location}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">{role.type}</span>
            </div>

            <h2 className="mt-6 text-2xl font-bold">Role mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{role.mission}</p>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-subtle border border-border p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal">Compensation</div>
                <div className="mt-2 text-2xl font-bold text-navy-deep">{role.salary}</div>
              </div>
              <div className="rounded-2xl bg-gradient-subtle border border-border p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal">Location</div>
                <div className="mt-2 text-2xl font-bold text-navy-deep">{role.location}</div>
              </div>
            </div>
          </div>

          <Block title="What you'll do">
            <ul className="space-y-3">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="What we need">
            <ul className="space-y-3">
              {role.requirements.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-7 sticky top-24 shadow-soft">
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Benefits</div>
            <div className="mt-4 space-y-3">
              {role.benefits.map((benefit) => (
                <div key={benefit} className="rounded-xl bg-muted px-4 py-3 text-sm text-charcoal">{benefit}</div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep text-white px-5 py-3 text-sm font-semibold w-full hover:bg-navy transition"
            >
              Apply now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}