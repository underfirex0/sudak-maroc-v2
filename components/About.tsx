'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const pillars = [
  "Fabrication locale à Agadir, aux normes internationales",
  "Innovation continue et R&D produits",
  "Accompagnement technique personnalisé",
  "Satisfaction client au cœur de chaque décision",
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-36 bg-dark noise-overlay" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text Content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6"
            >
              <span className="font-outfit text-xs text-red tracking-mega uppercase font-medium">
                Notre Histoire
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-bebas text-[clamp(40px,6vw,72px)] leading-[0.95] text-cream mb-8"
            >
              UNE EXPERTISE
              <br />
              <span className="text-red">FORGÉE DEPUIS</span>
              <br />
              2008
            </motion.h2>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-accent border-red mb-8"
            >
              <p className="font-outfit text-lg md:text-xl text-cream-muted leading-relaxed italic">
                &ldquo;C'est là où la magie se crée — chaque sac de produit Sudak représente
                des années de recherche et l'engagement d'une équipe passionnée.&rdquo;
              </p>
            </motion.blockquote>

            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 mb-10"
            >
              <p className="font-outfit text-cream-muted text-[0.95rem] leading-relaxed">
                Fondée en 2008 à Agadir, SUDAK Maroc s'est imposée comme un acteur de
                référence dans l'industrie des chimiques de construction au Maroc. Consciente
                des exigences croissantes du marché, notre société n'a cessé d'innover pour
                proposer des solutions adaptées aux professionnels du bâtiment.
              </p>
              <p className="font-outfit text-cream-muted text-[0.95rem] leading-relaxed">
                Poussée par ses valeurs et ses ambitions, SUDAK Maroc continue de booster
                son apport sur le marché des colles à carrelage et d'adjuvants pour mortier
                et béton. Notre quête d'innovation ne cessera jamais de se distinguer.
              </p>
            </motion.div>

            {/* Pillars List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              {pillars.map((pillar, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-red mt-0.5 flex-shrink-0" />
                  <span className="font-outfit text-sm text-cream-muted leading-snug">{pillar}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Factory Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="img-zoom relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/factory.webp"
                alt="Usine Sudak Maroc Agadir"
                fill
                className="object-cover"
                style={{ filter: 'saturate(0.9) contrast(1.05)' }}
              />
              {/* Dark tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark/20 to-dark/10" />
            </div>

            {/* Floating Card — "Depuis 2008" */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              className="absolute -bottom-6 -left-6 bg-dark-2 border border-dark-4 p-6 shadow-2xl"
            >
              <p className="font-bebas text-5xl text-red leading-none">2008</p>
              <p className="font-outfit text-xs text-cream-muted uppercase tracking-widest mt-1">
                Fondée à Agadir
              </p>
            </motion.div>

            {/* Top-right accent card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
              className="absolute -top-6 -right-6 bg-red p-5 shadow-2xl"
            >
              <p className="font-bebas text-3xl text-white leading-none">100%</p>
              <p className="font-outfit text-[10px] text-white/80 uppercase tracking-widest mt-0.5">
                Normes Intl.
              </p>
            </motion.div>

            {/* Decorative dots grid */}
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C82128 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
