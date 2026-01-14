import React, { useState } from 'react';

interface FellowshipProgramProps {
  onNavigate?: (page: string) => void;
}

const FellowshipProgram: React.FC<FellowshipProgramProps> = ({ onNavigate }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
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
    alert('Fellowship Application Submitted! Our admissions team will review your profile and respond via the provided Uplink Email.');
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
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[11px] font-bold mb-10 tracking-[0.4em] uppercase font-futuristic">
              [ FELLOWSHIP_ADMISSIONS ]
            </span>
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
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5]">
                     <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Whiteboarding" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
                     <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="pt-12 space-y-6">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
                     <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team Work" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5]">
                     <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Pitching" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2">
               <span className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">THE_PROCESS</span>
               <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Rigorous, Remote, and Elite</h2>
               <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-8">
                 Our fellowship is a high-intensity environment where raw talent is forged into world-class technical leadership. 
               </p>
               <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                     <i className="fa-solid fa-circle-check text-indigo-600 mt-1"></i>
                     <p className="text-slate-600 font-bold">Mock technical interviews with global hiring managers.</p>
                  </div>
                  <div className="flex items-start gap-4">
                     <i className="fa-solid fa-circle-check text-indigo-600 mt-1"></i>
                     <p className="text-slate-600 font-bold">Contribution to major Open Source ecosystems.</p>
                  </div>
                  <div className="flex items-start gap-4">
                     <i className="fa-solid fa-circle-check text-indigo-600 mt-1"></i>
                     <p className="text-slate-600 font-bold">Soft-skills training for high-growth startup cultures.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 lg:py-32 relative z-20 -mt-12 lg:-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 p-8 lg:p-24 animate-scale-in">
            <div className="mb-20 text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-futuristic uppercase leading-tight">Admissions Portal</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Session_2025 // Rolling Admissions Active</p>
            </div>

            <form onSubmit={handleSubmit} id="fellowship-form" className="space-y-16">
              
              {/* Identity Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">01</span>
                  Identity Registry
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">First Name</label>
                    <input required type="text" placeholder="John" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Last Name</label>
                    <input required type="text" placeholder="Doe" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400" />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Uplink Email Address</label>
                  <input required type="email" placeholder="john.doe@tech-uplink.sl" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400" />
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
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center active:scale-95 ${
                        selectedSkills.includes(tech) 
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
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Short Bio & Motivation</label>
                  <textarea 
                    required 
                    rows={6}
                    placeholder="Tell us about your journey, your biggest technical challenge, and why you want to join the Junction Rails Fellowship..." 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400 resize-none" 
                  />
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Limit: 500 characters</p>
                </div>
              </div>

              {/* Links Section */}
              <div className="p-8 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-6 mb-12 font-futuristic uppercase tracking-tight">
                  <span className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-100 shrink-0">04</span>
                  Digital Footprint
                </h3>
                <div className="space-y-6">
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors">
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </div>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/yourprofile" 
                      className="w-full bg-white border border-slate-200 rounded-xl pl-16 pr-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300" 
                    />
                  </div>
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors">
                      <i className="fa-brands fa-github text-lg"></i>
                    </div>
                    <input 
                      type="url" 
                      placeholder="https://github.com/yourusername" 
                      className="w-full bg-white border border-slate-200 rounded-xl pl-16 pr-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300" 
                    />
                  </div>
                  <div className="relative group/input">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors">
                      <i className="fa-solid fa-globe text-lg"></i>
                    </div>
                    <input 
                      type="url" 
                      placeholder="https://yourportfolio.com" 
                      className="w-full bg-white border border-slate-200 rounded-xl pl-16 pr-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-300" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 text-center">
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white px-16 py-6 rounded-2xl font-bold text-xl uppercase tracking-widest hover:bg-indigo-700 hover:translate-y-[-2px] transition-all shadow-xl active:scale-95 w-full sm:w-auto"
                >
                  Transmit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FellowshipProgram;