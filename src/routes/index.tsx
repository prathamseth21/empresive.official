import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  PanelsTopLeft, Workflow, Palette, ChartNoAxesCombined, Search, AudioLines,
  Target, Compass, ChartLine, Users, MessageCircle, Handshake, ArrowRight, ArrowUpRight, Mail, MapPin, Layers,
} from "lucide-react";
import { Nav, NAV } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import icon from "@/assets/empresive-icon.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Empresive — Full-spectrum Digital Growth · Ireland & India" },
      { name: "description", content: "Websites, CRM & automation, creative, analytics, content & SEO — one team building your growth engine and proving it's working." },
      { property: "og:title", content: "Empresive — The growth partner ambitious businesses actually keep" },
      { property: "og:description", content: "Agency creativity and real data discipline, together. Serving businesses across Ireland, India and beyond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { n: "01", t: "Websites", I: PanelsTopLeft, d: "Design and development of fast, credible, mobile-first websites.", items: ["Framer websites", "WordPress websites", "Landing pages", "Mobile optimisation", "Website maintenance"], o: "Websites that build credibility and generate enquiries." },
  { n: "02", t: "CRM & Automation", I: Workflow, d: "Transform disconnected enquiries into an organised, trackable sales pipeline.", items: ["HubSpot setup", "Lead management", "Email marketing", "Sales workflows", "Contact migration", "Reporting"], o: "Never lose track of a potential customer." },
  { n: "03", t: "Marketing Creative", I: Palette, d: "Create distinctive brand identities and marketing campaigns.", items: ["Logo and branding", "UI/UX design", "Social media graphics", "Facebook advertising creatives", "Promotional campaigns"], o: "A consistent, recognisable brand that attracts attention." },
  { n: "04", t: "Analytics & Insights", I: ChartNoAxesCombined, d: "Turn scattered marketing data into actionable business intelligence.", items: ["Tableau dashboards", "Marketing reporting", "Lead tracking", "Performance analysis", "Data visualisation"], o: "Understand what's working and make better decisions." },
  { n: "05", t: "Content & SEO", I: Search, d: "Create content that helps businesses get discovered and generate enquiries.", items: ["Website and landing-page copy", "Blog posts and articles", "Keyword research", "On-page SEO", "Email and newsletter copy", "Case studies"], o: "Stronger organic visibility and a sustainable source of leads." },
];
const AUDIO = { n: "06", t: "Audio & Post-production", d: "A dedicated creative production service for artists, creators and podcasters.", items: ["Audio editing", "Vocal processing", "Mixing and mastering", "Podcast production", "Video editing"], o: "Professional, consistent and publish-ready content." };

const PRINCIPLES = [
  { I: ChartLine, t: "Measure Everything", d: "Decisions based on evidence, not assumptions." },
  { I: Users, t: "One Team Beats Three Vendors", d: "Strategy, execution and reporting working together." },
  { I: MessageCircle, t: "Plain English Wins", d: "Clear communication without unnecessary jargon." },
  { I: Handshake, t: "Partners, Not Suppliers", d: "Building long-term value through continuous improvement." },
];

const INSIGHTS = [
  { c: "Websites", r: 7, t: "Why your website isn't generating leads (and 5 fixes that work)." },
  { c: "CRM", r: 6, t: "Do you actually need a CRM? A small-business reality check." },
  { c: "Local SEO", r: 5, t: "Local SEO for Irish businesses: A simple starting checklist." },
  { c: "Analytics", r: 6, t: "The 5 marketing numbers worth watching (and the vanity metrics to ignore)." },
  { c: "Creator Track", r: 8, t: "Turn your podcast into a lead channel: A creator's playbook." },
];

function Index() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Approach />
        <Why />
        <HowWeWork />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function SectionHead({ eyebrow, title, text, light }: { eyebrow?: string; title: React.ReactNode; text?: string; light?: boolean }) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className={`display text-4xl md:text-6xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${light ? "text-ivory/70" : "text-charcoal"}`}>{text}</p>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="relative bg-ivory pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <Reveal>
          <p className="eyebrow mb-7">Full-spectrum digital growth · Ireland &amp; India</p>
          <h1 className="display text-5xl text-navy sm:text-6xl xl:text-7xl">
            The growth partner ambitious businesses <em className="text-gold">actually keep.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-charcoal">
            We bring agency creativity and real data discipline together — so your growth is built to last, not just to look good.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-navy px-7 py-4 text-sm font-semibold text-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5">
              Book a free strategy call <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center gap-3 border border-navy/20 px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-gold">
              Explore our solutions
            </a>
          </div>
        </Reveal>
        <Reveal delay={200}><HeroVisual /></Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const bars = [38, 52, 46, 64, 58, 76, 88];
  return (
    <div className="relative mx-auto aspect-[5/5] w-full max-w-lg">
      <div className="absolute inset-0 translate-x-6 translate-y-6 border border-gold/50" />
      {/* website mockup */}
      <div className="absolute inset-0 bg-background shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-navy/15" /><span className="h-2 w-2 rounded-full bg-navy/15" /><span className="h-2 w-2 rounded-full bg-gold/60" />
          <span className="ml-4 h-2 w-32 bg-ivory" />
        </div>
        <div className="p-7">
          <div className="h-2 w-16 bg-gold/70" />
          <div className="mt-5 font-serif text-3xl leading-tight text-navy">Built to convert.<br /><em className="text-gold">Built to measure.</em></div>
          <div className="mt-5 space-y-2"><div className="h-1.5 w-4/5 bg-ivory" /><div className="h-1.5 w-3/5 bg-ivory" /></div>
          <div className="mt-6 inline-block bg-navy px-4 py-2 text-[10px] font-semibold tracking-widest text-ivory">ENQUIRE</div>
        </div>
      </div>
      {/* analytics */}
      <div className="float-slow absolute -bottom-8 -left-4 w-56 bg-navy p-5 text-ivory shadow-soft sm:-left-10">
        <p className="text-[10px] tracking-[0.2em] text-gold">QUALIFIED LEADS</p>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => <div key={i} className="flex-1 bg-gold/80" style={{ height: `${h}%`, opacity: 0.35 + i * 0.1 }} />)}
        </div>
        <div className="mt-3 h-px bg-ivory/20" />
        <p className="mt-2 text-[10px] text-ivory/60">Website → CRM → Revenue</p>
      </div>
      {/* pipeline */}
      <div className="absolute -right-2 top-1/2 w-48 border border-border bg-background p-4 shadow-soft sm:-right-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-charcoal">PIPELINE</p>
        {["New enquiry", "Qualified", "Proposal", "Won"].map((s, i) => (
          <div key={s} className="mt-3 flex items-center gap-2 text-xs text-navy">
            <span className={`h-1.5 w-1.5 rounded-full ${i === 3 ? "bg-gold" : "bg-navy/30"}`} />
            {s}
            <span className="ml-auto h-1 bg-ivory" style={{ width: `${48 - i * 10}px` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Ticker() {
  const items = ["Websites", "CRM & Automation", "Marketing Creative", "Analytics & Insights", "Content & SEO", "Audio & Post-production"];
  const row = items.map((t, i) => (
    <span key={t} className="flex items-center gap-4 whitespace-nowrap px-8">
      <span className="text-xs text-gold">0{i + 1}</span>
      <span className="font-serif text-xl text-ivory">{t}</span>
      <span className="ml-8 h-1 w-1 rotate-45 bg-gold" />
    </span>
  ));
  return (
    <div className="overflow-hidden bg-navy py-6" aria-label="Our services">
      <div className="ticker flex w-max">{row}{row}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHead eyebrow="Our story" title={<>Good marketing attracts attention. <em className="text-gold">Great systems</em> turn it into growth.</>} />
          <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-charcoal lg:pt-12">
            <p>Most growing businesses get one of two things from agencies: a beautiful website that does nothing measurable, or a pile of data they can't act on. Rarely both, and almost never from the same team.</p>
            <p>Empresive exists to close that gap. We pair the creative side of marketing — websites, branding and campaigns — with the operational side most agencies skip: CRM, automation and analytics that tie everything back to revenue.</p>
            <p>It's how the best-run companies grow, made available to businesses without a ten-person marketing department.</p>
          </Reveal>
        </div>

        <Reveal className="my-20 border-y border-border py-12 text-center">
          <p className="display mx-auto max-w-4xl text-3xl text-navy md:text-5xl">“One team that builds your growth engine <em className="text-gold">and proves it's working.</em>”</p>
        </Reveal>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {[
            { I: Target, l: "Our mission", t: "To give ambitious businesses the data-driven growth engine usually reserved for big companies — websites, CRM, creative and analytics working as one system, with every decision tied to a number you can see." },
            { I: Compass, l: "Our vision", t: "A world where any growing business can compete on the quality of its work, not the size of its budget — where being small is never the reason growth stalls." },
          ].map(({ I, l, t }, i) => (
            <Reveal key={l} delay={i * 120} className={`p-10 md:p-14 ${i ? "bg-navy text-ivory" : "bg-ivory"}`}>
              <div className="flex items-center gap-3"><I size={18} className="text-gold" /><p className="eyebrow">{l}</p></div>
              <p className={`mt-6 font-serif text-2xl leading-snug ${i ? "text-ivory" : "text-navy"}`}>{t}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 100} className="border-t border-navy pt-6">
              <div className="flex items-center justify-between"><span className="text-xs font-semibold text-gold">0{i + 1}</span><I size={18} className="text-navy/50" /></div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="What we do" title={<>Six services. <em className="text-gold">One growth engine.</em></>} text="Each works on its own. Together, they turn strangers into customers — and give you the data to prove it." />
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ n, t, I, d, items, o }, i) => (
            <Reveal key={n} delay={(i % 3) * 100} as="article" className="group relative bg-background p-8 transition-colors duration-500 hover:bg-navy md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-serif text-4xl text-gold">{n}</span>
                <I size={20} className="text-navy/40 transition-colors group-hover:text-gold" />
              </div>
              <h3 className="mt-8 font-serif text-3xl text-navy transition-colors group-hover:text-ivory">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal transition-colors group-hover:text-ivory/70">{d}</p>
              <ul className="mt-6 space-y-1.5 text-sm text-navy transition-colors group-hover:text-ivory/85">
                {items.map((x) => <li key={x} className="flex gap-2"><span className="text-gold">—</span>{x}</li>)}
              </ul>
              <p className="mt-8 border-t border-border pt-5 text-sm font-semibold text-navy transition-colors group-hover:border-ivory/15 group-hover:text-gold">{o}</p>
            </Reveal>
          ))}
          <Reveal as="article" delay={200} className="relative bg-navy p-8 text-ivory md:p-10">
            <div className="flex items-start justify-between">
              <span className="font-serif text-4xl text-gold">{AUDIO.n}</span>
              <span className="border border-gold px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] text-gold">CREATOR TRACK</span>
            </div>
            <div className="mt-8 flex items-center gap-3"><AudioLines size={22} className="text-gold" /><h3 className="font-serif text-3xl">{AUDIO.t}</h3></div>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">{AUDIO.d}</p>
            <ul className="mt-6 space-y-1.5 text-sm text-ivory/85">
              {AUDIO.items.map((x) => <li key={x} className="flex gap-2"><span className="text-gold">—</span>{x}</li>)}
            </ul>
            <p className="mt-8 border-t border-ivory/15 pt-5 text-sm font-semibold text-gold">{AUDIO.o}</p>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-charcoal">Services 01–05 form the business growth engine. The Creator Track serves artists, creators and podcasters.</p>
      </div>
    </section>
  );
}

function Approach() {
  const stages = [
    { n: "01", t: "Attract", s: "Websites · Marketing Creative · Content & SEO", d: "Attract the right audience through strong digital experiences and marketing." },
    { n: "02", t: "Convert", s: "CRM & Automation", d: "Capture enquiries, organise prospects, automate follow-ups and improve conversion processes." },
    { n: "03", t: "Optimise", s: "Analytics & Insights", d: "Measure performance, identify opportunities and improve business decisions." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-ivory md:py-36">
      <img src={icon.url} alt="" aria-hidden className="pointer-events-none absolute -right-24 -top-24 w-[28rem] opacity-[0.06] grayscale" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead light eyebrow="The Empresive approach" title={<>From first impression to <em className="text-gold">measurable growth.</em></>} text="Most agencies stop at attention. Our services are arranged as one loop — what you attract gets captured, what you capture gets measured, and what you measure makes the next round sharper." />
        <Reveal className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ivory/15 md:block" />
          <div className="draw-line absolute left-0 right-0 top-6 hidden h-px bg-gold md:block" />
          <div className="absolute bottom-0 left-6 top-0 w-px bg-ivory/15 md:hidden" />
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {stages.map((s, i) => (
              <div key={s.n} className="relative pl-16 md:pl-0">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-gold bg-navy font-serif text-lg text-gold md:relative">{s.n}</div>
                {i < 2 && <ArrowRight size={16} className="absolute right-4 top-4 hidden text-gold md:block" />}
                <h3 className="font-serif text-4xl md:mt-8">{s.t}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">{s.s}</p>
                <p className="mt-4 leading-relaxed text-ivory/70">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { I: ChartLine, t: "Data-driven by default", d: "Every recommendation connects to measurable performance." },
    { I: Users, t: "One team, end to end", d: "Strategy, websites, systems, creative and reporting under one roof." },
    { I: Layers, t: "Built on real RevOps experience", d: "Experience aligning marketing, sales and data to improve business performance." },
    { I: MessageCircle, t: "Plain English, always", d: "We explain what we're doing, why we're doing it and what it means for your business." },
  ];
  return (
    <section id="why" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead eyebrow="Why Empresive" title={<>More than an agency. <em className="text-gold">A partner</em> in your growth.</>} />
        </div>
        <div>
          {items.map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 80} className="group grid grid-cols-[auto_1fr] gap-6 border-t border-border py-10 last:border-b">
              <span className="mt-1 flex h-10 w-10 items-center justify-center border border-border text-navy transition-colors group-hover:border-gold group-hover:text-gold"><I size={18} /></span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-navy">{t}</h3>
                <p className="mt-3 font-serif text-2xl leading-snug text-charcoal">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { n: "01", t: "Discover", d: "We learn your business, your goals and your numbers — then agree on what growth actually means for you." },
    { n: "02", t: "Build", d: "Websites, systems and campaigns designed from day one to convert and be measured." },
    { n: "03", t: "Grow", d: "We track, report and optimise — so progress compounds instead of stalling after launch." },
  ];
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="How we work" title={<>From first conversation to <em className="text-gold">compounding growth.</em></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150} className="relative bg-background p-10 shadow-soft" >
              <span className="display text-8xl text-gold/30">{s.n}</span>
              <h3 className="mt-4 font-serif text-3xl text-navy">{s.t}</h3>
              <p className="mt-4 leading-relaxed text-charcoal">{s.d}</p>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gold" style={{ width: `${(i + 1) * 33.3}%` }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const first = INSIGHTS[0]!; const rest = INSIGHTS.slice(1);
  return (
    <section id="insights" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="Insights" title={<>Ideas, playbooks <em className="text-gold">and proof.</em></>} text="Practical, no-fluff advice on websites, CRM, content and getting found." />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal as="article" className="flex flex-col justify-between bg-navy p-10 text-ivory md:p-12">
            <div>
              <p className="eyebrow">{first.c} · Featured</p>
              <h3 className="display mt-6 text-4xl">{first.t}</h3>
            </div>
            <div className="mt-16 flex items-center justify-between text-sm text-ivory/60">
              <span>{first.r} min read</span><span className="text-gold">Coming soon</span>
            </div>
          </Reveal>
          <div>
            {rest.map((a, i) => (
              <Reveal key={a.t} as="article" delay={i * 80} className="group flex items-start gap-6 border-t border-border py-7 last:border-b">
                <span className="w-28 shrink-0 pt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold">{a.c}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl leading-snug text-navy transition-colors group-hover:text-gold">{a.t}</h3>
                  <p className="mt-2 text-xs text-charcoal">{a.r} min read · Coming soon</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:text-gold" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Errs = { name?: string; email?: string; details?: string };

function Contact() {
  const [errors, setErrors] = useState<Errs>({});
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || "").trim();
    const errs: Errs = {};
    if (!v("name")) errs.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errs.email = "Please add a valid work email.";
    if (!v("details")) errs.details = "Tell us a little about your project.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const body = `Name: ${v("name")}\nEmail: ${v("email")}\nCompany: ${v("company")}\nService: ${v("service")}\n\n${v("details")}`;
    window.location.href = `mailto:hello@empresive.com?subject=${encodeURIComponent(`Strategy call enquiry — ${v("name")}`)}&body=${encodeURIComponent(body)}`;
  };
  const field = "w-full border-b border-ivory/25 bg-transparent py-3 text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-gold";
  return (
    <section id="contact" className="bg-navy py-24 text-ivory md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-2">
        <div>
          <SectionHead light eyebrow="Contact" title={<>Let's talk about <em className="text-gold">your growth.</em></>} text="Tell us where you want to get to. We'll tell you, honestly, whether and how we can help — no hard sell." />
          <Reveal className="mt-12 space-y-6">
            {["You send us a message or book a call.", "We have a short, no-obligation conversation.", "If we're a fit, we come back with a clear plan and proposed cost."].map((s, i) => (
              <div key={s} className="flex gap-5"><span className="font-serif text-xl text-gold">0{i + 1}</span><p className="text-ivory/80">{s}</p></div>
            ))}
          </Reveal>
          <Reveal className="mt-12 space-y-3 border-t border-ivory/15 pt-8 text-sm text-ivory/70">
            <a href="mailto:hello@empresive.com" className="flex items-center gap-3 text-ivory hover:text-gold"><Mail size={16} className="text-gold" />hello@empresive.com</a>
            <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" />Dublin, Ireland · Ghaziabad, India</p>
            <p className="pl-7">Working with clients everywhere.</p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <form onSubmit={onSubmit} noValidate className="space-y-7 border border-ivory/15 p-8 md:p-12">
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="block"><span className="eyebrow">Name</span><input name="name" className={field} aria-invalid={!!errors.name} />{errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}</label>
              <label className="block"><span className="eyebrow">Work email</span><input name="email" type="email" className={field} aria-invalid={!!errors.email} />{errors.email && <span className="mt-1 block text-xs text-destructive">{errors.email}</span>}</label>
            </div>
            <label className="block"><span className="eyebrow">Company</span><input name="company" className={field} /></label>
            <label className="block"><span className="eyebrow">Service of interest</span>
              <select name="service" className={`${field} [&>option]:text-navy`} defaultValue="">
                <option value="">Not sure yet</option>
                {[...SERVICES.map((s) => s.t), AUDIO.t].map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="block"><span className="eyebrow">Project details</span><textarea name="details" rows={4} className={`${field} resize-none`} aria-invalid={!!errors.details} />{errors.details && <span className="mt-1 block text-xs text-destructive">{errors.details}</span>}</label>
            <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5">
              Book a free strategy call <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-navy text-ivory/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-3"><img src={icon.url} alt="" className="h-9 w-auto" /><span className="text-2xl font-semibold tracking-tight text-ivory">empresive</span></a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">Full-spectrum digital growth — websites, CRM, creative, analytics and content working as one system. Ireland &amp; India.</p>
          <a href="mailto:hello@empresive.com" className="mt-5 inline-block text-sm text-gold">hello@empresive.com</a>
          <p className="mt-2 text-sm">Dublin, Ireland · Ghaziabad, India</p>
        </div>
        <div><p className="eyebrow mb-4">Navigate</p><ul className="space-y-2 text-sm">{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-gold">{n.label}</a></li>)}</ul></div>
        <div><p className="eyebrow mb-4">Services</p><ul className="space-y-2 text-sm">{[...SERVICES.map((s) => s.t), AUDIO.t].map((t) => <li key={t}><a href="#services" className="hover:text-gold">{t}</a></li>)}</ul></div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs">© 2026 Empresive. All rights reserved.</div>
    </footer>
  );
}
