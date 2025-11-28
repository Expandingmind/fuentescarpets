export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fuentes Carpet Installation Corp
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Premium Flooring Installation in Miami, FL
          </p>
          <div className="space-y-4">
            <a
              href="tel:+13053236368"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
            >
              Call (305) 323-6368
            </a>
            <p className="text-lg">
              25+ Years Experience | Licensed & Insured | Free Estimates
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

