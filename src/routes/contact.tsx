import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OATHSPAN" },
      { name: "description", content: "Schedule a strategy session with OATHSPAN. Our enterprise team partners with health system executives across the United States." },
      { property: "og:title", content: "Contact OATHSPAN" },
      { property: "og:description", content: "Schedule an enterprise strategy session." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Schedule an enterprise strategy session." subtitle="Tell us about your system. A senior member of our team will respond within one business day." />

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <form className="grid md:grid-cols-2 gap-5" onSubmit={(e)=>e.preventDefault()}>
            <Field label="First name" />
            <Field label="Last name" />
            <Field label="Work email" type="email" />
            <Field label="Title" />
            <Field label="Organization" full />
            <div className="md:col-span-2">
              <label className="text-sm font-medium">How can we help?</label>
              <textarea className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal min-h-[140px]" placeholder="Briefly describe your system and priorities" />
            </div>
            <div className="md:col-span-2">
              <button className="inline-flex items-center justify-center rounded-full bg-navy-deep text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition shadow-elegant w-full md:w-auto">
                Request Strategy Session
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-wider text-teal font-semibold">Headquarters</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex gap-3"><MapPin className="h-4 w-4 text-teal mt-0.5" /> 200 Clarendon Street, Boston, MA 02116</div>
              <div className="flex gap-3"><Mail className="h-4 w-4 text-teal mt-0.5" /> partner@oathspan.com</div>
              <div className="flex gap-3"><Phone className="h-4 w-4 text-teal mt-0.5" /> +1 (617) 555-0100</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border h-56 bg-gradient-hero relative">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center text-white/80 text-sm">Boston · New York · Chicago · Remote</div>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", full }: { label: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal" />
    </div>
  );
}
