const services = [
  {
    number: '01',
    title: 'Drywall Installation',
    description: 'Precision drywall installation and finishing for flawlessly smooth walls and ceilings that serve as the perfect canvas for your interior vision.',
  },
  {
    number: '02',
    title: 'Interior Painting',
    description: 'Masterful painting services using premium materials and meticulous techniques to achieve stunning, enduring finishes.',
  },
  {
    number: '03',
    title: 'Floor Installation',
    description: 'Expert installation of hardwood, marble, porcelain, and luxury vinyl flooring with uncompromising attention to detail.',
  },
  {
    number: '04',
    title: 'Custom Cabinetry',
    description: 'Bespoke cabinetry crafted to your exact specifications, combining functionality with sophisticated design.',
  },
  {
    number: '05',
    title: 'Bathroom Remodels',
    description: 'Complete bathroom transformations that blend spa-like luxury with practical elegance and timeless design.',
  },
  {
    number: '06',
    title: 'Kitchen Remodels',
    description: 'Comprehensive kitchen renovations featuring premium materials, innovative layouts, and exceptional craftsmanship.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="mb-24">
          <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
          <h2 className="text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="italic text-[#d4af37]">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Six core services, each executed with precision and an unwavering commitment to excellence
          </p>
        </div>

        <div className="space-y-px">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black border-t border-white/10 hover:bg-[#d4af37] transition-all duration-500"
            >
              <div className="flex items-start lg:items-center gap-8 lg:gap-16 py-10 lg:py-12">
                <div className="text-4xl lg:text-5xl text-[#d4af37] group-hover:text-black transition-colors min-w-[80px]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.number}
                </div>

                <div className="flex-1 grid lg:grid-cols-2 gap-6 lg:gap-12">
                  <h3 className="text-2xl lg:text-3xl text-white group-hover:text-black transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-black/80 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="w-12 h-12 border border-white/20 group-hover:border-black/30 group-hover:rotate-45 transition-all duration-500 flex items-center justify-center">
                    <div className="w-6 h-6 border-t border-r border-white/40 group-hover:border-black/50 rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
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
