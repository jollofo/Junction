
import React, { useState } from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Input, Select } from '../components/ui/Form';

const ApplyAsDeveloper: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    track: 'fullstack',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! We typically respond within 5 business days.');
  };

  const tracks = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'devops', label: 'DevOps & Infrastructure' },
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-10"
            alt="Developer Focus"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <div className="max-w-4xl text-left">
            <Badge className="mb-10">DIRECT_PLACEMENT_PORTAL</Badge>
            <h1 className="text-5xl lg:text-8xl font-bold mb-10 leading-[1.1] tracking-tight font-futuristic uppercase text-slate-900">
              Opportunity <br />
              <span className="text-indigo-600 italic">Beyond Borders</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-3xl font-medium">
              Join Sierra Leone's elite developer network and secure placements with high-growth global startups.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 lg:py-40 relative z-20 -mt-24 lg:-mt-40">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="shadow-2xl animate-scale-in" padding="xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-futuristic uppercase leading-tight">Developer Registry</h2>
              <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Secure Encryption Enabled // Profile Verification Required</p>
            </div>

            <form onSubmit={handleSubmit} id="apply-developer-form" className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="First Name"
                  id="firstName"
                  required
                  placeholder="e.g. John"
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  label="Last Name"
                  id="lastName"
                  required
                  placeholder="e.g. Smith"
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <Input
                label="Email Address"
                id="email"
                required
                type="email"
                placeholder="john.doe@tech-uplink.sl"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Select
                label="Primary Technical Track"
                id="track"
                required
                options={tracks}
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
              />

              <div className="flex items-start gap-4">
                <div className="relative w-6 h-6 shrink-0 mt-0.5">
                  <input
                    id="agreement"
                    required
                    type="checkbox"
                    className="peer absolute inset-0 opacity-0 cursor-pointer z-10"
                    checked={formData.agreement}
                    onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                  />
                  <div className="w-full h-full border border-slate-200 rounded-lg peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center bg-slate-50">
                    <i className="fa-solid fa-check text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform"></i>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed pt-1">
                  I certify that all information provided is accurate and I agree to join the Junction Rails professional registry.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  id="submit-btn"
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full"
                >
                  Submit Application
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 opacity-40 pt-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-indigo-600 text-[10px]"></i>
                  <span className="text-[9px] font-bold tracking-widest uppercase">Privacy_Protocol_v4</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bolt text-indigo-600 text-[10px]"></i>
                  <span className="text-[9px] font-bold tracking-widest uppercase">Fast_Track_Review</span>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplyAsDeveloper;
