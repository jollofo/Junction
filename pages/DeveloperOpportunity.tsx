import React from 'react';
import PageCTA from '../components/PageCTA';

interface DeveloperOpportunityProps {
  onNavigate: (page: string) => void;
}

const DeveloperOpportunity: React.FC<DeveloperOpportunityProps> = ({ onNavigate }) => {
  const steps = [
    { 
      num: '01', 
      title: 'Intensive Training', 
      desc: 'Immersive training in modern architectures and global engineering standards.',
      icon: 'fa-brain',
      color: 'from-indigo-50',
      border: 'hover:border-indigo-200',
      shadow: 'hover:shadow-indigo-100'
    },
    { 
      num: '02', 
      title: 'Skill Verification', 
      desc: 'Rigorous testing and verification to ensure your skills meet global demand.',
      icon: 'fa-shield-halved',
      color: 'from-cyan-50',
      border: 'hover:border-cyan-200',
      shadow: 'hover:shadow-cyan-100'
    },
    { 
      num: '03', 
      title: 'Global Placement', 
      desc: 'Direct placement with global tech startups seeking world-class resilient engineers.',
      icon: 'fa-earth-africa',
      color: 'from-blue-50',
      border: 'hover:border-blue-200',
      shadow: 'hover:shadow-blue-100'
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-10"
            alt="Developer Opportunities"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[11px] font-bold mb-8 lg:mb-10 tracking-[0.4em] uppercase font-futuristic">
              [ FELLOWSHIP_PROGRAM ]
            </span>
            <h1 className="text-4xl lg:text-8xl font-bold mb-8 lg:mb-10 leading-[1.2] lg:leading-[1.1] tracking-tight font-futuristic uppercase py-4 text-slate-900">
              Your Global <span className="text-indigo-600">Career</span> <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 italic pb-4 pr-8 inline-block">Starts Here</span>
            </h1>
            <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed max-w-3xl font-medium">
              Junction Rails is the bridge for elite Sierra Leonean talent. We train, verify, and place the next generation of engineers into the global tech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-40 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.5em] mb-4 lg:mb-6 block font-futuristic">CAREER_ACCELERATION_FLOW</span>
            <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-6 lg:mb-8 tracking-tighter font-futuristic uppercase leading-tight">Our Process</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="group h-full">
                  <div className={`bg-white p-8 lg:p-14 rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-100 ${step.border} bg-gradient-to-br ${step.color} to-transparent transition-all duration-700 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:translate-y-[-8px] shadow-sm ${step.shadow}`}>
                    <div className="absolute -top-4 -right-4 text-7xl lg:text-8xl font-bold text-slate-100 italic font-futuristic select-none group-hover:text-indigo-50 transition-colors">
                      {step.num}
                    </div>
                    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-xl lg:rounded-2xl flex items-center justify-center text-indigo-600 text-xl lg:text-3xl mb-8 lg:mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 z-10 shadow-sm">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <div className="z-10">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 lg:mb-4 block">Phase_{step.num}</span>
                      <h4 className="text-lg lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6 tracking-tight font-futuristic uppercase leading-tight">{step.title}</h4>
                      <p className="text-slate-500 font-medium text-sm lg:text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA type="developer" onAction={onNavigate} />
    </div>
  );
};

export default DeveloperOpportunity;