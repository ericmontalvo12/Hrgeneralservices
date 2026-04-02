import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[860px] mx-auto px-8 lg:px-12 pt-40 pb-24">
        <div className="w-12 h-px bg-[#d4af37] mb-8" />
        <h1 className="text-4xl lg:text-5xl text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-16 tracking-wider">Last updated: April 2, 2026</p>

        <div className="space-y-12 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>1. Overview</h2>
            <p>
              HR General Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit our website or contact us for services. By using our site, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-none space-y-3">
              {[
                'Name, email address, and phone number submitted through our contact form',
                'Project details and service inquiries you choose to share with us',
                'Browser type, IP address, and pages visited (collected automatically via standard web analytics)',
                'Any other information you voluntarily provide when communicating with us',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#d4af37] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>3. How We Use Your Information</h2>
            <p className="mb-4">The information we collect is used solely to:</p>
            <ul className="list-none space-y-3">
              {[
                'Respond to your inquiries and schedule consultations',
                'Provide quotes and information about our services',
                'Communicate project updates and follow-ups',
                'Improve our website and customer experience',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#d4af37] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>4. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>5. Cookies</h2>
            <p>
              Our website may use basic cookies to improve your browsing experience. These cookies do not collect personally identifiable information. You can disable cookies through your browser settings at any time without affecting your ability to use our site.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites such as social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, please contact us directly at the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out to us:
            </p>
            <div className="mt-6 border-l-2 border-[#d4af37] pl-6 space-y-1">
              <p className="text-black font-medium">HR General Services</p>
              <p>Miami, FL</p>
              <p>Phone: +1 (786) 674-8817</p>
              <p>Email: your@email.com</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
