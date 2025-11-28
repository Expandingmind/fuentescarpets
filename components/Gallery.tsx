export default function Gallery() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
      title: 'Living Room Carpet Installation',
      location: 'Kendall, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1615876063108-670e9f7e3ee9?q=80&w=800',
      title: 'Hardwood Floor Upgrade',
      location: 'Miami, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
      title: 'Laminate Kitchen Flooring',
      location: 'Coral Gables, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
      title: 'Staircase Carpet Runner',
      location: 'Pinecrest, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800',
      title: 'Master Bedroom Carpet',
      location: 'Doral, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800',
      title: 'Office Hardwood Installation',
      location: 'Brickell, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800',
      title: 'Dining Room Flooring',
      location: 'Miami Beach, FL',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      title: 'Commercial Space Renovation',
      location: 'Downtown Miami, FL',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Flooring Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent work transforming homes and businesses
            across Miami and South Florida with beautiful, durable flooring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Full Gallery & Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
