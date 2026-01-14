
import React from 'react';
import PageCTA from '../components/PageCTA';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const founders = [
    {
      name: 'Kakpindi Jamiru',
      role: 'FOUNDER & CEO',
      bio: "Freetown, Sierra Leone → Global Impact. Ten years scaling Series A/B startups across healthcare, fintech, and SaaS. Kakpindi built Junction Rails to normalize Sierra Leone as an elite tech hub.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800', 
      id: 'F-01',
      links: { linkedin: '#', 'x-twitter': '#' }
    },
    {
      name: 'Daniel Salifu Samura',
      role: 'FOUNDER & CTO',
      bio: "Master of technology and education. Daniel believes deeply that talent is everywhere, but opportunity is not. He oversees the technical curriculum that produces elite talent.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      id: 'F-02',
      links: { linkedin: '#', github: '#' }
    }
  ];

  const developers = [
    {
      name: 'Abdulai Brato Kamara',
      role: 'Lead Software Developer',
      bio: "Abdulai designs and implements digital solutions that drive innovation and improve lives. His work focuses on systems that strengthen learning, health, and community development.",
      quote: "Technology is most powerful when it empowers people to create change.",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      id: 'E-01',
      links: { github: '#', linkedin: '#' }
    },
    {
      name: 'Amadu Wurie Bah',
      role: 'Software Developer',
      bio: "A journey from nowhere to the Networked World. Amadu grew from a self-taught enthusiast into an ICT leader, shaping digital systems that power innovation across Sierra Leone.",
      quote: "Technology is about turning imagination into tools that move communities forward.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      id: 'E-02',
      links: { github: '#', 'x-twitter': '#' }
    },
    {
      name: 'Gibrilla Kanu',
      role: 'Software Developer',
      bio: "Taught himself to code on a borrowed laptop in Freetown. After facing geographic barriers, Junction Rails recognized his potential, honing his skills for global success.",
      quote: "Talent, when given opportunity, can transcend borders.",
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800',
      id: 'E-03',
      links: { github: '#', linkedin: '#' }
    }
  ];

  return (
    <div className="bg-white animate-in fade-in duration-1000">
      {/* Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[11px] font-bold mb-10 tracking-[0.4em] uppercase font-futuristic">
              [ CORE_MANIFESTO ]
            </span>
            <h1 className="text-4xl lg:text-8xl font-bold mb-10 leading-[1.1] tracking-tight font-futuristic uppercase pb-4 text-slate-900">
              Curiosity, Courage, <br /> and the <span className="text-indigo-600 italic">Spirit to Build.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium">
              We are building the technical infrastructure for the next billion users, starting with the resilient talent pool in Sierra Leone.
            </p>
          </div>
        </div>
      </section>

      {/* Visionaries Section */}
      <section className="py-16 lg:py-40 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 lg:mb-32">
            <span className="text-indigo-600 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] mb-4 block font-futuristic">THE_ARCHITECTS</span>
            <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 tracking-tight font-futuristic uppercase leading-tight">Visionaries</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((member, i) => (
              <div key={i} className="relative bg-white p-8 lg:p-14 rounded-[3.5rem] lg:rounded-[4.5rem] border border-slate-100 group transition-all duration-700 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col md:flex-row items-center gap-8 lg:gap-10 overflow-hidden">
                {/* Background Large ID - matched to screenshot positioning */}
                <div className="absolute top-0 right-8 lg:right-16 text-[100px] lg:text-[180px] font-bold text-indigo-500/[0.07] font-futuristic select-none pointer-events-none leading-none">
                  {member.id}
                </div>

                <div className="shrink-0 relative z-10">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[2.5rem] lg:rounded-[3.2rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-1000 group-hover:scale-[1.03]">
                    <img 
                      src={member.image} 
                      className="w-full h-full object-cover" 
                      alt={member.name}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full py-4 text-left">
                  <div className="flex-grow">
                    <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tighter font-futuristic leading-tight group-hover:text-indigo-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-black text-[10px] lg:text-[11px] mb-8 uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-sm">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 lg:gap-8 mt-auto">
                     <div className="flex items-center gap-6">
                        {Object.entries(member.links).map(([platform, url]) => (
                          <a key={platform} href={url} className="text-slate-300 hover:text-indigo-600 transition-all text-xl lg:text-2xl hover:scale-110">
                            <i className={`fa-brands fa-${platform}`}></i>
                          </a>
                        ))}
                     </div>
                     <div className="flex-grow"></div>
                     <span className="text-[9px] lg:text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team Grid */}
      <section className="py-16 lg:py-40 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 lg:mb-32">
            <span className="text-indigo-600 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] mb-4 block font-futuristic">CORE_ENGINEERING_NODES</span>
            <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 tracking-tight font-futuristic uppercase leading-tight">Technical Builders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {developers.map((dev, i) => (
              <div key={i} className="bg-slate-50/50 p-10 lg:p-12 rounded-[3.5rem] lg:rounded-[4rem] border border-slate-100 group hover:border-indigo-200 hover:bg-white transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-2xl">
                <div className="flex items-start justify-between mb-10 lg:mb-14">
                  <div className="relative">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden border border-slate-100 relative z-10 shadow-md">
                      <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-slate-100 font-futuristic text-4xl lg:text-5xl font-bold">{dev.id}</span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 font-futuristic group-hover:text-indigo-600 transition-colors">{dev.name}</h3>
                  <p className="text-[10px] lg:text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-8">{dev.role}</p>
                  
                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-10 font-medium">
                    {dev.bio}
                  </p>

                  <div className="relative p-6 lg:p-8 bg-slate-50 border-l-4 border-indigo-500 rounded-r-3xl mb-10 group-hover:bg-white transition-colors">
                    <p className="text-xs lg:text-sm italic text-slate-800 font-semibold leading-relaxed">
                      "{dev.quote}"
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-5">
                    {Object.entries(dev.links).map(([platform, url]) => (
                      <a key={platform} href={url} className="text-slate-300 hover:text-indigo-600 transition-colors text-lg">
                        <i className={`fa-brands fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-bold text-slate-300 uppercase tracking-widest">Active Engineer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA type="client" onAction={onNavigate} />
    </div>
  );
};

export default About;
