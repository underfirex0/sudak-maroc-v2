'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'À Propos' },
  { href: '#products', label: 'Produits' },
  { href: '#why-sudak', label: 'Notre Force' },
  { href: '#sectors', label: 'Secteurs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl border-b border-dark-4/60 shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex-shrink-0 relative z-10"
          >
            <Image
              src="/logo.webp"
              alt="Sudak Maroc"
              width={140}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`nav-link font-outfit text-xs tracking-ultrawide uppercase transition-colors duration-200 ${
                  activeLink === link.href
                    ? 'text-cream'
                    : 'text-cream-muted hover:text-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Phone */}
          <a
            href="tel:+212528245267"
            className="hidden lg:flex items-center gap-2.5 bg-red hover:bg-red-dark text-white text-sm font-outfit font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,33,40,0.35)] group"
          >
            <Phone size={13} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">05 28 24 52 67</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cream p-1 hover:text-red transition-colors"
            aria-label="Menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 bg-dark-1 lg:hidden flex flex-col"
          >
            {/* Header spacer */}
            <div className="h-20" />

            {/* Links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between py-4 border-b border-dark-4 text-left group"
                >
                  <span className="font-bebas text-3xl text-cream group-hover:text-red transition-colors duration-200">
                    {link.label}
                  </span>
                  <ChevronRight size={18} className="text-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="p-8"
            >
              <a
                href="tel:+212528245267"
                className="flex items-center justify-center gap-3 bg-red text-white py-4 font-outfit font-medium tracking-wide text-base w-full"
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={16} />
                05 28 24 52 67
              </a>
              <p className="text-center text-cream-faint text-xs font-outfit mt-3 tracking-widest uppercase">
                Lun–Ven · 09h00 – 18h00
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
