import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-teal animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-balance animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
