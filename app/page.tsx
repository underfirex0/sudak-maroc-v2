import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Stats       from '@/components/Stats'
import About       from '@/components/About'
import Products    from '@/components/Products'
import CTABanner   from '@/components/CTABanner'
import WhySudak    from '@/components/WhySudak'
import Sectors     from '@/components/Sectors'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'
import WhatsApp    from '@/components/WhatsApp'

export default function Home() {
  return (
    <main className="bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <CTABanner />
      <WhySudak />
      <Sectors />
      <Contact />
      <Footer />
      <WhatsApp />
    </main>
  )
}
