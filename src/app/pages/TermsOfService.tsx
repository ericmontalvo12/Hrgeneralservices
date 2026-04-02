import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[860px] mx-auto px-8 lg:px-12 pt-40 pb-24">
        <div className="w-12 h-px bg-[#d4af37] mb-8" />
        <h1 className="text-4xl lg:text-5xl text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-16 tracking-wider">Last updated: April 2, 2026</p>

        <div className="space-y-12 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the HR General Services website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>2. Services</h2>
            <p>
              HR General Services provides residential and commercial remodeling services including, but not limited to, drywall installation, interior painting, floor installation, custom cabinetry, bathroom remodels, and kitchen remodels. The scope, timeline, and pricing of any project will be outlined in a separate written agreement or estimate provided before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>3. Estimates & Payments</h2>
            <p className="mb-4">
              All estimates provided are based on the information available at the time of assessment. Final costs may vary due to unforeseen conditions discovered during the project. Any changes to the original scope of work will be communicated and agreed upon in writing before proceeding.
            </p>
            <p>
              Payment terms will be specified in the project agreement. Failure to comply with payment terms may result in a pause or termination of work until outstanding balances are resolved.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>4. Client Responsibilities</h2>
            <p className="mb-4">To ensure a smooth project, clients agree to:</p>
            <ul className="list-none space-y-3">
              {[
                'Provide accurate information about the project space and requirements',
                'Ensure reasonable access to the work area during agreed-upon hours',
                'Communicate any changes to the project scope in writing',
                'Make timely payments as outlined in the project agreement',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#d4af37] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>5. Warranty</h2>
            <p>
              HR General Services stands behind the quality of our work. We offer a workmanship warranty on completed projects as specified in your project agreement. This warranty covers defects in labor and installation but does not cover damage caused by misuse, neglect, natural disasters, or third-party modifications after project completion.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>6. Limitation of Liability</h2>
            <p>
              HR General Services shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability in connection with any claim shall not exceed the amount paid by the client for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the property of HR General Services and may not be reproduced, distributed, or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>8. Cancellations</h2>
            <p>
              Cancellations must be submitted in writing. Depending on the stage of the project, cancellation fees may apply to cover materials purchased or work already completed. Specific cancellation terms will be outlined in your project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>9. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Miami-Dade County, Florida.
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-widest text-black mb-4 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>10. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
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
