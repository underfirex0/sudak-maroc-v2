'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'
interface Form { nom: string; prenom: string; telephone: string; email: string; sujet: string; message: string }
const EMPTY: Form = { nom: '', prenom: '', telephone: '', email: '', sujet: '', message: '' }

const contactInfo = [
  { icon: MapPin, label: 'Localisation', value: 'Route Takad, Agadir 80000', sub: 'Maroc', href: 'https://maps.google.com/?q=Route+Takad+Agadir' },
  { icon: Phone,  label: 'Téléphone',    value: '05 28 24 52 67', sub: '+212 5 28 24 52 67', href: 'tel:+212528245267' },
  { icon: Mail,   label: 'Email',        value: 'contact@sudakmaroc.com', sub: 'Réponse sous 24h', href: 'mailto:contact@sudakmaroc.com' },
  { icon: Clock,  label: 'Horaires',     value: 'Lun — Ven', sub: '09:00 – 18:00', href: null },
]

export default function Contact() {
  const [form, setForm] = useState<Form>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const upd = (k: keyof Form) => (v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async () => {
    if (!form.nom || !form.email || !form.message) return
    setStatus('loading')
    try {
      /* Replace YOUR_FORM_ID with your Formspree form ID */
      const res = await fetch('https://formspree.io/f/xblgokzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: `${form.prenom} ${form.nom}`, email: form.email, telephone: form.telephone, sujet: form.sujet, message: form.message }),
      })
      if (res.ok) { setStatus('success'); setForm(EMPTY) }
      else throw new Error()
    } catch {
      const sub = encodeURIComponent(form.sujet || 'Demande de contact')
      const body = encodeURIComponent(`Nom: ${form.prenom} ${form.nom}\nTél: ${form.telephone}\n\n${form.message}`)
      window.location.href = `mailto:contact@sudakmaroc.com?subject=${sub}&body=${body}`
      setStatus('success')
    }
  }

  const inputCls = "w-full border font-outfit text-sm text-cream focus:outline-none focus:border-red transition-colors duration-200"
  const inputStyle = { background: '#1A1A1A', borderColor: '#2E2E2E', padding: '12px 14px', borderRadius: 2, color: '#F2EDE8' }

  return (
    <section id="contact" className="py-24 md:py-36 bg-dark relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(200,33,40,0.4),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="font-outfit text-red tracking-mega uppercase font-medium block mb-4" style={{ fontSize: 11 }}>
            Contactez-Nous
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-bebas text-cream leading-none" style={{ fontSize: 'clamp(38px,5.5vw,68px)', lineHeight: 0.95 }}>
            UNE QUESTION ?<br /><span className="text-red">PARLONS-EN</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Info + Map */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4">
            {/* Info Card */}
            <div className="border border-dark-4 p-7" style={{ background: '#1A1A1A' }}>
              <h3 className="font-bebas text-2xl text-cream tracking-wide mb-6">Sudak Maroc à votre service</h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon
                  const Wrap = info.href ? 'a' : 'div'
                  return (
                    <motion.div key={info.label} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}>
                      <Wrap {...(info.href ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-start gap-4 group cursor-pointer">
                        <div className="w-9 h-9 border border-dark-5 flex items-center justify-center flex-shrink-0 group-hover:border-red/20 group-hover:bg-red/10 transition-all duration-300" style={{ background: '#242424' }}>
                          <Icon size={14} className="text-red" />
                        </div>
                        <div>
                          <p className="font-outfit text-cream-faint tracking-widest uppercase" style={{ fontSize: 10 }}>{info.label}</p>
                          <p className="font-outfit text-sm text-cream group-hover:text-red transition-colors duration-200 mt-0.5">{info.value}</p>
                          <p className="font-outfit text-cream-faint mt-0.5" style={{ fontSize: 11 }}>{info.sub}</p>
                        </div>
                      </Wrap>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Google Maps Embed */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55, duration: 0.6 }}
              className="overflow-hidden border border-dark-4" style={{ height: 200, borderRadius: 2 }}>
              <iframe
                src="https://maps.google.com/maps?q=Agadir+Route+de+Takad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.8) invert(0.85) hue-rotate(180deg) saturate(0.5)' }}
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                title="Sudak Maroc sur Google Maps"
              />
            </motion.div>

            {/* Services + WhatsApp */}
            <div className="p-7" style={{ background: '#C82128' }}>
              <p className="font-outfit text-white/70 tracking-ultrawide uppercase mb-3" style={{ fontSize: 10 }}>Nos services</p>
              <ul className="space-y-2 mb-5">
                {['Colles à carrelage','Adjuvants pour mortier et béton','Conseil technique & accompagnement','Production aux normes internationales'].map(s => (
                  <li key={s} className="flex items-center gap-2 font-outfit text-sm text-white">
                    <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />{s}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/212528245267?text=Bonjour%20SUDAK%20Maroc" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red font-outfit font-semibold text-xs px-4 py-2.5 transition-colors hover:bg-cream"
                style={{ letterSpacing: '0.05em' }}>
                <MessageCircle size={13} /> WhatsApp direct
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-3 border border-dark-4 p-8 md:p-10" style={{ background: '#1A1A1A' }}>
            <h3 className="font-bebas text-2xl text-cream tracking-wide mb-8">Envoyez-nous un message</h3>

            <div className="space-y-5">
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Nom <span className="text-red">*</span></label>
                  <input value={form.nom} onChange={e => upd('nom')(e.target.value)} placeholder="Votre nom" className={inputCls} style={inputStyle} />
                </div>
                <div>
                  <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Prénom</label>
                  <input value={form.prenom} onChange={e => upd('prenom')(e.target.value)} placeholder="Votre prénom" className={inputCls} style={inputStyle} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Téléphone</label>
                  <input value={form.telephone} onChange={e => upd('telephone')(e.target.value)} placeholder="+212 6 XX XX XX XX" className={inputCls} style={inputStyle} />
                </div>
                <div>
                  <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Email <span className="text-red">*</span></label>
                  <input type="email" value={form.email} onChange={e => upd('email')(e.target.value)} placeholder="votre@email.com" className={inputCls} style={inputStyle} />
                </div>
              </div>

              <div>
                <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Sujet / Demande</label>
                <select value={form.sujet} onChange={e => upd('sujet')(e.target.value)} className={inputCls} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="">Sélectionner un sujet...</option>
                  {['Demande de devis','Renseignement produit','Conseil technique','Commande','Partenariat / Collaboration','Autre'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-outfit text-cream-faint tracking-widest uppercase block mb-2" style={{ fontSize: 10 }}>Votre Message <span className="text-red">*</span></label>
                <textarea value={form.message} onChange={e => upd('message')(e.target.value)} placeholder="Décrivez votre projet ou votre demande..." rows={5}
                  className={inputCls + ' resize-none'} style={inputStyle} />
              </div>

              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-sm font-outfit px-5 py-4 border"
                      style={{ color: '#10B981', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)' }}>
                      <CheckCircle size={16} /> Message envoyé ! Nous vous répondrons sous 24 heures.
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div key="err" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-sm font-outfit text-red px-5 py-4 border"
                      style={{ background: 'rgba(200,33,40,0.1)', borderColor: 'rgba(200,33,40,0.25)' }}>
                      <AlertCircle size={16} /> Erreur d'envoi. Contactez-nous directement par email ou WhatsApp.
                    </motion.div>
                  ) : (
                    <motion.button key="btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      onClick={handleSubmit} disabled={status === 'loading'}
                      className="flex items-center gap-3 font-outfit font-medium text-sm text-white px-10 py-4 transition-all duration-300 disabled:opacity-50"
                      style={{ background: '#C82128' }}
                      onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#A01E22' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#C82128' }}>
                      {status === 'loading' ? (
                        <><div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255,255,255,0.3)', borderTopColor: 'white' }} />Envoi en cours...</>
                      ) : (
                        <><Send size={14} />Envoyer le message</>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
