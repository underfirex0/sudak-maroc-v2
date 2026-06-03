'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Building2, Factory, HardHat } from 'lucide-react'

const sectors = [
  {
    icon: Home,
    label: "Résidentiel",
    description: "Villas, appartements, rénovations privées",
    color: "from-blue-900/20 to-transparent",
  },
  {
    icon: Building2,
    label: "Commercial",
    description: "Bureaux, hôtels, centres commerciaux",
    color: "from-purple-900/20 to-transparent",
  },
  {
    icon: Factory,
    label: "Industriel",
    description: "Usines, entrepôts, zones industrielles",
    color: "from-orange-900/20 to-transparent",
  },
  {
    icon: HardHat,
    label: "Grands Projets",
    description: "Projets publics, infrastructure, promoteurs",
    color: "from-green-900/20 to-transparent",
  },
]

export default function Sectors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sectors" className="py-24 md:py-32 bg-dark-1 border-y border-dark-4" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-outfit text-xs text-red tracking-mega uppercase font-medium block mb-4"
          >
            Domaines d'Application
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-bebas text-[clamp(38px,5vw,66px)] leading-[0.95] text-cream"
          >
            DES SOLUTIONS POUR
            <br />
            <span className="text-red">TOUS LES CHANTIERS</span>
          </motion.h2>
        </div>

        {/* Sector Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="border border-dark-4 hover:border-red/30 bg-dark-2 hover:bg-dark-3 p-8 flex flex-col items-center text-center gap-5 transition-all duration-400 cursor-default">
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full border border-dark-5 group-hover:border-red/40 flex items-center justify-center bg-dark-3 group-hover:bg-red/10 transition-all duration-400">
                    <Icon size={22} className="text-cream-muted group-hover:text-red transition-colors duration-300" />
                  </div>

                  {/* Label */}
                  <div>
                    <h3 className="font-bebas text-xl text-cream tracking-wide group-hover:text-red transition-colors duration-300">
                      {sector.label}
                    </h3>
                    <p className="font-outfit text-xs text-cream-faint mt-1.5 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <div className="w-0 h-px bg-red group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-20 pt-16 border-t border-dark-4"
        >
          <h3 className="font-bebas text-3xl md:text-4xl text-cream text-center mb-12 tracking-wide">
            COMMENT TRAVAILLER AVEC NOUS
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line - desktop */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-red/40 via-dark-5 to-red/40" />

            {[
              { step: '01', title: 'Contactez-nous', desc: 'Décrivez votre projet et vos besoins via formulaire, email ou téléphone.' },
              { step: '02', title: 'Conseil & Devis', desc: 'Nos experts analysent votre demande et vous proposent la solution optimale.' },
              { step: '03', title: 'Livraison', desc: 'Vos produits sont livrés dans les délais sur votre chantier, prêts à l\'emploi.' },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-dark-3 border-2 border-dark-5 flex items-center justify-center mb-5 relative z-10">
                  <span className="font-bebas text-2xl text-red">{step.step}</span>
                </div>
                <h4 className="font-bebas text-xl text-cream mb-2 tracking-wide">{step.title}</h4>
                <p className="font-outfit text-sm text-cream-muted leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
