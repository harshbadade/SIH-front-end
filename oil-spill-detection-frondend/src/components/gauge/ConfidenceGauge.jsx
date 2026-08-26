export default function ConfidenceGauge({ value = 0, size = 56, label }) {
  const stroke = 5
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  const offset = c * (1 - pct)
  const color = pct >= 0.8 ? '#4FE3B4' : pct >= 0.5 ? '#F5A623' : '#FF5C5C'

  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} stroke="#1C3A52" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.6s ease', filter: `drop-shadow(0 0 4px ${color}88)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-semibold text-mist-bright">{Math.round(pct * 100)}%</span>
        </div>
      </div>
      {label && <span className="text-xs text-mist-dim">{label}</span>}
    </div>
  )
}