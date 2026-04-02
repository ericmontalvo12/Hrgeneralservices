const services = [
  {
    number: '01',
    title: 'Drywall Installation',
    description: 'Clean lines start here. We install and finish drywall to a flawless surface — the foundation every great interior deserves.',
  },
  {
    number: '02',
    title: 'Interior Painting',
    description: 'Color that holds. We use premium paints and prep every surface properly so the finish looks sharp on day one and stays that way.',
  },
  {
    number: '03',
    title: 'Floor Installation',
    description: 'From wide-plank hardwood to large-format porcelain, we install flooring with the precision it takes to get it level, tight, and built to last.',
  },
  {
    number: '04',
    title: 'Custom Cabinetry',
    description: 'Built to fit your space and your life. Our cabinetry is designed for function first, finished for looks that elevate the whole room.',
  },
  {
    number: '05',
    title: 'Bathroom Remodels',
    description: 'We turn outdated bathrooms into spaces you actually want to be in — clean, modern, and built with materials that hold up in South Florida\'s climate.',
  },
  {
    number: '06',
    title: 'Kitchen Remodels',
    description: 'The kitchen is the heart of the home. We redesign and rebuild it with thoughtful layouts, quality finishes, and zero shortcuts.',
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
            Everything your home needs — handled by one team that knows Miami and takes pride in every job.
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
