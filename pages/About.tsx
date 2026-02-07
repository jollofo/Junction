
import React from 'react';
import PageCTA from '../components/PageCTA';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const founders = [
    {
      name: 'Kakpindi Jamiru',
      role: 'FOUNDER & CEO',
      bio: "Freetown, Sierra Leone → Global Impact. Ten years scaling Series A/B startups across healthcare, fintech, and SaaS. Kakpindi built Junction Rails to normalize Sierra Leone as an elite tech hub.",
      image: '/images/Kakpindi_Jamiru.png',
      id: 'F-01',
      links: { linkedin: '#', 'x-twitter': '#' }
    },
    {
      name: 'Daniel Salifu Samura',
      role: 'FOUNDER & CTO',
      bio: "Master of technology and education. Daniel believes deeply that talent is everywhere, but opportunity is not. He oversees the technical curriculum that produces elite talent.",
      image: '/images/Daniel_Samura.png',
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
      image: '/images/Abdulai_Kamara.png',
      id: 'E-01',
      links: { github: '#', linkedin: '#' }
    },
    {
      name: 'Amadu Wurie Bah',
      role: 'Software Developer',
      bio: "A journey from nowhere to the Networked World. Amadu grew from a self-taught enthusiast into an ICT leader, shaping digital systems that power innovation across Sierra Leone.",
      quote: "Technology is about turning imagination into tools that move communities forward.",
      image: '/images/Amadu_Bah.png',
      id: 'E-02',
      links: { github: '#', 'x-twitter': '#' }
    },
    {
      name: 'Gibrilla Kanu',
      role: 'Software Developer',
      bio: "Taught himself to code on a borrowed laptop in Freetown. After facing geographic barriers, Junction Rails recognized his potential, honing his skills for global success.",
      quote: "Talent, when given opportunity, can transcend borders.",
      image: '/images/Gibrilla_Kanu.png',
      id: 'E-03',
      links: { github: '#', linkedin: '#' }
    }
  ];

  return (
    <div className="bg-white animate-in fade-in duration-1000">
      {/* Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-left">
            <Badge className="mb-10">CORE_MANIFESTO</Badge>
            <h1 className="text-4xl lg:text-8xl font-bold mb-16 leading-[1.1] tracking-tight font-futuristic uppercase pb-4 text-slate-900">
              Curiosity, Courage, <br /> and the <span className="text-indigo-600 italic">Spirit to Build.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium mb-4">In Sierra Leone, a young engineer named Kelvin Doe built batteries, generators, and even a community radio station using discarded scraps-powered by curiosity and courage.</p>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium mb-4">His story captured the world's attention, not because of luck, but because it revealed something deeply African: a relentless spirit to build, to innovate, and to uplift others even when the odds seem impossible.</p>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium mb-4">That same spirit lives in the heart of Junction Rails. Every day, brilliant minds graduate from African universities, armed with talent, drive, and potential. But without access to the global stage, their brilliance often goes unseen.</p>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium">We're here to change that. We're building bridges across oceans, proving that determination and creativity can transcend geography.</p>
          </div>
        </div>
      </section>

      {/* Visionaries Section */}
      <section className="py-16 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="THE_ARCHITECTS"
            title="Visionaries"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((member, i) => (
              <Card key={i} className="flex flex-col md:flex-row items-center gap-8 lg:gap-10 overflow-hidden relative" padding="none">
                <div className="absolute top-0 right-8 lg:right-16 text-[100px] lg:text-[180px] font-bold text-indigo-500/[0.07] font-futuristic select-none pointer-events-none leading-none">
                  {member.id}
                </div>

                <div className="shrink-0 relative z-10 m-8 lg:m-10">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[2.5rem] lg:rounded-[3.2rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-1000 group-hover:scale-[1.03]">
                    <img
                      src={member.image}
                      className="w-full h-full object-cover"
                      alt={member.name}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full py-8 lg:py-10 pr-8 lg:pr-10 text-left">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team Grid */}
      <section className="py-16 lg:py-40 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            badge="CORE_ENGINEERING_NODES"
            title="Technical Builders"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {developers.map((dev, i) => (
              <Card key={i} className="flex flex-col h-full" padding="lg">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PageCTA type="client" onAction={onNavigate} />
    </div>
  );
};

export default About;
