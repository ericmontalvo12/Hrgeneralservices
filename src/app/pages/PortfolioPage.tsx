import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
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
    image: '/portfolio/kitchen-1.jpeg',
    title: 'Modern Kitchen Design',
    category: 'Kitchens' as Category,
  },
  {
    image: 'https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    title: 'Spa-Inspired Bathroom',
    category: 'Bathrooms' as Category,
  },
  {
    image: '/portfolio/flooring-1.jpeg',
    title: 'Hardwood Floor Installation',
    category: 'Flooring' as Category,
  },
  {
    image: '/portfolio/kitchen-2.jpeg',
    title: 'Contemporary Kitchen',
    category: 'Kitchens' as Category,
  },
  {
    image: '/portfolio/kitchen-3.jpeg',
    title: 'Open Concept Kitchen',
    category: 'Kitchens' as Category,
  },
  {
    image: '/portfolio/bathroom-3.jpeg',
    title: 'Master Bathroom Suite',
    category: 'Bathrooms' as Category,
  },
  {
    image: '/portfolio/flooring-2.webp',
    title: 'Porcelain Tile Flooring',
    category: 'Flooring' as Category,
  },
  {
    image: '/portfolio/painting-1.jpeg',
    title: 'Interior Painting Refresh',
    category: 'Painting' as Category,
  },
  {
    image: '/portfolio/painting-2.webp',
    title: 'Accent Wall Design',
    category: 'Painting' as Category,
  },
  {
    image: '/portfolio/painting-3.jpeg',
    title: 'Full Room Color Transform',
    category: 'Painting' as Category,
  },
  {
    image: '/portfolio/drywall-1.webp',
    title: 'Drywall Finishing',
    category: 'Drywall' as Category,
  },
  {
    image: '/portfolio/drywall-2.jpeg',
    title: 'Smooth Wall Texture',
    category: 'Drywall' as Category,
  },
  {
    image: '/portfolio/drywall-3.jpeg',
    title: 'Ceiling Repair & Finish',
    category: 'Drywall' as Category,
  },
  {
    image: '/portfolio/flooring-3.webp',
    title: 'Luxury Vinyl Plank',
    category: 'Flooring' as Category,
  },
];

export default function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;

  const [activeCategory, setActiveCategory] = useState<Category>(
    categoryParam && categories.includes(categoryParam) ? categoryParam : 'All'
  );

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory('All');
    }
  }, [categoryParam]);

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
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
