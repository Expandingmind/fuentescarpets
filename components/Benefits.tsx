'use client'

export default function Benefits() {
  const benefits = [
    {
      title: 'Protect Your Investment',
      description: 'New flooring installed correctly lasts longer and handles everyday wear better, protecting your home investment for years to come.',
    },
    {
      title: 'Enhance Appearance',
      description: 'Modern flooring transforms rooms and makes spaces feel brighter, cleaner, and more inviting for your family and guests.',
    },
    {
      title: 'Improve Comfort & Safety',
      description: 'Padded carpet softens footsteps and reduces noise, while properly installed floors can reduce slips and improve safety.',
    },
    {
      title: 'Increase Home Value',
      description: 'Professionally installed floors boost resale value and make your property more attractive to potential buyers.',
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200" alt="Professional flooring installation" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Upgrade Your Floors with Fuentes?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upgrading your flooring is more than just aesthetics. It is about protecting
              your investment, refreshing your home, improving comfort, and increasing
              property value.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg">
                Contact Us
              </button>
              <a href="tel:+13053236368" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-primary text-center">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
