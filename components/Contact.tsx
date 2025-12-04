'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitMessage('Please fill in all required fields.')
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 3000)
      return
    }

    console.log('Form submitted:', formData)
    setSubmitMessage('Thank you! We will contact you soon.')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <section id="contact" className="py-6 md:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">
            Ready to Upgrade Your Floors?
          </h2>
          <p className="text-xs sm:text-sm md:text-xs text-gray-600 max-w-xl mx-auto">
            Get your free estimate today! Flexible payment options. Available 7 days a week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 md:mb-3">Get in Touch</h3>

            <div className="space-y-2.5 md:space-y-3 mb-3 md:mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-2.5">
                  <p className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                  <a href="tel:+13053236368" className="text-xs md:text-sm font-bold text-primary hover:text-primary-dark">(305) 323-6368</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-2.5">
                  <p className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                  <a href="mailto:fuentescarpets@gmail.com" className="text-xs md:text-sm font-bold text-primary hover:text-primary-dark">fuentescarpets@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-2.5">
                  <p className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Service Area</p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">Miami, FL & South Florida</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-2.5">
                  <p className="text-[9px] md:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Hours</p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">7 Days • 8AM - 8PM</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-3 border-primary rounded-lg p-2.5 md:p-3">
              <p className="text-primary font-bold text-xs md:text-sm">Se habla Espanol</p>
              <p className="text-gray-600 text-[10px] md:text-xs">Ofrecemos servicio en espanol.</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3">Request a Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-2.5">
              <div className="grid grid-cols-2 gap-2 md:gap-2.5">
                <div>
                  <label htmlFor="name" className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-0.5">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-2.5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-0.5">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-2.5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="(305) 123-4567" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-0.5">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-2.5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="your@email.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-0.5">Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-2.5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Select a service</option>
                  <option value="carpet">Carpet Installation</option>
                  <option value="hardwood">Hardwood Flooring</option>
                  <option value="laminate">Laminate Flooring</option>
                  <option value="removal">Floor Removal & Prep</option>
                  <option value="stairs">Stair Carpet & Runners</option>
                  <option value="commercial">Commercial Flooring</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-0.5">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={2} className="w-full px-2.5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white px-5 py-2 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-2 rounded-lg text-center text-xs ${submitMessage.includes('Thank') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
