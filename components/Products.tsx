'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Sparkle, Package, Paintbrush, Grid3X3, ShieldCheck, ArrowRight } from 'lucide-react'

interface Product {
  icon: React.ElementType
  name: string
  tagline: string
  description: string
  specs: string[]
  badge?: string
  accent: string
}

const products: Product[] = [
  {
    icon: Layers, name: 'Colles Grises', tagline: 'Adhésif mortier haute performance',
    description: 'Mortiers-colles ciment pour la pose de carreaux céramiques en intérieur et extérieur. Excellente adhérence et maniabilité optimale.',
    specs: ['Sac 25 Kg', 'Sac 20 Kg', 'Int. & Ext.'],
    badge: 'Bestseller', accent: 'from-slate-800/60',
  },
  {
    icon: Sparkle, name: 'Colles Blanches', tagline: 'Finition premium sans tâches',
    description: "1ère gamme de colle à carrelage, 1er choix pour les supports subissant la vaporisation. Idéale grands formats et carrelages clairs.",
    specs: ['Sac 25 Kg', 'Classe C1', 'Blanc pur'],
    badge: 'Premium', accent: 'from-zinc-800/60',
  },
  {
    icon: Package, name: 'SUDAK COLLE', tagline: 'Meilleur rapport qualité/prix',
    description: "Solution optimale pour la pose de carreaux céramiques. Le meilleur équilibre performance/accessibilité pour tous les chantiers.",
    specs: ['Sac 25 Kg', 'Céramique', 'Polyvalent'],
    accent: 'from-stone-800/60',
  },
  {
    icon: Paintbrush, name: 'SUDAKENDUIT', tagline: 'Enduit de lissage extra-fin',
    description: "Enduit intérieur pour lisser et légaliser les supports. Prépare parfaitement les murs avant revêtement final. Finition irréprochable.",
    specs: ['Sac 25 Kg', 'Intérieur', 'Extra-fin'],
    accent: 'from-neutral-800/60',
  },
  {
    icon: Grid3X3, name: 'Mortier de Chape', tagline: 'Chape premium tous sols',
    description: 'Mortier de chape haute résistance pour tous types de sols, en neuf ou rénovation. Excellente planéité et durabilité dans le temps.',
    specs: ['Sac 25 Kg', 'Tous sols', 'Haute rés.'],
    accent: 'from-gray-800/60',
  },
  {
    icon: ShieldCheck, name: 'Étanchéité', tagline: 'Protection contre l\'humidité',
    description: "Solutions complètes contre l'humidité et les infiltrations. Protection durable pour vos ouvrages béton, toitures terrasses et façades.",
    specs: ['Sac 25 Kg', 'Anti-humidité', '1kg × 25'],
    badge: 'Nouveau', accent: 'from-red-950/60',
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="py-24 md:py-36 bg-dark-1 grid-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              className="font-outfit text-red tracking-mega uppercase font-medium block mb-3" style={{ fontSize: 11 }}>
              Nos Solutions
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-bebas text-cream leading-none" style={{ fontSize: 'clamp(38px,6vw,72px)', lineHeight: 0.95 }}>
              GAMME<br /><span className="text-red">COMPLÈTE</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="font-outfit text-cream-muted text-sm max-w-sm leading-relaxed md:text-right">
            Chaque produit est formulé pour répondre aux exigences des professionnels marocains du bâtiment.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }} style={{ originX: 0 }}
          className="h-px mb-14" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div key={product.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}>
                <div className="product-card border border-dark-4 hover:border-dark-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400 group flex flex-col"
                  style={{ background: '#1A1A1A', borderRadius: 2 }}>
                  {/* Top accent bar */}
                  <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: '#C82128' }} />

                  <div className="p-7 flex flex-col gap-5 flex-1">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 border border-dark-5 flex items-center justify-center group-hover:border-red/30 group-hover:bg-red/10 transition-all duration-300"
                        style={{ background: '#242424' }}>
                        <Icon size={19} className="text-cream-muted group-hover:text-red transition-colors duration-300" />
                      </div>
                      {product.badge && (
                        <span className="font-outfit text-red border border-red/25 tracking-widest uppercase"
                          style={{ fontSize: 10, background: 'rgba(200,33,40,0.1)', padding: '3px 10px' }}>
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Name + Tagline */}
                    <div>
                      <h3 className="font-bebas text-2xl text-cream tracking-wide group-hover:text-red transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-outfit text-cream-faint mt-0.5" style={{ fontSize: 11, letterSpacing: '0.05em' }}>
                        {product.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-outfit text-cream-muted text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map(spec => (
                        <span key={spec} className="font-outfit text-cream-faint border border-dark-5/60 tracking-widest uppercase"
                          style={{ fontSize: 10, background: 'rgba(255,255,255,0.04)', padding: '4px 10px' }}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-auto flex items-center gap-1.5 text-cream-faint hover:text-red transition-colors duration-200 pt-4 border-t border-dark-4 group/btn"
                      style={{ fontSize: 12, fontFamily: 'inherit' }}>
                      <span className="font-outfit">Demander un devis</span>
                      <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-14 text-center">
          <a href="mailto:contact@sudakmaroc.com"
            className="inline-flex items-center gap-3 border border-dark-5 hover:border-red text-cream-muted hover:text-cream font-outfit text-sm px-8 py-3.5 transition-all duration-300 group">
            Télécharger notre catalogue complet
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
