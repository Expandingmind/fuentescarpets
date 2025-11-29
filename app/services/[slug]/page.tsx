import { services } from '@/data/services'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | Fuentes Carpet Installation`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* 1. HERO SECTION - Centered, High Impact */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-all uppercase tracking-wide"
              >
                Get Free Estimate
              </a>
              <a
                href="tel:+13053236368"
                className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-dark transition-all uppercase tracking-wide"
              >
                Call (305) 323-6368
              </a>
            </div>
          </div>
        </div>

        {/* 2. WHY IT MATTERS - Split Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Problem/Solution */}
              <div>
                <h2 className="text-4xl font-black text-black mb-8 uppercase">
                  WHY {service.title.split(' ')[0]} MATTERS
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-red-600 text-2xl font-bold mb-3">The Problem:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-red-600 pl-4">
                    {service.problem}
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-primary text-2xl font-bold mb-3">Our Solution:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-primary pl-4">
                    {service.solution}
                  </p>
                </div>

                <a
                  href="/#contact"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-all uppercase tracking-wide shadow-lg"
                >
                  Schedule Service Today
                </a>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-full min-h-[400px] border-8 border-gray-100 shadow-2xl">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQs SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center text-black mb-12 uppercase">
              {service.title.split(' ')[0]} FAQS
            </h2>
            
            <div className="space-y-4">
              {service.faqs?.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-gray-900 group-open:bg-gray-50 transition-colors">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-6 pt-0 leading-relaxed bg-gray-50 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
