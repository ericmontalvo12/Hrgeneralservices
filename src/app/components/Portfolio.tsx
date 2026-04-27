import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    title: 'Sanctuary Bath',
    category: 'Bathroom',
    year: '2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    title: 'Open Concept Kitchen',
    category: 'Kitchen',
    year: '2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    title: 'Minimal Retreat',
    category: 'Bathroom',
    year: '2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    title: 'Modern Elegance',
    category: 'Bathroom',
    year: '2026',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="mb-24">
          <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
          <div>
            <h2 className="text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white">Featured </span><span className="italic text-[#d4af37]">Work</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl">
              Real projects, real homes, right here in South Florida. Every job in our portfolio was built by our team from start to finish.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-black"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">
                  {project.category} — {project.year}
                </div>
                <h3 className="text-xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
