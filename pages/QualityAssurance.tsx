
import React from 'react';
import PageCTA from '../components/PageCTA';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

interface QualityAssuranceProps {
  onNavigate: (page: string) => void;
}

const QualityAssurance: React.FC<QualityAssuranceProps> = ({ onNavigate }) => {
  const lifecycleSteps = [
    {
      step: '01',
      title: 'Neural Analysis',
      desc: 'We map project goals and constraints to define a clear quality roadmap.',
      icon: 'fa-magnifying-glass-chart',
      color: 'from-indigo-50',
      border: 'hover:border-indigo-200',
      shadow: 'hover:shadow-indigo-100'
    },
    {
      step: '02',
      title: 'Logic Strategy',
      desc: 'Developing test cases and choosing the right mix of manual and automated testing.',
      icon: 'fa-chess-knight',
      color: 'from-cyan-50',
      border: 'hover:border-cyan-200',
      shadow: 'hover:shadow-cyan-100'
    },
    {
      step: '03',
      title: 'Deployment',
      desc: 'Our engineers execute tests across multiple environments, identifying bugs early.',
      icon: 'fa-play',
      color: 'from-blue-50',
      border: 'hover:border-blue-200',
      shadow: 'hover:shadow-blue-100'
    },
    {
      step: '04',
      title: 'Diagnostic Reports',
      desc: 'Transparent, detailed reports explaining exactly what was found and how to fix it.',
      icon: 'fa-file-invoice',
      color: 'from-slate-50',
      border: 'hover:border-slate-300',
      shadow: 'hover:shadow-slate-200'
    },
    {
      step: '05',
      title: 'Verification',
      desc: 'Final validation ensuring new changes haven\'t affected existing functionality.',
      icon: 'fa-box-open',
      color: 'from-emerald-50',
      border: 'hover:border-emerald-200',
      shadow: 'hover:shadow-emerald-100'
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-10"
            alt="Diagnostic Precision"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-8 lg:mb-10">SYSTEM_VALIDATION</Badge>
            <h1 className="text-4xl lg:text-8xl font-bold mb-8 lg:mb-10 leading-[1.2] lg:leading-[1.1] tracking-tight font-futuristic uppercase py-4 text-slate-900">
              Delivering <span className="text-indigo-600">Stability</span> <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 italic pb-4 pr-8 inline-block">Through Rigorous Logic</span>
            </h1>
            <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed max-w-3xl font-medium">
              We ensure your software is resilient, performant, and secure before it hits production environments.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Context Section */}
      <section className="py-24 lg:py-48 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
                  alt="Code Analysis"
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <Badge className="mb-4">ZERO_BUG_PHILOSOPHY</Badge>
              <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Hardened for Success</h2>
              <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
                Our QA engineers don't just find bugs; they partner with developers to improve code architecture and prevent technical debt from accumulating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-16 lg:py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="SEQUENTIAL_DIAGNOSTICS_FLOW"
            title="Diagnostic Lifecycle"
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
              {lifecycleSteps.map((step, i) => (
                <div key={i} className="group h-full">
                  <Card
                    className={`bg-gradient-to-br ${step.color} to-transparent h-full flex flex-col items-center text-center relative overflow-hidden group-hover:translate-y-[-8px] ${step.shadow} ${step.border}`}
                    padding="none"
                  >
                    <div className="absolute -top-4 -right-4 text-6xl lg:text-7xl font-bold text-slate-100 italic font-futuristic select-none group-hover:text-indigo-50 transition-colors">
                      {step.step}
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col items-center">
                      <div className="w-14 h-14 lg:w-16 bg-white border border-slate-200 rounded-xl lg:rounded-2xl flex items-center justify-center text-indigo-600 text-xl lg:text-2xl mb-6 lg:mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 z-10 shadow-sm">
                        <i className={`fa-solid ${step.icon}`}></i>
                      </div>
                      <div className="z-10">
                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 lg:mb-4 block">Phase_{step.step}</span>
                        <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4 tracking-tight font-futuristic uppercase leading-tight">{step.title}</h4>
                        <p className="text-slate-500 font-medium text-xs lg:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA type="client" onAction={onNavigate} />
    </div>
  );
};

export default QualityAssurance;