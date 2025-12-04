'use client'

import FadeIn from './ScrollAnimation'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/carpet-6.png" alt="Modern wooden staircase flooring" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32 text-center md:text-left">
        <div className="max-w-3xl">
          <FadeIn delay={0}>
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-primary/20 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold tracking-wide backdrop-blur-sm border border-white/20">
                SERVING MIAMI & SOUTH FLORIDA
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Premium Carpet & Flooring Installation in Miami
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Transform your space with expertly installed flooring that combines style and durability.
              Our family-owned business delivers professional craftsmanship and a positive contracting
              experience, capturing exactly what you need for your home or business.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <button onClick={scrollToContact} className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-dark transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
                Get a Free Estimate
              </button>
              <a href="tel:+13053236368" className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white">
                Call Now
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="mt-6 md:mt-8">
              <a href="tel:+13053236368" className="text-white text-base md:text-xl font-semibold hover:text-primary-light transition-colors inline-flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (305) 323-6368
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
