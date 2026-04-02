import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h2 className="text-5xl lg:text-6xl text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Begin Your
              <br />
              <span className="italic text-[#d4af37]">Transformation</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              Schedule a complimentary consultation to discuss your vision. Our team of master craftsmen is ready to bring your dream interior to life.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-[#d4af37] pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">PHONE</div>
                <div className="text-white text-lg">+1 (786) 674-8817</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">EMAIL</div>
                <div className="text-white text-lg">your@email.com</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">OFFICE</div>
                <div className="text-white text-lg">Miami, FL</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">HOURS</div>
                <div className="text-white">Monday - Friday: 8:00 AM - 6:00 PM</div>
                <div className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-wider mb-3 text-black">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-wider mb-3 text-black">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs tracking-wider mb-3 text-black">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs tracking-wider mb-3 text-black">
                  SERVICE OF INTEREST *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="drywall">Drywall Installation</option>
                  <option value="painting">Interior Painting</option>
                  <option value="flooring">Floor Installation</option>
                  <option value="cabinetry">Custom Cabinetry</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-wider mb-3 text-black">
                  PROJECT DETAILS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors resize-none bg-transparent"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-sm tracking-wider bg-black text-white px-8 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300 mt-4"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
