
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import { Input, Select, Textarea } from '../components/ui/Form';

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
            <Badge className="mb-8 lg:mb-10">CONTACT_ESTABLISHMENT</Badge>
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

            <form onSubmit={handleSubmit} id="contact-form" className="space-y-8 lg:space-y-10" name="contact-form" method="POST" netlify>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Input
                  label="First Name *"
                  id="contact-firstName"
                  required
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  label="Last Name *"
                  id="contact-lastName"
                  required
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Input
                  label="Company *"
                  id="contact-company"
                  required
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <Input
                  label="Work Email *"
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.company ||
                    !formData.workEmail
                  }
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
