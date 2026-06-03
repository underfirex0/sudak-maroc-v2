'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } },
  item: { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full flex items-end overflow-hidden" style={{ height: '100svh', minHeight: 580 }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/factory.webp" alt="Usine Sudak Maroc, Agadir" fill priority
          className="object-cover object-center"
          style={{ filter: 'brightness(0.42) saturate(0.75)', transform: 'scale(1.04)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.5) 55%,rgba(10,10,10,0.15) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(10,10,10,1) 0%,rgba(10,10,10,0.3) 35%,transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left,rgba(200,33,40,0.12),transparent 70%)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-30" />

      {/* Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden pointer-events-none pr-4 md:pr-8">
        <span className="font-bebas text-white select-none" style={{ fontSize: 'clamp(120px,22vw,300px)', lineHeight: 1, opacity: 0.035 }}>
          SUDAK
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <motion.div variants={stagger.container} initial="hidden" animate="show" className="max-w-3xl">

          {/* Badge */}
          <motion.div variants={stagger.item} className="mb-6">
            <span className="inline-flex items-center gap-2 border text-red font-outfit font-medium tracking-ultrawide uppercase"
              style={{ background: 'rgba(200,33,40,0.1)', borderColor: 'rgba(200,33,40,0.3)', fontSize: 11, padding: '6px 16px' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              Votre Partenaire Qualité Depuis 2008
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={stagger.item} className="font-bebas text-cream leading-none mb-5"
            style={{ fontSize: 'clamp(46px,9vw,108px)', lineHeight: 0.92 }}>
            LA CHIMIE<br />
            <span className="text-red">QUI BÂTIT</span><br />
            LE MAROC
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={stagger.item} className="font-outfit text-cream-muted leading-relaxed mb-8 max-w-lg"
            style={{ fontSize: 'clamp(14px,1.6vw,18px)' }}>
            Colles à carrelage & adjuvants pour mortier et béton de haute performance,
            fabriqués à Agadir conformément aux normes internationales.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo('#products')}
              className="font-outfit font-medium text-white text-sm px-7 py-3.5 transition-all duration-300 hover:shadow-red-500/40 hover:-translate-y-0.5"
              style={{ background: '#C82128' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#A01E22')}
              onMouseLeave={e => (e.currentTarget.style.background = '#C82128')}
            >
              Découvrir Nos Produits
            </button>
            <button onClick={() => scrollTo('#contact')}
              className="font-outfit font-medium text-cream text-sm px-7 py-3.5 border border-cream/25 hover:border-cream/60 hover:bg-cream/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Demander un Devis
            </button>
          </motion.div>

          {/* Location */}
          <motion.div variants={stagger.item} className="flex items-center gap-2 mt-10 text-cream-faint">
            <MapPin size={12} className="text-red flex-shrink-0" />
            <span className="font-outfit tracking-widest uppercase" style={{ fontSize: 11 }}>
              Route Takad, Agadir 80000 — Maroc
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => scrollTo('#about')}
          className="absolute right-10 bottom-10 hidden md:flex flex-col items-center gap-2 text-cream-faint hover:text-cream transition-colors group"
        >
          <span className="font-outfit tracking-mega uppercase" style={{ fontSize: 9, writingMode: 'vertical-rl' }}>Défiler</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
            <ArrowDown size={15} className="text-red" />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom red accent */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-0.5" style={{ background: 'linear-gradient(to right,#C82128,rgba(200,33,40,0.4),transparent)', width: '65%' }} />
      </div>
    </section>
  )
}
