import { ArrowRight, Droplets, HeartPulse, PlayCircle, ShieldCheck } from "lucide-react";
import Logo from "./Logo.jsx";

function Wristband() {
  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
      {/* NFC waves */}
      {[0, 0.8, 1.6].map((d) => (
        <span
          key={d}
          className="absolute h-44 w-44 rounded-full border-2 border-saudi/40 animate-wave"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-mint to-white" />

      <div className="relative animate-float">
        <svg width="230" height="300" viewBox="0 0 230 300" fill="none">
          {/* strap */}
          <path d="M70 0h90l12 100H58z" fill="#004D26" />
          <path d="M58 200h114l-12 100H70z" fill="#004D26" />
          {[18, 34, 50, 66].map((y) => (
            <circle key={y} cx="115" cy={y} r="3" fill="#C9A227" opacity=".8" />
          ))}
          {/* case */}
          <rect x="30" y="85" width="170" height="130" rx="38" fill="#0B1F16" />
          <rect x="38" y="93" width="154" height="114" rx="32" fill="#006C35" />
          <rect x="38" y="93" width="154" height="114" rx="32" stroke="#C9A227" strokeWidth="2" opacity=".6" />
        </svg>
        {/* screen content */}
        <div className="absolute left-[38px] top-[93px] flex h-[114px] w-[154px] flex-col items-center justify-center rounded-[32px] text-white">
          <Logo size={34} withText={false} light />
          <div className="mt-1.5 text-sm font-extrabold tracking-tight">SehaTag</div>
          <div className="flex items-center gap-1 text-[10px] text-white/80">
            <span className="h-1.5 w-1.5 animate-beat rounded-full bg-gold" /> NFC Ready
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="card w-60 p-4 text-left shadow-glow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-saudi">Emergency Profile</div>
          <div className="text-sm font-bold text-deep">A. Al-Qahtani</div>
        </div>
        <div className="flex items-center gap-1 rounded-xl bg-mint px-2 py-1 text-sm font-extrabold text-deep">
          <Droplets size={13} className="text-gold" /> O+
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2">
        <HeartPulse size={16} className="animate-beat text-red-600" />
        <div className="text-xs font-semibold text-red-700">AI Risk: High · 87</div>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-medium text-red-700 ring-1 ring-red-200">Penicillin</span>
        <span className="rounded-full bg-mint px-2.5 py-0.5 text-[10px] font-medium text-deep">Diabetes</span>
        <span className="rounded-full bg-mint px-2.5 py-0.5 text-[10px] font-medium text-deep">Hypertension</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint via-white to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#006C35 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 70% 30%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, black 0%, transparent 65%)",
        }}
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">
            <ShieldCheck size={14} /> Saudi Smart Health Identity
          </span>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-deep sm:text-6xl lg:text-7xl">
            SehaTag
          </h1>
          <div className="mt-1 font-arabic text-3xl font-semibold text-saudi sm:text-4xl">صحة تاق</div>
          <h2 className="mt-6 max-w-xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
            Smart Health Access in <span className="text-saudi">Critical Moments</span>
          </h2>
          <p dir="rtl" className="mt-3 font-arabic text-lg text-ink/70 sm:text-xl">
            هويتك الصحية الذكية في لحظات الطوارئ
          </p>
          <p className="mt-5 max-w-lg text-base text-ink/65">
            An NFC wristband that lets authorized healthcare providers securely open a patient's essential
            emergency data in seconds — even when the patient can't speak.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#demo" className="btn-primary">
              <PlayCircle size={18} /> View Demo
            </a>
            <a href="#how" className="btn-ghost">
              How It Works <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60">
            <span><b className="text-deep">&lt; 5s</b> to emergency profile</span>
            <span><b className="text-deep">0</b> medical data on the band</span>
            <span><b className="text-deep">100%</b> access logged</span>
          </div>
        </div>

        <div className="relative">
          <Wristband />
          <div className="absolute -bottom-4 right-0 hidden animate-float [animation-delay:1.5s] sm:block lg:-right-4">
            <MiniDashboard />
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <MiniDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
