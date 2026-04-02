import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'Every project is executed with meticulous attention to detail, using premium materials and proven techniques that stand the test of time.',
  },
  {
    title: 'Honest Pricing',
    description: 'We provide clear, upfront estimates with no hidden fees. You always know exactly what you\'re paying for before work begins.',
  },
  {
    title: 'Client-First Approach',
    description: 'Your vision drives every decision we make. We listen, advise, and deliver results that exceed expectations — on time and on budget.',
  },
];

const highlights = [
  'Licensed & Insured',
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
                HR General Services was founded in Miami with one simple belief — quality work, honest pricing, and zero shortcuts. With over 10 years of experience transforming homes across South Florida, our team brings craftsmanship and care to every project, whether it's a single room refresh or a full home renovation.
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
              Ready to Start Your <span className="italic text-[#d4af37]">Project?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Let's talk about your vision. We offer free estimates and are always happy to answer your questions.
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
