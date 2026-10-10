import { useEffect, useState } from "react";
import {
  ArrowRight, Brain, Building2, ClipboardList, Clock, Eye, FileWarning, HeartPulse,
  Hospital, KeyRound, Languages, Landmark, Lock, Menu, Nfc, ScanLine, ScrollText,
  ShieldCheck, Stethoscope, TrendingUp, UserX, Watch, X, Zap, CheckCircle2, Pill, Sparkles,
} from "lucide-react";
import Logo from "./components/Logo.jsx";
import Reveal from "./components/Reveal.jsx";
import Hero from "./components/Hero.jsx";
import Dashboard from "./components/Dashboard.jsx";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#vision", label: "Vision 2030" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label="SehaTag home"><Logo size={36} /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/70 transition hover:text-saudi">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#demo" className="btn-primary hidden !py-2.5 lg:inline-flex">Launch Demo</a>
        <button
          className="rounded-full p-2 text-deep lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="container-x flex flex-col gap-1 pb-5 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-mint"
            >
              {l.label}
            </a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="btn-primary mt-2">Launch Demo</a>
        </div>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, arabic, text, center = true }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">{title}</h2>
      {arabic && <p dir="rtl" className="mt-2 font-arabic text-lg text-saudi">{arabic}</p>}
      {text && <p className="mt-4 text-base text-ink/65">{text}</p>}
    </Reveal>
  );
}

function Problem() {
  const items = [
    { icon: UserX, title: "Patient may be unconscious", text: "No way to ask about history, allergies, or medications when every second counts." },
    { icon: FileWarning, title: "Medical history unknown", text: "Records sit in separate systems, unreachable at the point of emergency care." },
    { icon: Pill, title: "Delayed access to critical data", text: "Allergies, chronic diseases, and current medications are found too late — risking errors." },
    { icon: Clock, title: "Manual registration wastes time", text: "Paper forms and repeated questions consume the minutes that matter most." },
  ];
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="The Problem"
          title="In an emergency, missing information costs lives"
          arabic="كل ثانية تهمّ في الطوارئ"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <Icon size={22} />
              </div>
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const points = [
    { icon: Watch, title: "NFC wearable, secure profile", text: "A wristband linked to the patient's protected health profile." },
    { icon: Hospital, title: "Authorized devices only", text: "Hospital and ambulance devices authenticate before any scan resolves." },
    { icon: Eye, title: "Essential data only", text: "Emergency mode reveals just the minimum necessary information." },
    { icon: Brain, title: "AI triage support", text: "Risk scoring and suggested first actions help clinicians decide faster." },
  ];
  return (
    <section id="solution" className="bg-mint/60 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead
            center={false}
            eyebrow="The Solution"
            title="One tap from emergency to informed care"
            arabic="هوية صحية ذكية على معصمك"
            text="SehaTag turns a wristband into a secure key to the information responders need first — nothing more."
          />
          <Reveal><a href="#demo" className="btn-primary">See it in action <ArrowRight size={16} /></a></Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {points.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-saudi text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-base font-bold text-deep">{title}</h3>
              <p className="mt-2 text-sm text-ink/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Watch, title: "Wear SehaTag", text: "The patient wears the NFC wristband daily." },
    { icon: ScanLine, title: "Scan with authorized device", text: "A verified provider taps the band with a hospital device." },
    { icon: ClipboardList, title: "Access emergency profile", text: "Essential data appears instantly on the secure dashboard." },
    { icon: Brain, title: "AI triage support", text: "Risk level and initial recommendations guide the first response." },
  ];
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow="How It Works" title="Four steps, under five seconds" arabic="كيف يعمل صحة تاق" />
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-saudi/30 to-transparent md:block" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-glow ring-1 ring-saudi/10">
                <Icon size={30} className="text-saudi" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold text-deep">{title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-ink/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Nfc, title: "NFC Fast Access", text: "Tap-to-open emergency access with no apps or logins on the patient side." },
    { icon: HeartPulse, title: "Emergency Medical Profile", text: "Blood type, allergies, chronic conditions, and medications in one view." },
    { icon: Brain, title: "AI Triage Score", text: "Instant risk level with suggested initial actions for responders." },
    { icon: Lock, title: "Privacy & Access Control", text: "Role-based access limits who can scan and what they can see." },
    { icon: ScrollText, title: "Audit Log", text: "Every scan is recorded with provider, location, and time." },
    { icon: Languages, title: "Arabic / English Medical Translation", text: "Bilingual terminology so care teams and international staff stay aligned." },
    { icon: Landmark, title: "Saudi Health System Integration", text: "Designed as a concept to connect with national health platforms." },
  ];
  return (
    <section id="features" className="bg-mint/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Features" title="Built for the moments that matter" arabic="مزايا مصممة للطوارئ" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 90}
              className={`card group p-6 transition hover:-translate-y-1 hover:shadow-glow ${
                i === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-saudi transition group-hover:bg-saudi group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-base font-bold text-deep">{title}</h3>
              <p className="mt-2 text-sm text-ink/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Live Demo"
          title="The emergency dashboard"
          arabic="لوحة معلومات الطوارئ"
          text="Prototype with mock data. Press the button to simulate an authorized NFC scan."
        />
        <Reveal className="mx-auto max-w-4xl">
          <Dashboard interactive />
          <p className="mt-4 text-center text-xs text-ink/45">
            Fictional patient data for demonstration only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: KeyRound, title: "Token only on the band", text: "The NFC chip stores a secure token — never the full medical record." },
    { icon: Hospital, title: "Authorized devices only", text: "Data resolves only through verified healthcare devices and providers." },
    { icon: Eye, title: "Minimum necessary data", text: "Emergency mode exposes only what care teams need first." },
    { icon: ScrollText, title: "Every access logged", text: "Immutable audit trail visible to the patient and regulators." },
  ];
  return (
    <section id="security" className="bg-deep py-20 text-white sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            <ShieldCheck size={14} /> Security & Privacy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy by design, not by promise
          </h2>
          <p dir="rtl" className="mt-2 font-arabic text-lg text-gold">خصوصيتك محمية في كل مسح</p>
          <p className="mt-4 max-w-md text-white/70">
            SehaTag is built so a lost or stolen band reveals nothing. Access is authenticated, minimal, and always accountable.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon size={24} className="text-gold" />
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const items = [
    { icon: Zap, title: "Digital Health Transformation", text: "Moving emergency identification from paper to secure digital access." },
    { icon: Sparkles, title: "Smart Healthcare", text: "Wearables and AI supporting clinicians at the point of care." },
    { icon: Stethoscope, title: "Faster Emergency Response", text: "Critical information in seconds, not minutes." },
    { icon: TrendingUp, title: "Improved Patient Safety", text: "Fewer medication and allergy errors in critical moments." },
  ];
  return (
    <section id="vision" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Vision 2030 Alignment"
          title="Supporting Saudi Arabia's health transformation"
          arabic="متوافق مع رؤية السعودية 2030"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="card relative overflow-hidden p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saudi to-gold" />
              <Icon size={26} className="text-saudi" />
              <h3 className="mt-4 text-base font-bold text-deep">{title}</h3>
              <p className="mt-2 text-sm text-ink/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-deep via-saudi to-deep px-6 py-16 text-center text-white sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full border border-gold/30" />
        <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-5xl">
          Ready for Smarter Emergency Care?
        </h2>
        <p dir="rtl" className="relative mt-3 font-arabic text-lg text-white/80">
          جاهز لرعاية طوارئ أذكى؟
        </p>
        <a
          href="#demo"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Launch Demo <ArrowRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-saudi/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Logo size={32} />
        <p className="text-xs text-ink/50">
          © 2026 SehaTag · Hackathon prototype · Mock data only, not a medical device.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <DemoSection />
        <Security />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
