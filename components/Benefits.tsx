'use client'

export default function Benefits() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="relative h-[600px] w-full order-2 lg:order-1">
            <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200" 
              alt="Premium carpet installation result" 
              className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block w-12 h-1 bg-[#84cc16] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Why Choose Fuentes?
            </h2>

            {/* Brand Logos Row (Placeholders) */}
            <div className="flex gap-6 mb-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
               {/* Simple text placeholders for brands since we don't have SVG logos handy */}
               <span className="font-bold text-xl text-gray-400">SHAW</span>
               <span className="font-bold text-xl text-gray-400">MOHAWK</span>
               <span className="font-bold text-xl text-gray-400">DREAMWEAVER</span>
               <span className="font-bold text-xl text-gray-400">ENGINEERED</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Fuentes Carpet Installation, we believe in providing not only the best flooring service but also 
              value that goes beyond expectations. Our attention to detail, personalized approach, 
              and use of premium products mean that your home is in the best hands.
            </p>

            <div className="space-y-8 mb-12">
              {/* Point 1: Experience */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#84cc16] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">25+ Years of Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serving Miami families since 1998 with trusted, professional craftsmanship.
                  </p>
                </div>
              </div>

              {/* Point 2: Availability */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#84cc16] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">7 Days a Week Availability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work around your schedule. Available when you need us, including weekends.
                  </p>
                </div>
              </div>

              {/* Point 3: Quality */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#84cc16] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">100% Customer Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    #1 Flooring Contractor in Miami. Our commitment to quality is unmatched.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-[#84cc16] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#65a30d] transition-all shadow-lg flex items-center justify-center group"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a 
                href="tel:+13053236368"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center"
              >
                Call Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
