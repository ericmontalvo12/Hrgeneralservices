const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description: 'Tell us about your project and we\'ll get back to you fast with a clear, honest estimate — no pressure, no runaround.',
  },
  {
    number: '02',
    title: 'In-Home Consultation',
    description: 'We come to you. One of our team members walks the space, listens to what you want, and gives you straight answers.',
  },
  {
    number: '03',
    title: 'Measure \u0026 Plan',
    description: 'We measure everything and plan the job in detail before a single tool comes out — because surprises belong on vacation, not in your home.',
  },
  {
    number: '04',
    title: 'We Get to Work',
    description: 'Our crew shows up on time, works clean, and treats your home with respect. Every step is done right the first time.',
  },
  {
    number: '05',
    title: 'Final Walkthrough',
    description: 'We walk through every detail with you before we call it done. If something\'s not right, we fix it. Simple as that.',
  },
];

export function WorkProcess() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
          <h2 className="text-5xl lg:text-6xl text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="italic text-[#d4af37]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 italic">How We Work</p>
        </div>

        {/* Steps — desktop: horizontal row, mobile: vertical stack */}
        <div className="relative flex flex-col lg:flex-row lg:items-start gap-0">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#d4af37]/30 z-0" style={{ top: '2.5rem' }}></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex-1 flex flex-col items-start lg:items-center z-10 group"
            >
              {/* Mobile vertical connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute left-10 top-20 w-px h-full bg-[#d4af37]/30 -z-0" style={{ height: 'calc(100% - 5rem)' }}></div>
              )}

              {/* Step number bubble */}
              <div className="flex items-center justify-center w-20 h-20 border border-[#d4af37]/40 bg-white mb-6 flex-shrink-0">
                <span
                  className="text-3xl text-[#d4af37]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:text-center px-0 lg:px-4 pb-12 lg:pb-0 pl-4 lg:pl-0">
                <h3
                  className="text-xl text-black mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
