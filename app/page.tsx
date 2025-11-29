import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Testimonials />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
