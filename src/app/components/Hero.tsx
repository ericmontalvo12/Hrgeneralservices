import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-6">
              <div className="w-12 h-px bg-[#d4af37]"></div>
              <h1 className="text-6xl lg:text-7xl leading-[1.1] text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                Exquisite
                <br />
                Interiors,
                <br />
                <span className="italic text-[#d4af37]">Crafted</span> to
                <br />
                Perfection
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Elevate your living spaces with our bespoke remodeling services. From custom cabinetry to complete kitchen and bathroom transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm tracking-wider bg-black text-white px-10 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                SCHEDULE CONSULTATION
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center text-sm tracking-wider border border-black text-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW PORTFOLIO
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-black/10">
              <div>
                <div className="text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>10+</div>
                <div className="text-xs tracking-wider text-gray-500">YEARS</div>
              </div>
              <div>
                <div className="text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                <div className="text-xs tracking-wider text-gray-500">PROJECTS</div>
              </div>
              <div>
                <div className="text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                <div className="text-xs tracking-wider text-gray-500">SATISFACTION</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Mobile: single featured image */}
            <div className="lg:hidden aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Modern door"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Desktop: staggered grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Luxury bathroom"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759239355404-63313f92cfc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Modern kitchen"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Elegant bathroom design"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Modern door"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
