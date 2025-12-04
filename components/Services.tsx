'use client'

import { services } from '@/data/services'
import FadeIn from './ScrollAnimation'

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Exceptional Flooring Services in Miami
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From carpet to hardwood to laminate, we provide comprehensive flooring solutions
              for residential and commercial properties throughout South Florida.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 100} direction="up" fullWidth>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  {/* Link to service details */}
                  <a 
                    href={`/services/${service.id}`}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group/btn mt-auto"
                  >
                    View Details
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
