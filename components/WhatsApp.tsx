'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

export default function WhatsApp() {
  const [open, setOpen] = useState(false)
  const number = '212528245267'
  const message = encodeURIComponent("Bonjour SUDAK Maroc, j'aimerais avoir des informations sur vos produits et tarifs.")

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            style={{ width: 300 }}
          >
            {/* Header */}
            <div className="bg-green-500 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">SUDAK Maroc</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-200 rounded-full animate-pulse" />
                  <p className="text-green-100 text-xs">En ligne · Réponse rapide</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-xs text-sm text-gray-700 leading-relaxed">
                👋 Bonjour ! Comment pouvons-nous vous aider aujourd&apos;hui ?
              </div>
              <p className="text-[10px] text-gray-400 mt-1 ml-1">SUDAK Maroc · Agadir</p>
            </div>

            {/* CTA */}
            <div className="p-3 bg-white border-t border-gray-100">
              <a
                href={`https://wa.me/${number}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 px-4 rounded-xl w-full transition-colors duration-200"
              >
                <MessageCircle size={16} />
                Démarrer la conversation
              </a>
              <p className="text-center text-[10px] text-gray-400 mt-2">WhatsApp · +212 5 28 24 52 67</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors duration-200 relative"
        aria-label="Contacter sur WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="wap" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  )
}
