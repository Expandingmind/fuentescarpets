'use client'

import { useState } from 'react'
import FadeIn from './ScrollAnimation'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const reviews = [
    {
      name: 'Maria Rodriguez',
      date: '2024-11-15',
      rating: 5,
      text: 'Fuentes did an amazing job installing carpet in our three bedrooms. The team was professional, punctual, and incredibly neat. Our house looks brand new and the quality is outstanding. Highly recommend!'
    },
    {
      name: 'John Martinez',
      date: '2024-10-28',
      rating: 5,
      text: 'We had hardwood floors installed throughout our living room and dining area. The craftsmanship is impeccable and they finished ahead of schedule. The attention to detail was impressive. Worth every penny!'
    },
    {
      name: 'Sofia Hernandez',
      date: '2024-09-12',
      rating: 5,
      text: 'Excellent service from start to finish! They helped us pick the perfect laminate for our kitchen and installed it flawlessly. Very fair pricing and the crew was respectful of our home. Will use them again!'
    },
    {
      name: 'Carlos Gomez',
      date: '2024-08-30',
      rating: 5,
      text: 'Best flooring contractor in Miami hands down. They removed my old tile and installed vinyl planks in 2 days. Super clean work.'
    },
    {
      name: 'Elena White',
      date: '2024-07-15',
      rating: 5,
      text: 'Professional, licensed, and insured. I felt very comfortable having them in my home. The new stair runner looks fantastic!'
    }
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Get visible reviews (show 1 on mobile, 2 on tablet, 3 on desktop if space permits, keeping it simple with 1 main focus for carousel logic or sliding window)
  // For this specific design requested, let's show a sliding window of cards.
  // Simpler implementation: Show 1 card at a time on mobile, 2 or 3 on desktop?
  // The screenshot shows 3 cards. Let's try to show a window of 3.
  
  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length])
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-6 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="text-center mb-6 md:mb-16">
            <p className="text-[8px] md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-1 md:mb-2">— Our Features</p>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
              What Our Clients Are Saying
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-12 items-center">
          
          {/* Left Column: Summary Badge */}
          <div className="flex-shrink-0 text-center lg:text-left lg:w-1/4">
            <FadeIn direction="right">
              <div className="inline-block">
                <div className="text-3xl md:text-5xl font-black text-gray-900 mb-0.5 md:mb-2">4.8</div>
                <div className="flex justify-center lg:justify-start gap-0.5 md:gap-1 mb-1 md:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 md:w-6 h-4 md:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-medium underline mb-2 md:mb-4 cursor-pointer hover:text-gray-900 text-[10px] md:text-base">
                  Based on 126+ reviews.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-1 md:gap-2">
                  <span className="text-blue-500 font-bold text-lg md:text-3xl font-sans">Google</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Carousel */}
          <div className="flex-grow w-full relative">
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 z-10 w-6 h-6 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all border border-gray-100"
              aria-label="Previous review"
            >
              <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 z-10 w-6 h-6 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all border border-gray-100"
              aria-label="Next review"
            >
              <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {getVisibleReviews().map((review, index) => (
                <FadeIn key={index} delay={index * 150} direction="up" className="h-full">
                  <div className="bg-white border border-gray-100 rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Header: Avatar + Name + G Icon */}
                    <div className="flex justify-between items-start mb-2 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-[10px] md:text-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-[10px] md:text-sm">{review.name}</h4>
                          <p className="text-[8px] md:text-xs text-gray-400">{review.date}</p>
                        </div>
                      </div>
                      <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-2.5 h-2.5 md:w-4 md:h-4 text-blue-500 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-[10px] md:text-sm leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                      {review.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
