export default function Logo({ size = 40, withText = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="SehaTag logo">
        <rect width="48" height="48" rx="14" fill={light ? "#FFFFFF" : "#006C35"} />
        {/* medical cross */}
        <path
          d="M18 12h6v8h8v6h-8v8h-6v-8h-8v-6h8z"
          fill={light ? "#006C35" : "#FFFFFF"}
          transform="translate(-1 1)"
        />
        {/* NFC waves */}
        <path d="M33 17c2.4 2.2 2.4 11.8 0 14" stroke="#C9A227" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M37.5 13.5c4.4 4.6 4.4 16.4 0 21" stroke="#C9A227" strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
      </svg>
      {withText && (
        <div className="leading-none">
          <div className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-deep"}`}>
            SehaTag
          </div>
          <div className={`font-arabic text-xs font-medium ${light ? "text-white/70" : "text-saudi"}`}>
            صحة تاق
          </div>
        </div>
      )}
    </div>
  );
}
