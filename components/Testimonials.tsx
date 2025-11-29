'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      name: 'Maria Rodriguez',
      location: 'Coral Gables, FL',
      rating: 5,
      text: 'Fuentes did an amazing job installing carpet in our three bedrooms. The team was professional, punctual, and incredibly neat. Our house looks brand new and the quality is outstanding. Highly recommend!',
      date: '2024-11-15'
    },
    {
      name: 'John Martinez',
      location: 'Kendall, FL',
      rating: 5,
      text: 'We had hardwood floors installed throughout our living room and dining area. The craftsmanship is impeccable and they finished ahead of schedule. The attention to detail was impressive. Worth every penny!',
      date: '2024-10-28'
    },
    {
      name: 'Sofia Hernandez',
      location: 'Miami Beach, FL',
      rating: 5,
      text: 'Excellent service from start to finish! They helped us pick the perfect laminate for our kitchen and installed it flawlessly. Very fair pricing and the crew was respectful of our home. Will use them again!',
      date: '2024-09-12'
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    text: '',
  })
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === 'rating' ? parseInt(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.text) {
      setSubmitMessage('Please fill in all required fields.')
      setTimeout(() => setSubmitMessage(''), 3000)
      return
    }

    const newReview = {
      ...formData,
      date: new Date().toISOString().split('T')[0]
    }

    setReviews([newReview, ...reviews])
    setFormData({ name: '', location: '', rating: 5, text: '' })
    setSubmitMessage('Thank you for your review! It has been submitted.')
    setShowForm(false)
    
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            See why homeowners across Miami and South Florida trust Fuentes for their 
            flooring projects. We are proud of our 5-star reviews and word-of-mouth reputation.
          </p>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {showForm ? 'Hide Review Form' : 'Write a Review'}
          </button>
        </div>

        {submitMessage && (
          <div className="mb-8 p-4 bg-green-50 text-green-800 rounded-lg text-center max-w-2xl mx-auto">
            {submitMessage}
          </div>
        )}

        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="review-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="review-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="review-location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="review-location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Miami, FL"
                />
              </div>

              <div>
                <label htmlFor="review-rating" className="block text-sm font-semibold text-gray-700 mb-2">
                  Rating *
                </label>
                <select
                  id="review-rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label htmlFor="review-text" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="review-text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your experience with Fuentes Carpet Installation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{review.text}&quot;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                {review.location && <p className="text-sm text-gray-600">{review.location}</p>}
                <p className="text-xs text-gray-500 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-bold text-primary">{reviews.length} reviews</span> from satisfied customers
          </p>
        </div>
      </div>
    </section>
  )
}
