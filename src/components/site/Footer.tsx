import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground mt-24">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-accent" />
              <span className="font-display text-lg font-bold tracking-tight">OATHSPAN</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
              SYSTEMNESS, pursued relentlessly. OATH, kept without compromise. A strategic healthcare
              transformation and intelligence partner for the modern enterprise.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Executive briefing email"
                className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button className="rounded-md bg-teal px-4 py-2 text-sm font-medium hover:bg-cyan hover:text-navy-deep transition">
                Subscribe
              </button>
            </form>
          </div>
          <FooterCol title="Company" links={[["About","/about"],["Leadership","/leadership"],["Careers","/careers"],["Contact","/contact"]]} />
          <FooterCol title="Solutions" links={[["Solutions","/solutions"],["Platform","/platform"],["Industries","/industries"]]} />
          <FooterCol title="Resources" links={[["Insights","/insights"],["Case Studies","/case-studies"]]} />
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} OATHSPAN. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/" className="hover:text-white">Privacy</Link>
            <Link to="/" className="hover:text-white">Terms</Link>
            <Link to="/" className="hover:text-white">HIPAA</Link>
            <a href="#" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="hover:text-white transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
