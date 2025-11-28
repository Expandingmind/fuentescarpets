'use client'

export default function SpecialOffer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="special-offer" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000"
            alt="Flooring background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm border border-white/30">
              LIMITED TIME OFFER
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            3-Room Carpet Installation Special
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get professional carpet installation with premium padding for up to 3 rooms at
            a competitive flat rate (covers up to 40 square yards). Perfect for refreshing
            your home main living spaces.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-white">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Includes Padding</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Estimate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Licensed & Insured</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Claim This Offer
            </button>
            <a
              href="tel:+13053236368"
              className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Call for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
