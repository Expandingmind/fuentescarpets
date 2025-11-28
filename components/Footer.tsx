'use client'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Fuentes</h3>
              <p className="text-sm text-gray-400">Carpet Installation Corp</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fuentes Carpet Installation Corp is a family-owned flooring company providing
              carpet, hardwood, and laminate installation throughout Miami and South Florida.
              With over 25 years of experience, we deliver quality craftsmanship and
              exceptional service.
            </p>
            <p className="text-sm text-primary font-semibold">
              Licensed & Insured | Se habla Espanol
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('benefits')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p className="font-semibold text-white mb-1">Location</p>
                <p>Miami, FL</p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a href="tel:+13053236368" className="hover:text-white transition-colors">(305) 323-6368</a>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Email</p>
                <a href="mailto:fuentescarpets@gmail.com" className="hover:text-white transition-colors break-all">fuentescarpets@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Fuentes Carpet Installation Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
