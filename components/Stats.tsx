'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem { value: number; suffix: string; label: string; desc: string }

const stats: StatItem[] = [
  { value: 2008, suffix: '', label: 'Fondée en', desc: 'Année de création' },
  { value: 15,   suffix: '+', label: 'Années', desc: "D'expertise terrain" },
  { value: 10,   suffix: '+', label: 'Produits', desc: 'Certifiés et testés' },
  { value: 100,  suffix: '%', label: 'Normes', desc: 'Internationales' },
]

const marqueeItems = [
  'COLLES À CARRELAGE','ADJUVANTS BÉTON','MORTIER DE CHAPE','ÉTANCHÉITÉ',
  'CONSEIL TECHNIQUE','PRODUCTION LOCALE','NORMES ISO','QUALITÉ GARANTIE',
]

/* Counter that starts at final value (for SSR), then animates up when in view */
function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [display, setDisplay] = useState(value)
  const animated = useRef(false)

  useEffect(() => {
    if (!trigger || animated.current) return
    animated.current = true

    const startVal = value > 100 ? Math.round(value * 0.82) : 0
    const duration = 1800
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(startVal + (value - startVal) * eased))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [trigger, value])

  return <span suppressHydrationWarning>{display}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      {/* Stats Grid */}
      <section ref={ref} className="bg-dark-1 border-y border-dark-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-dark-4">
            {stats.map((s, i) => (
              <div key={s.label} className="px-6 py-10 group" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="font-outfit text-cream-faint tracking-ultrawide uppercase mb-2" style={{ fontSize: 10 }}>
                  {s.label}
                </p>
                <div className="font-bebas leading-none text-cream group-hover:text-red transition-colors duration-300"
                  style={{ fontSize: 'clamp(48px,6vw,76px)' }}>
                  <Counter value={s.value} suffix={s.suffix} trigger={inView} />
                </div>
                <p className="font-outfit text-cream-muted mt-2 tracking-wide" style={{ fontSize: 12 }}>
                  {s.desc}
                </p>
                <div className="mt-4 h-0.5 w-0 bg-red group-hover:w-10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-red py-3 overflow-hidden whitespace-nowrap">
        <div style={{ display: 'inline-block', animation: 'marqueeAnim 30s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-bebas text-white tracking-ultrawide mx-8" style={{ fontSize: 13 }}>
              {item}
              <span className="mx-8 text-white/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
