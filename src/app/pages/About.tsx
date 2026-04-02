import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'We use premium materials and take the time to do it right. No rushing, no cutting corners — just work that holds up and looks great for years.',
  },
  {
    title: 'Honest Pricing',
    description: 'You get a clear estimate before anything starts. No surprises, no hidden fees. What we quote is what you pay.',
  },
  {
    title: 'Client-First Approach',
    description: 'We listen before we work. Your vision, your timeline, your home — we\'re here to make the process easy and the result exactly what you had in mind.',
  },
];

const highlights = [
  'Miami-Based Team',
  '10+ Years Experience',
  '500+ Projects Completed',
  'Free Estimates',
  '5-Star Rated Service',
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-40 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

          {/* Section Header */}
          <div className="mb-20">
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h1 className="text-5xl lg:text-6xl text-black mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About <span className="italic text-[#d4af37]">Us</span>
            </h1>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
            <div>
              <div className="text-xs tracking-widest text-[#d4af37] mb-6">OUR STORY</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                HR General Services was built in Miami, for Miami. We started with one belief — that homeowners deserve honest work, fair pricing, and a crew that actually cares. Over 10 years and 500+ projects later, that hasn't changed. Whether it's a single room or a full renovation, we treat every home like it's our own.
              </p>
            </div>
            <div className="border-l-2 border-[#d4af37] pl-8 lg:pl-12">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl text-black mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>10+</div>
                  <div className="text-sm tracking-widest text-gray-500">YEARS OF EXPERIENCE</div>
                </div>
                <div>
                  <div className="text-5xl text-black mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                  <div className="text-sm tracking-widest text-gray-500">PROJECTS COMPLETED</div>
                </div>
                <div>
                  <div className="text-5xl text-black mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                  <div className="text-sm tracking-widest text-gray-500">CLIENT SATISFACTION</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-32">
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h2 className="text-4xl lg:text-5xl text-black mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="italic text-[#d4af37]">Values</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="border-t-2 border-[#d4af37] pt-8">
                  <h3 className="text-2xl text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-32 bg-black py-16 px-8 lg:px-16">
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h2 className="text-4xl lg:text-5xl text-white mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose <span className="italic text-[#d4af37]">HR General</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-[#d4af37] text-xl flex-shrink-0">—</span>
                  <span className="text-white tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="w-12 h-px bg-[#d4af37] mb-8 mx-auto"></div>
            <h2 className="text-4xl lg:text-5xl text-black mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Get <span className="italic text-[#d4af37]">Started?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Free estimates, fast response. Reach out and let's talk about what your home needs.
            </p>
            <a
              href="/contact"
              className="inline-block text-sm tracking-wider bg-black text-white px-12 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
