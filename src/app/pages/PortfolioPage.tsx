import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Category = 'All' | 'Bathrooms' | 'Kitchens' | 'Flooring' | 'Painting' | 'Drywall';

const categories: Category[] = ['All', 'Bathrooms', 'Kitchens', 'Flooring', 'Painting', 'Drywall'];

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Luxury Bath Retreat',
    category: 'Bathrooms' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Modern Kitchen Design',
    category: 'Kitchens' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Spa-Inspired Bathroom',
    category: 'Bathrooms' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Hardwood Floor Installation',
    category: 'Flooring' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Contemporary Kitchen',
    category: 'Kitchens' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Open Concept Kitchen',
    category: 'Kitchens' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Master Bathroom Suite',
    category: 'Bathrooms' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Porcelain Tile Flooring',
    category: 'Flooring' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Interior Painting Refresh',
    category: 'Painting' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Accent Wall Design',
    category: 'Painting' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Full Room Color Transform',
    category: 'Painting' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Drywall Finishing',
    category: 'Drywall' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Smooth Wall Texture',
    category: 'Drywall' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Ceiling Repair & Finish',
    category: 'Drywall' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Luxury Vinyl Plank',
    category: 'Flooring' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Modern Bath Remodel',
    category: 'Bathrooms' as Category,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h1 className="text-5xl lg:text-6xl text-black mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="italic text-[#d4af37]">Work</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              A collection of completed projects across Miami and South Florida, each reflecting our commitment to quality and detail.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-6 mb-16 border-b border-black/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wider pb-1 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-black border-b-2 border-[#d4af37]'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Uniform Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, index) => (
              <div
                key={`${project.category}-${index}`}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="text-xs tracking-widest text-[#d4af37] mb-1">
                      {project.category.toUpperCase()}
                    </div>
                    <h3 className="text-lg text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
