export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Free Estimate',
      description: 'We start with a phone consultation or on-site visit to measure your spaces, understand your needs, and discuss your style preferences. You\'ll receive a detailed, no-obligation estimate.',
    },
    {
      number: '02',
      title: 'Material Selection',
      description: 'Our experts help you choose the perfect carpet, hardwood, or laminate that fits your budget, lifestyle, and aesthetic. We guide you through colors, textures, and durability options.',
    },
    {
      number: '03',
      title: 'Professional Installation',
      description: 'Our licensed and insured team arrives on time and installs your new flooring efficiently. We maintain a clean work area and treat your home with the utmost respect throughout the process.',
    },
    {
      number: '04',
      title: 'Final Walkthrough',
      description: 'We inspect every detail with you, explain proper care and maintenance, and ensure you\'re completely satisfied with your beautiful new floors before we leave.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Simple Installation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a family-owned business, we\'re committed to craftsmanship and transparency.
            Our licensed and insured team follows a proven process to ensure your complete
            satisfaction from start to finish.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20 -z-10"></div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold rounded-full mb-6">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your space with beautiful new floors?
          </p>
          <a
            href="tel:+13053236368"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  )
}

