
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    workEmail: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    country: '',
    inquiryType: '',
    message: '',
    howHeard: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent! Our team will respond to your inquiry shortly.');
  };

  const inquiryTypes = [
    'Staff Augmentation',
    'Technical Project Outsourcing',
    'Quality Assurance Services',
    'Fellowship Partnership',
    'Other'
  ];

  const commonCountries = [
    'Sierra Leone',
    'United States',
    'United Kingdom',
    'Nigeria',
    'Ghana',
    'Germany',
    'Canada'
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-10"
            alt="Contact Us"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[11px] font-bold mb-8 lg:mb-10 tracking-[0.4em] uppercase font-futuristic">
              [ CONTACT_ESTABLISHMENT ]
            </span>
            <h1 className="text-4xl lg:text-8xl font-bold mb-8 lg:mb-10 leading-[1.1] tracking-tight font-futuristic uppercase text-slate-900">
              Get In <span className="text-indigo-600">Touch</span>
            </h1>
            <p className="text-lg lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to hire elite African developers for your startup? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 lg:py-24 -mt-12 lg:-mt-24 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] lg:rounded-[3.5rem] border border-slate-100 p-8 lg:p-20 shadow-2xl">
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 tracking-tight font-futuristic uppercase">Send us a message</h2>
              <p className="text-slate-500 font-medium text-base lg:text-lg mb-2">Fill out the form below and we'll get back to you as soon as possible.</p>
              <div className="flex items-center gap-2 opacity-40">
                <i className="fa-solid fa-lock text-[10px] text-indigo-600"></i>
                <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase">Secure encryption enabled</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} id="contact-form" className="space-y-8 lg:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">First Name *</label>
                  <input
                    id="contact-firstName"
                    required
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 lg:py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Last Name *</label>
                  <input
                    id="contact-lastName"
                    required
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 lg:py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Company *</label>
                  <input
                    id="contact-company"
                    required
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 lg:py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Work Email *</label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 lg:py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4 lg:pt-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-6 lg:mb-8 font-futuristic uppercase tracking-tight border-b border-slate-100 pb-4">Business Address</h3>
                <div className="space-y-5 lg:space-y-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-3 uppercase tracking-widest">Address Line 1 *</label>
                    <input
                      required
                      type="text"
                      placeholder="123 Wilkinson Road"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                      value={formData.address1}
                      onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-widest">City (Optional)</label>
                      <input
                        type="text"
                        placeholder="Freetown"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Country *</label>
                      <select
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm appearance-none cursor-pointer"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        <option value="" disabled>Select a country</option>
                        {commonCountries.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Inquiry Type *</label>
                  <select
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm appearance-none cursor-pointer"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="" disabled>Select an inquiry type</option>
                    {inquiryTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-indigo-600 mb-3 uppercase tracking-widest">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us about your needs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 lg:px-6 py-4 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm resize-none placeholder:text-slate-300"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative w-6 h-6 shrink-0 mt-0.5">
                  <input 
                    id="contact-consent"
                    required 
                    type="checkbox" 
                    className="peer absolute inset-0 opacity-0 cursor-pointer z-10"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                  <div className="w-full h-full border border-slate-200 rounded-lg peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center bg-slate-50">
                    <i className="fa-solid fa-check text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform"></i>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed pt-1">
                  I agree to the Privacy Policy and consent to Junction Solutions storing and processing my information. *
                </p>
              </div>

              <div className="space-y-4 pt-4 lg:pt-6">
                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 lg:py-6 rounded-2xl font-bold text-lg lg:text-xl uppercase tracking-widest transition-all shadow-xl shadow-indigo-100 active:scale-95"
                >
                  Send Message
                </button>
                <p className="text-center text-[10px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
