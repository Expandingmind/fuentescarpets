'use client'

import { services } from '@/data/services'
import FadeIn from './ScrollAnimation'

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Exceptional Flooring Services in Miami
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From carpet to hardwood to laminate, we provide comprehensive flooring solutions
              for residential and commercial properties throughout South Florida.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 100} direction="up" fullWidth>
              <div className="group bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-24 sm:h-40 md:h-56 overflow-hidden flex-shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm md:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed flex-grow line-clamp-3 md:line-clamp-none">
                    {service.description}
                  </p>
                  {/* Link to service details */}
                  <a 
                    href={`/services/${service.id}`}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group/btn mt-auto text-xs md:text-base"
                  >
                    View Details
                    <svg className="w-3 h-3 md:w-5 md:h-5 ml-1 md:ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
