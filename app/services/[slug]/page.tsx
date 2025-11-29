import { services } from '@/data/services'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Link from 'next/link'
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
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Professional installation services in Miami & South Florida
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Service
                </h2>
                <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                  {service.fullDescription}
                </div>
                
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get a Free Estimate
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl h-fit">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Ready to start?</h4>
                  <p className="text-gray-600 mb-4">
                    Call us today for a free consultation and measurement.
                  </p>
                  <a
                    href="tel:+13053236368"
                    className="flex items-center text-primary font-bold text-xl hover:text-primary-dark transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (305) 323-6368
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
