import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24 pb-16 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12 text-center lg:text-left">
            <div className="space-y-6">
              <div className="w-12 h-px bg-[#d4af37] mx-auto lg:mx-0"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                Miami Interiors,<span className="italic text-[#d4af37]"> Reimagined</span>
                <span className="hidden lg:inline"><br /></span>
                {' '}to Perfection
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              South Florida's trusted interior remodeling specialists. We transform kitchens, bathrooms, and living spaces with precision, premium materials, and real craftsmanship — no shortcuts, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm tracking-wider bg-black text-white px-6 lg:px-10 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                SCHEDULE CONSULTATION
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center text-sm tracking-wider border border-black text-black px-6 lg:px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW PORTFOLIO
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-12 border-t border-black/10">
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>10+</div>
                <div className="text-xs tracking-wider text-gray-500">YEARS IN MIAMI</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                <div className="text-xs tracking-wider text-gray-500">INTERIORS TRANSFORMED</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                <div className="text-xs tracking-wider text-gray-500">SATISFACTION</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Mobile: 2x2 grid */}
            <div className="lg:hidden grid grid-cols-2 gap-2">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Luxury bathroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="/portfolio/kitchen-1.jpeg"
                  alt="Modern kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Elegant bathroom design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Modern door"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop: staggered grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Luxury bathroom"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="/portfolio/kitchen-1.jpeg"
                    alt="Modern kitchen"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Elegant bathroom design"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Modern door"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#d4af37] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
