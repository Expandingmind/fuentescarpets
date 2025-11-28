'use client'

export default function Services() {
  const services = [
    {
      title: 'Carpet Installation',
      description: 'Cozy, soft, and noise-reducing carpet for bedrooms, living rooms, and stairs. Perfect for creating warm, comfortable spaces.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    },
    {
      title: 'Hardwood Flooring Installation',
      description: 'Timeless, durable wood floors installed with precision. Adds elegance and lasting value to any room in your home.',
      image: 'https://images.unsplash.com/photo-1615876063108-670e9f7e3ee9?q=80&w=800',
    },
    {
      title: 'Laminate Flooring Installation',
      description: 'Budget-friendly floors that mimic wood or stone, easy to maintain. Great for high-traffic areas and families with pets.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    },
    {
      title: 'Floor Removal & Prep',
      description: 'Professional tear-out of old flooring, subfloor repair, and leveling. We ensure a perfect foundation for your new floors.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800',
    },
    {
      title: 'Stair Carpet & Runners',
      description: 'Custom stair carpeting to add safety and style. Beautiful runners that protect stairs while enhancing your home\'s look.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    },
    {
      title: 'Commercial Flooring',
      description: 'Durable solutions for offices, retail spaces, and businesses. Fast installation with minimal disruption to your operations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exceptional Flooring Services in Miami, Tailored for You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From carpet to hardwood to laminate, we provide comprehensive flooring solutions
            for residential and commercial properties throughout South Florida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group/btn"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

