export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      location: 'Coral Gables, FL',
      rating: 5,
      text: 'Fuentes did an amazing job installing carpet in our three bedrooms. The team was professional, punctual, and incredibly neat. Our house looks brand new and the quality is outstanding. Highly recommend!',
    },
    {
      name: 'John Martinez',
      location: 'Kendall, FL',
      rating: 5,
      text: 'We had hardwood floors installed throughout our living room and dining area. The craftsmanship is impeccable and they finished ahead of schedule. The attention to detail was impressive. Worth every penny!',
    },
    {
      name: 'Sofia Hernandez',
      location: 'Miami Beach, FL',
      rating: 5,
      text: 'Excellent service from start to finish! They helped us pick the perfect laminate for our kitchen and installed it flawlessly. Very fair pricing and the crew was respectful of our home. Will use them again!',
    },
  ]

  const trustBadges = [
    { name: 'Google', icon: 'G' },
    { name: 'Yelp', icon: 'Y' },
    { name: 'BBB', icon: 'BBB' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—see why homeowners across Miami and South Florida
            trust Fuentes for their flooring projects. We're proud of our 5-star reviews and
            word-of-mouth reputation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <p className="text-gray-600 font-semibold w-full text-center mb-4">
            Trusted on:
          </p>
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl font-bold text-primary">{badge.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

