import React from 'react';
import PageCTA from '../components/PageCTA';

interface TechnicalExpertiseProps {
  onNavigate: (page: string) => void;
}

const TechnicalExpertise: React.FC<TechnicalExpertiseProps> = ({ onNavigate }) => {
  const frontendTech = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
    'Framer Motion', 'Zustand/Redux', 'Jest/RTL', 'Vite'
  ];

  const backendTech = [
    'Node.js', 'Express / Fastify', 'Prisma', 'PostgreSQL / MongoDB',
    'tRPC / REST / GraphQL', 'Auth.js / JWT', 'Redis / Queues', 'Docker'
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-10"
            alt="Technical Expertise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[11px] font-bold mb-10 tracking-[0.4em] uppercase font-futuristic">
              [ OUR_CAPABILITIES ]
            </span>
            <h1 className="text-5xl lg:text-8xl font-bold mb-10 leading-[1.1] tracking-tight font-futuristic uppercase text-slate-900 pb-4">
              Technical <span className="text-indigo-600">Expertise</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium">
              We deploy elite engineering teams trained in modern tech stacks. Our focus is on scalability, security, and exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-48 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Frontend Card */}
            <div className="relative bg-white p-14 lg:p-24 rounded-[4rem] lg:rounded-[5rem] border border-slate-100 hover:border-indigo-200 transition-all duration-700 group shadow-sm hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" alt="Backend Abstract" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-indigo-50 border border-indigo-100 rounded-[2rem] flex items-center justify-center text-indigo-600 text-4xl mb-14 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-10 tracking-tighter font-futuristic uppercase">Frontend Stacks</h2>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-16 font-medium">
                  High-performance, responsive interfaces built with modern component architectures. We prioritize user accessibility and fluid interactions.
                </p>
                
                <div className="grid grid-cols-2 gap-y-10">
                  {frontendTech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-6 text-slate-700 font-bold text-lg lg:text-xl">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Logic Card */}
            <div className="relative bg-white p-14 lg:p-24 rounded-[4rem] lg:rounded-[5rem] border border-slate-100 hover:border-cyan-200 transition-all duration-700 group shadow-sm hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" alt="Backend Abstract" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-cyan-50 border border-cyan-100 rounded-[2rem] flex items-center justify-center text-cyan-600 text-4xl mb-14 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <i className="fa-solid fa-server"></i>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-10 tracking-tighter font-futuristic uppercase">Backend Logic</h2>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-16 font-medium">
                  Scalable, secure, and fault-tolerant server-side systems. We build the robust infrastructure that powers your business logic.
                </p>
                
                <div className="grid grid-cols-2 gap-y-10">
                  {backendTech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-6 text-slate-700 font-bold text-lg lg:text-xl">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-sm"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA type="client" onAction={onNavigate} />
    </div>
  );
};

export default TechnicalExpertise;