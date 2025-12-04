'use client'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navigation = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'benefits' },
    { label: 'Services', id: 'services' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Reviews', id: 'testimonials' },
    // { label: 'Gallery', id: 'gallery' }, // Commented out as per user instruction to focus on core sections
  ]

  return (
    <footer className="bg-black text-white pt-6 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          
          {/* Col 1: Brand & Intro */}
          <div>
            <div className="mb-2 md:mb-6">
              <h2 className="text-lg md:text-3xl font-black tracking-tighter text-white uppercase leading-none">
                Fuentes
                <span className="block text-[10px] md:text-lg font-bold text-gray-400 tracking-normal">Carpet Installation</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-8">
              Fuentes Carpet Installation is a dedicated team of flooring professionals 
              providing premium installation services throughout Miami Dade and Broward County.
            </p>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.208 0 .396-.107.649-.29l1.86-2.17a1 1 0 0 0-.086-1.391l-3.706-3.706zM17.638 20.401c-2.239.454-7.138-1.089-10.77-4.721-3.628-3.629-5.171-8.521-4.721-10.766l2.129-1.86.019-.021 2.702 2.702-2.422 2.356-.081.079a1 1 0 0 0 .017 1.378c.239.228 1.036 1.084 2.62 2.668 1.585 1.585 2.44 2.38 2.668 2.62a1 1 0 0 0 1.378.017l.079-.081 2.356-2.422 2.702 2.702-.021.019-1.856 2.129z"/>
                </svg>
              </div>
              <div>
                <a href="tel:+13053236368" className="block text-white font-bold hover:text-gray-300 transition-colors text-xs md:text-base">
                  +1 (305) 323-6368
                </a>
                <span className="text-gray-500 text-[9px] md:text-xs">Got Questions? Call us 24/7</span>
              </div>
            </div>
          </div>

          {/* Col 2: Working Hours */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-6">Working Hours</h3>
            <div className="space-y-0.5 md:space-y-2">
              <p className="text-gray-400 text-xs md:text-base">Monday - Sunday</p>
              <p className="text-white font-semibold text-xs md:text-base">08:00 am - 08:00 pm</p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-6">Navigation</h3>
            <ul className="space-y-1 md:space-y-3">
              {navigation.map((link) => (
                <li key={link.id} className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-base" onClick={() => scrollToSection(link.id)}>
                  <span className="mr-2 text-gray-600">•</span>
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-6">Contact Us</h3>
            <div className="space-y-2 md:space-y-6">
              <div>
                <h4 className="font-bold text-white text-[10px] md:text-sm mb-0.5 md:mb-1">Address:</h4>
                <p className="text-gray-400 text-[10px] md:text-sm">Based in Miami Dade and Broward County</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] md:text-sm mb-0.5 md:mb-1">Email:</h4>
                <a href="mailto:fuentescarpets@gmail.com" className="text-gray-400 text-[10px] md:text-sm hover:text-white">fuentescarpets@gmail.com</a>
              </div>
              
              <div className="flex gap-2 md:gap-3 mt-2 md:mt-4">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="font-bold text-white text-xs md:text-base">f</span>
                </div>
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="font-bold text-white text-xs md:text-base">G</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-2 md:py-6 text-center">
        <p className="text-white/90 text-[9px] md:text-sm font-medium">
          Copyright © 2025 Fuentes Carpet Installation Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
