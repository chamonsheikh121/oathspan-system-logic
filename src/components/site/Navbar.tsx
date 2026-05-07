import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  { name: "Revenue Optimization", to: "/solutions" },
  { name: "Value-Based Care Strategy", to: "/solutions" },
  { name: "Population Health Intelligence", to: "/solutions" },
  { name: "Payment & Contracting Analytics", to: "/solutions" },
  { name: "Enterprise Operational Integration", to: "/solutions" },
  { name: "Clinical + Financial Alignment", to: "/solutions" },
  { name: "Healthcare System Performance", to: "/solutions" },
  { name: "Predictive Intelligence", to: "/solutions" },
];

const nav = [
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
  const [mega, setMega] = useState(false);

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
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-md text-foreground/80 hover:text-navy-deep transition">
              Solutions <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {mega && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] animate-fade-in">
                <div className="rounded-2xl border border-border bg-background shadow-elegant p-6 grid grid-cols-2 gap-1">
                  {solutions.map((s) => (
                    <Link
                      key={s.name}
                      to={s.to}
                      className="px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted hover:text-navy-deep transition"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
