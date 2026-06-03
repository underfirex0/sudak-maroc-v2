'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FlaskConical,
  BadgeCheck,
  HeadphonesIcon,
  Zap,
  ArrowUpRight,
} from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    number: '01',
    title: "Qualité Supérieure",
    description:
      "Chaque produit Sudak est formulé avec des matières premières rigoureusement sélectionnées. Nos process de fabrication garantissent une régularité et une performance constantes sur chaque chantier.",
    highlight: "Formulation contrôlée",
  },
  {
    icon: BadgeCheck,
    number: '02',
    title: "Normes Internationales",
    description:
      "Nos produits sont développés et testés pour répondre aux standards européens et marocains les plus exigeants. Une garantie de conformité technique pour vos projets les plus critiques.",
    highlight: "Conformité EN 12004",
  },
  {
    icon: HeadphonesIcon,
    number: '03',
    title: "Conseil Technique",
    description:
      "Notre équipe d'experts accompagne chaque client, du choix du produit adapté à sa mise en œuvre. Un service personnalisé qui fait la différence sur vos chantiers.",
    highlight: "Support dédié",
  },
  {
    icon: Zap,
    number: '04',
    title: "Production Locale",
    description:
      "Fabriqués à Agadir, nos produits sont disponibles rapidement sur l'ensemble du territoire national. La proximité et la réactivité au service de vos délais de chantier.",
    highlight: "Livraison rapide",
  },
]

export default function WhySudak() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-sudak" className="py-24 md:py-36 bg-dark relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C82128 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-outfit text-xs text-red tracking-mega uppercase font-medium block mb-4"
            >
              Notre Force
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-bebas text-[clamp(38px,6vw,72px)] leading-[0.95] text-cream"
            >
              POURQUOI CHOISIR
              <br />
              <span className="text-red">SUDAK MAROC ?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-outfit text-cream-muted text-[0.95rem] leading-relaxed"
          >
            Dans un marché concurrentiel, SUDAK Maroc s'est distingué par un engagement
            inébranlable envers la qualité et l'innovation. Voici ce qui nous différencie
            depuis plus de 15 ans.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-dark-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.12,
                  duration: 0.65,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-dark p-10 md:p-12 group hover:bg-dark-2 transition-colors duration-500 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-6 font-bebas text-[80px] text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-red/[0.06] transition-colors duration-500"
                  aria-hidden="true"
                >
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-dark-3 border border-dark-5 flex items-center justify-center mb-6 group-hover:border-red/30 group-hover:bg-red/10 transition-all duration-400">
                  <Icon size={20} className="text-cream-muted group-hover:text-red transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl text-cream mb-3 tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-outfit text-sm text-cream-muted leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlight Tag */}
                <div className="flex items-center gap-2 text-[11px] font-outfit text-red">
                  <div className="w-4 h-px bg-red" />
                  <span className="tracking-widest uppercase">{feature.highlight}</span>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="text-red" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
