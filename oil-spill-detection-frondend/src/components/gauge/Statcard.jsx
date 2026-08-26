import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function StatCard({ icon: Icon, label, value, sub, tone = 'radar', delay = 0 }) {
  const toneMap = {
    radar: 'text-radar shadow-glow border-radar/30',
    amber: 'text-amber border-amber/30',
    crit: 'text-crit shadow-glow-crit border-crit/30',
    mist: 'text-mist border-abyss-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-xl border border-abyss-600 bg-abyss-800/70 p-4"
    >
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl" />
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-dim">{label}</p>
          <p className="mt-2 font-display text-3xl font-bold text-mist-bright">{value}</p>
          {sub && <p className="mt-1 text-xs text-mist-dim">{sub}</p>}
        </div>
        {Icon && (
          <div className={clsx('flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-abyss-900/60', toneMap[tone])}>
            <Icon size={18} strokeWidth={2} />
          </div>
        )}
      </div>
    </motion.div>
  )
}