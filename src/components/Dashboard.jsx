import { useState } from "react";
import {
  Activity, AlertTriangle, CheckCircle2, Droplets, HeartPulse, Lock,
  Nfc, Pill, ShieldAlert, ShieldCheck, Sparkles, XCircle,
} from "lucide-react";
import { patient } from "../data.js";

function Row({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saudi">
        <Icon size={14} /> {label}
      </div>
      {children}
    </div>
  );
}

function Pill_({ children, tone = "mint" }) {
  const tones = {
    mint: "bg-mint text-deep",
    red: "bg-red-50 text-red-700 ring-1 ring-red-200",
    gold: "bg-gold/15 text-[#7a6210]",
  };
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export default function Dashboard({ compact = false, interactive = false }) {
  const [state, setState] = useState(interactive ? "idle" : "ready");

  const simulate = () => {
    setState("scanning");
    setTimeout(() => setState("ready"), 1800);
  };

  if (state !== "ready") {
    return (
      <div className="card relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden p-8 text-center">
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
          {state === "scanning" && (
            <>
              <span className="absolute inset-0 rounded-full border-2 border-saudi/40 animate-wave" />
              <span className="absolute inset-0 rounded-full border-2 border-saudi/40 animate-wave [animation-delay:0.8s]" />
            </>
          )}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-mint text-saudi">
            <Nfc size={44} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-deep">
          {state === "scanning" ? "Verifying provider & reading token…" : "Emergency Access Terminal"}
        </h3>
        <p className="mt-2 max-w-xs text-sm text-ink/60">
          {state === "scanning"
            ? "Authenticating authorized device and requesting minimum emergency data."
            : "Hold an authorized device near the SehaTag wristband to open the emergency profile."}
        </p>
        {state === "idle" && (
          <button onClick={simulate} className="btn-primary mt-6">
            <Nfc size={16} /> Simulate NFC Scan
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-deep to-saudi px-5 py-4 text-white sm:px-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/70">
            <ShieldCheck size={13} /> Emergency Mode · Minimum Data
          </div>
          <div className="mt-1 truncate text-lg font-bold">{patient.name}</div>
          <div className="font-arabic text-sm text-white/80">
            {patient.nameAr} · {patient.age} yrs · {patient.sehaId}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-center rounded-2xl bg-white/10 px-4 py-2 ring-1 ring-white/20">
          <Droplets size={16} className="text-gold" />
          <span className="text-2xl font-extrabold leading-tight">{patient.blood}</span>
        </div>
      </div>

      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
        {/* Left column */}
        <div className="space-y-5">
          <Row icon={AlertTriangle} label="Allergies">
            <div className="flex flex-wrap gap-2">
              {patient.allergies.map((a) => (
                <Pill_ key={a} tone="red">{a}</Pill_>
              ))}
            </div>
          </Row>
          <Row icon={HeartPulse} label="Chronic Conditions">
            <div className="flex flex-wrap gap-2">
              {patient.conditions.map((c) => (
                <Pill_ key={c}>{c}</Pill_>
              ))}
            </div>
          </Row>
          {!compact && (
            <Row icon={Pill} label="Current Medications">
              <div className="flex flex-wrap gap-2">
                {patient.medications.map((m) => (
                  <Pill_ key={m} tone="gold">{m}</Pill_>
                ))}
              </div>
            </Row>
          )}
          <Row icon={Activity} label="Current Vitals">
            <div className="grid grid-cols-2 gap-2.5">
              {patient.vitals.map((v) => (
                <div
                  key={v.label}
                  className={`rounded-2xl border px-3.5 py-2.5 ${
                    v.warn ? "border-red-200 bg-red-50/60" : "border-saudi/10 bg-mint/60"
                  }`}
                >
                  <div className="text-[11px] font-medium text-ink/55">{v.label}</div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-xl font-bold ${v.warn ? "text-red-700" : "text-deep"}`}>
                      {v.value}
                    </span>
                    <span className="text-[11px] text-ink/50">{v.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700">
                <ShieldAlert size={14} /> AI Risk Level
              </div>
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                {patient.risk.level}
              </span>
            </div>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-4xl font-extrabold text-red-700">{patient.risk.score}</span>
              <span className="pb-1 text-xs text-ink/50">/ 100 triage score</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-red-100">
              <div className="h-full rounded-full bg-red-600" style={{ width: `${patient.risk.score}%` }} />
            </div>
          </div>

          <Row icon={Sparkles} label="AI Recommendation">
            <ul className="space-y-2">
              {patient.recommendation.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-ink/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-saudi" />
                  {r}
                </li>
              ))}
            </ul>
          </Row>

          <Row icon={Lock} label="Access Log">
            <ul className="space-y-2">
              {patient.log.map((l, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl bg-mint/60 px-3 py-2">
                  {l.ok ? (
                    <CheckCircle2 size={16} className="shrink-0 text-saudi" />
                  ) : (
                    <XCircle size={16} className="shrink-0 text-red-600" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-semibold text-deep">{l.who}</div>
                    <div className="truncate text-[11px] text-ink/55">{l.where}</div>
                  </div>
                  <span className="shrink-0 text-[11px] text-ink/50">{l.time}</span>
                </li>
              ))}
            </ul>
          </Row>
        </div>
      </div>

      {interactive && (
        <div className="border-t border-saudi/10 bg-mint/40 px-5 py-3 text-right sm:px-6">
          <button onClick={() => setState("idle")} className="text-xs font-semibold text-saudi hover:underline">
            Reset demo
          </button>
        </div>
      )}
    </div>
  );
}
