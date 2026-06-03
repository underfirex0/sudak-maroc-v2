'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'À Propos' },
  { href: '#products', label: 'Produits' },
  { href: '#why-sudak', label: 'Notre Force' },
  { href: '#sectors', label: 'Secteurs' },
  { href: '#contact', label: 'Contact' },
]

const products = ['Colles Grises','Colles Blanches','SUDAK COLLE','SUDAKENDUIT','Mortier de Chape','Étanchéité']

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-1 border-t border-dark-4">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/logo-white.webp" alt="Sudak Maroc" width={140} height={44} className="h-10 w-auto object-contain mb-5" />
            <p className="font-outfit text-cream-muted text-sm leading-relaxed max-w-sm mb-6">
              Votre partenaire en chimie de construction depuis 2008. Colles à carrelage et adjuvants pour mortier et béton fabriqués à Agadir, conformément aux normes internationales.
            </p>
            {/* Social — WhatsApp + real links */}
            <div className="flex items-center gap-3">
              <a href="https://wa.me/212528245267" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 border border-dark-5 hover:border-green-500/50 flex items-center justify-center text-cream-faint hover:text-green-500 transition-all duration-300">
                <MessageCircle size={15} />
              </a>
              {/* Add real Facebook / Instagram URLs when available */}
              <a href="https://www.facebook.com/sudakmaroc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 border border-dark-5 hover:border-blue-500/50 flex items-center justify-center text-cream-faint hover:text-blue-400 transition-all duration-300">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/sudakmaroc" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border border-dark-5 hover:border-pink-500/50 flex items-center justify-center text-cream-faint hover:text-pink-400 transition-all duration-300">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bebas text-lg text-cream tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)}
                    className="font-outfit text-sm text-cream-muted hover:text-cream hover:pl-1.5 transition-all duration-200 text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bebas text-lg text-cream tracking-widest mb-5">Nos Produits</h4>
            <ul className="space-y-3">
              {products.map(p => (
                <li key={p}>
                  <button onClick={() => scrollTo('#products')}
                    className="font-outfit text-sm text-cream-muted hover:text-cream hover:pl-1.5 transition-all duration-200 text-left">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact bar */}
        <div className="mt-16 pt-10 border-t border-dark-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, value: 'Route Takad, Agadir 80000', sub: 'Maroc' },
            { icon: Phone,  value: '05 28 24 52 67', sub: '+212 5 28 24 52 67', href: 'tel:+212528245267' },
            { icon: Mail,   value: 'contact@sudakmaroc.com', sub: 'Lun–Ven · 09h – 18h', href: 'mailto:contact@sudakmaroc.com' },
          ].map((item, i) => {
            const Icon = item.icon
            const Wrap = (item as any).href ? 'a' : 'div'
            return (
              <Wrap key={i} {...((item as any).href ? { href: (item as any).href } : {})}
                className="flex items-center gap-3 group cursor-default">
                <Icon size={14} className="text-red flex-shrink-0" />
                <div>
                  <p className="font-outfit text-sm text-cream-muted group-hover:text-cream transition-colors duration-200">{item.value}</p>
                  <p className="font-outfit text-cream-faint" style={{ fontSize: 11 }}>{item.sub}</p>
                </div>
              </Wrap>
            )
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4">
          <p className="font-outfit text-cream-faint" style={{ fontSize: 12 }}>
            © {new Date().getFullYear()} Sudak Maroc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <p className="font-outfit text-cream-faint hidden sm:block" style={{ fontSize: 12 }}>Route Takad, Agadir 80000 — Maroc</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 border border-dark-5 hover:border-red/50 flex items-center justify-center text-cream-faint hover:text-red transition-all duration-300 group">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Red accent */}
      <div className="h-0.5" style={{ background: 'linear-gradient(to right,transparent,#C82128,transparent)' }} />
    </footer>
  )
}
