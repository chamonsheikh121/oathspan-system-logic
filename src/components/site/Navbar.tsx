import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "Platform", to: "/platform" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Leadership", to: "/leadership" },
  { label: "Careers", to: "/careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-accent shadow-glow" aria-hidden />
          <span className="font-display text-lg font-bold tracking-tight text-navy-deep">OATHSPAN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-md text-foreground/80 hover:text-navy-deep transition"
              activeProps={{ className: "px-3 py-2 rounded-md text-navy-deep font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-navy-deep px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-navy transition shadow-soft"
          >
            Schedule Strategy Session
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            <Link to="/solutions" className="py-2 text-sm" onClick={() => setOpen(false)}>Solutions</Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="py-2 text-sm" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center rounded-full bg-navy-deep px-5 py-2.5 text-sm text-primary-foreground">
              Schedule Strategy Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
