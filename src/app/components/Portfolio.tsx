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
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="mb-24">
          <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="text-5xl lg:text-6xl text-black mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured <span className="italic text-[#d4af37]">Work</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Real projects, real homes, right here in South Florida. Every job in our portfolio was built by our team from start to finish.
              </p>
            </div>
            <a href="#contact" className="text-sm tracking-wider border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition-colors w-fit">
              VIEW ALL PROJECTS
            </a>
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
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs tracking-widest text-[#d4af37] mb-2">
                      {project.category} — {project.year}
                    </div>
                    <h3 className="text-xl lg:text-3xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-white/40 group-hover:border-[#d4af37] group-hover:rotate-45 transition-all duration-500 flex items-center justify-center">
                    <div className="w-5 h-5 border-t border-r border-white/60 group-hover:border-[#d4af37] rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
