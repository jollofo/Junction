
import React, { useState } from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Form';

import Modal from '../components/ui/Modal';

interface FellowshipProgramProps {
  onNavigate?: (page: string) => void;
}

const FellowshipProgram: React.FC<FellowshipProgramProps> = ({ onNavigate }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    linkedin: '',
    github: '',
    portfolio: ''
  });

  const techOptions = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust',
    'React', 'Next.js', 'Node.js', 'Express', 'Django', 'PostgreSQL',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'Tailwind CSS', 'GraphQL'
  ];

  const toggleSkill = (tech: string) => {
    setSelectedSkills(prev =>
      prev.includes(tech) ? prev.filter(s => s !== tech) : [...prev, tech]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encode = (data: any) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'fellowship-form',
        ...formData,
        skills: selectedSkills.join(', ')
      }),
    })
      .then(() => {
        setIsSuccessModalOpen(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          bio: '',
          linkedin: '',
          github: '',
          portfolio: ''
        });
        setSelectedSkills([]);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb28f74b581?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-10"
            alt="Training Classroom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <div className="max-w-4xl text-left">
            <Badge className="mb-10">FELLOWSHIP_ADMISSIONS</Badge>
            <h1 className="text-5xl lg:text-8xl font-bold mb-10 leading-[1.1] tracking-tight font-futuristic uppercase py-2 text-slate-900">
              Transform Your <br />
              <span className="text-indigo-600 italic">Tech Career</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-3xl font-medium opacity-90">
              Join Sierra Leone's most prestigious developer fellowship. Gain the skills, network, and experience to compete on the global technical frontier.
            </p>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Visual */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] group">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Whiteboarding" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square group">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square group">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team Work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] group">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Pitching" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <Badge className="mb-4">THE_PROCESS</Badge>
            <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Rigorous, Remote, and Elite</h2>
            <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-8">
              Our fellowship is a high-intensity environment where raw talent is forged into world-class technical leadership.
            </p>
            <div className="space-y-6 mb-12">
              {[
                "Mock technical interviews with global hiring managers.",
                "Contribution to major Open Source ecosystems.",
                "Soft-skills training for high-growth startup cultures."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <i className="fa-solid fa-circle-check text-indigo-600 mt-1"></i>
                  <p className="text-slate-600 font-bold">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 lg:py-32 relative z-20 -mt-12 lg:-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="shadow-2xl animate-scale-in" padding="xl">
            <div className="mb-20 text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-futuristic uppercase leading-tight">Admissions Portal</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Session_2025 // Rolling Admissions Active</p>
            </div>

            <form onSubmit={handleSubmit} id="fellowship-form" className="space-y-16" name="fellowship-form" method="POST" data-netlify="true">

              {/* Identity Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">01</span>
                  Identity Registry
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Input
                    name="firstName"
                    label="First Name"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <div className="mt-8">
                  <Input
                    name="email"
                    label="Uplink Email Address"
                    required
                    type="email"
                    placeholder="john.doe@tech-uplink.sl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Skills Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">02</span>
                  Skill Architecture
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {techOptions.map((tech) => (
                    <div
                      key={tech}
                      onClick={() => toggleSkill(tech)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center active:scale-95 ${selectedSkills.includes(tech)
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
                        }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest">{tech}</span>
                      <i className={`fa-solid fa-check text-[10px] transition-all ${selectedSkills.includes(tech) ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`}></i>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">03</span>
                  Professional Narrative
                </h3>
                <Textarea
                  name="bio"
                  label="Short Bio & Motivation"
                  required
                  rows={6}
                  placeholder="Tell us about your journey, your biggest technical challenge, and why you want to join the Junction Rails Fellowship..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 mt-2">Limit: 500 characters</p>
              </div>

              {/* Links Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">04</span>
                  Digital Footprint
                </h3>
                <div className="space-y-6">
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors z-10">
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </div>
                    <Input
                      name="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="pl-16 bg-white"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />
                  </div>
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors z-10">
                      <i className="fa-brands fa-github text-lg"></i>
                    </div>
                    <Input
                      name="github"
                      type="url"
                      placeholder="https://github.com/yourusername"
                      className="pl-16 bg-white"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors z-10">
                      <i className="fa-solid fa-globe text-lg"></i>
                    </div>
                    <Input
                      name="portfolio"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      className="pl-16 bg-white"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Transmit Application
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Application Received"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2">
            <i className="fa-solid fa-check text-3xl text-green-500 animate-pulse"></i>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium text-slate-900">
              Fellowship Application Submitted!
            </p>
            <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
              Our admissions team will review your profile and respond via the provided Uplink Email within 5-7 business days.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={() => setIsSuccessModalOpen(false)}
            className="w-full"
          >
            Close Confirmation
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FellowshipProgram;