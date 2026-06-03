'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden" style={{ background: '#C82128' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Right glow */}
      <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.15), transparent)' }} />
      {/* Large watermark text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <span className="font-bebas text-white/[0.06]" style={{ fontSize: 'clamp(100px,18vw,220px)', lineHeight: 1 }}>
          DEVIS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="font-outfit text-white/60 text-xs tracking-mega uppercase mb-3">
              Prêt à démarrer votre projet ?
            </p>
            <h2 className="font-bebas leading-none text-white"
              style={{ fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.95 }}>
              OBTENEZ VOTRE<br />DEVIS GRATUIT<br />
              <span className="text-white/50">SOUS 24H</span>
            </h2>
            <p className="font-outfit text-white/70 text-sm mt-4 max-w-md leading-relaxed">
              Décrivez votre projet, notre équipe technique vous propose la solution produit optimale et vous envoie un devis détaillé.
            </p>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <button
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-outfit font-bold text-sm px-8 py-4 flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ background: 'white', color: '#C82128' }}
            >
              Demander un devis
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:+212528245267"
              className="border-2 border-white/40 hover:border-white text-white font-outfit font-medium px-8 py-4 text-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Phone size={15} />
              05 28 24 52 67
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
