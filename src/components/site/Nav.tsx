import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/empresive-logo.jpg.asset.json";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Empresive" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#home" aria-label="Empresive home" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Empresive" className="h-9 w-auto mix-blend-multiply md:h-11" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-active={active === n.id}
              className="nav-link text-sm font-medium text-charcoal transition-colors hover:text-navy data-[active=true]:text-navy"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold"
          >
            Book a Strategy Call
          </a>
        </nav>
        <button
          className="p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={`block border-b border-border py-4 font-serif text-2xl ${active === n.id ? "text-gold" : "text-navy"}`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-navy py-3.5 text-center text-sm font-semibold text-ivory"
          >
            Book a Strategy Call
          </a>
        </nav>
      )}
    </header>
  );
}
