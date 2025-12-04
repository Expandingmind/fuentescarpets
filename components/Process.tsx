'use client'

import FadeIn from './ScrollAnimation'

export default function Process() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-6 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Column: Text Content */}
          <div>
            <FadeIn direction="right">
              <div className="inline-block w-8 h-1 md:w-10 bg-primary mb-3 md:mb-4 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4 leading-tight">
                The Fuentes Process: <br />
                What to Expect
              </h2>
            </FadeIn>
            
            <FadeIn direction="right" delay={100}>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-4 md:mb-5 leading-relaxed">
                At Fuentes Carpet Installation, we believe in providing not only the best flooring service but also 
                value that goes beyond expectations. Our attention to detail, personalized approach, 
                and use of premium materials mean that your home is in the best hands.
              </p>
            </FadeIn>

            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              {/* Point 1 */}
              <FadeIn direction="right" delay={200}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-2 md:ml-3">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">Convenience at Its Best</h3>
                    <p className="text-[10px] sm:text-xs md:text-xs text-gray-600 leading-relaxed">
                      We come to you, wherever you are in Miami-Dade or Broward County, ensuring that getting 
                      your new floors installed is as convenient and stress-free as possible.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Point 2 */}
              <FadeIn direction="right" delay={300}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-2 md:ml-3">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">Customized Solutions</h3>
                    <p className="text-[10px] sm:text-xs md:text-xs text-gray-600 leading-relaxed">
                      Every home is unique, which is why we offer customized flooring solutions 
                      to meet your specific style preferences, durability needs, and budget.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Point 3 */}
              <FadeIn direction="right" delay={400}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-2 md:ml-3">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">Unmatched Expertise & Quality</h3>
                    <p className="text-[10px] sm:text-xs md:text-xs text-gray-600 leading-relaxed">
                      Our experienced flooring specialists use only the highest-quality materials 
                      and advanced installation techniques to ensure a flawless, lasting finish.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Buttons */}
            <FadeIn direction="up" delay={500}>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-2.5">
                <button 
                  onClick={scrollToContact}
                  className="bg-primary text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm md:text-sm hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center group"
                >
                  Contact Us
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a 
                  href="tel:+13053236368"
                  className="bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm md:text-sm hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center"
                >
                  Call Now
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[200px] md:h-[350px] w-full">
            <FadeIn direction="left" delay={300} className="h-full">
              <div className="absolute inset-0 bg-gray-100 rounded-[1rem] md:rounded-[2rem] transform rotate-3"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/carpetinstall.png" 
                alt="Professional flooring installation process" 
                className="relative w-full h-full object-cover rounded-[1rem] md:rounded-[2rem] shadow-2xl bg-gray-200"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
