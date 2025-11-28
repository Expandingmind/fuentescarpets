import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Services from '@/components/Services'
import SpecialOffer from '@/components/SpecialOffer'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <SpecialOffer />
        <Stats />
        <Process />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}

