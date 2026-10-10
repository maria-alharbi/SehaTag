export const patient = {
  name: "Abdullah Al-Qahtani",
  nameAr: "عبدالله القحطاني",
  age: 58,
  sehaId: "SH-4829-1107",
  blood: "O+",
  allergies: ["Penicillin", "Sulfa drugs"],
  conditions: ["Type 2 Diabetes", "Hypertension", "Coronary Artery Disease"],
  medications: ["Metformin 1000mg", "Aspirin 81mg", "Atorvastatin 40mg"],
  vitals: [
    { label: "Heart Rate", value: "118", unit: "bpm", warn: true },
    { label: "Blood Pressure", value: "168/98", unit: "mmHg", warn: true },
    { label: "SpO₂", value: "91", unit: "%", warn: true },
    { label: "Temp", value: "37.8", unit: "°C", warn: false },
  ],
  risk: { level: "High", score: 87 },
  recommendation: [
    "Avoid penicillin-class antibiotics — documented allergy",
    "Prioritize cardiac workup: ECG and troponin",
    "Monitor glucose; patient is on Metformin",
    "Prepare supplemental oxygen — SpO₂ below 92%",
  ],
  log: [
    { who: "Dr. Noura Al-Harbi", where: "Emergency Dept., King Fahd Hospital", time: "Just now", ok: true },
    { who: "Paramedic Unit 214", where: "Saudi Red Crescent", time: "6 min ago", ok: true },
    { who: "Unregistered device", where: "Access denied", time: "2 days ago", ok: false },
  ],
};
