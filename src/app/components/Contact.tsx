import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="w-12 h-px bg-[#d4af37] mb-8"></div>
            <h2 className="text-5xl lg:text-6xl text-black mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Build
              <br />
              <span className="italic text-[#d4af37]">Something Great</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed">
              Free estimates, fast response, and a team that shows up and delivers. Tell us about your project and let's get started.
            </p>

            <div className="space-y-6 lg:space-y-8">
              <div className="border-l-2 border-[#d4af37] pl-4 lg:pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">PHONE</div>
                <div className="text-black text-lg">+1 (786) 674-8817</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-4 lg:pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">EMAIL</div>
                <div className="text-black text-lg">hrgeneralservices777@gmail.com</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-4 lg:pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">OFFICE</div>
                <div className="text-black text-lg">Miami, FL</div>
              </div>

              <div className="border-l-2 border-[#d4af37] pl-4 lg:pl-6">
                <div className="text-xs tracking-widest text-[#d4af37] mb-2">HOURS</div>
                <div className="text-black">Monday - Friday: 8:00 AM - 6:00 PM</div>
                <div className="text-gray-500">Saturday: 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-black/10 p-6 lg:p-12">
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
                  className="w-full px-0 py-4 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
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
                  className="w-full px-0 py-4 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
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
                  className="w-full px-0 py-4 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
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
                  className="w-full px-0 py-4 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors bg-transparent"
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
                  className="w-full px-0 py-4 border-b border-black/20 focus:outline-none focus:border-[#d4af37] transition-colors resize-none bg-transparent"
                  placeholder="Tell us about your vision..."
                />
              </div>

              {status === 'success' && (
                <p className="text-sm text-green-600 tracking-wide">Thank you! We'll be in touch within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 tracking-wide">Something went wrong. Please try again or call us directly.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full text-sm tracking-wider bg-black text-white px-8 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'SENDING...' : 'SUBMIT INQUIRY'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
