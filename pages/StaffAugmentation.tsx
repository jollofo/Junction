
import React from 'react';
import PageCTA from '../components/PageCTA';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

interface StaffAugmentationProps {
  onNavigate: (page: string) => void;
}

const StaffAugmentation: React.FC<StaffAugmentationProps> = ({ onNavigate }) => {
  const engagementModels = [
    {
      title: 'Dedicated Teams',
      desc: 'Engineers who work exclusively for your company, integrating seamlessly with your internal culture and processes.',
      icon: 'fa-users-gear'
    },
    {
      title: 'On-Demand Talent',
      desc: 'Specialized developers available for immediate hire to solve specific bottlenecks or accelerate your roadmap.',
      icon: 'fa-clock'
    },
    {
      title: 'Project Teams',
      desc: 'Mission-focused squads assembled for defined deliverables, ensuring rapid execution and high-quality results.',
      icon: 'fa-diagram-project'
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-10"
            alt="Collaborative Team"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <Badge className="mb-8 lg:mb-10">STAFF_AUGMENTATION</Badge>
            <h1 className="text-4xl lg:text-8xl font-bold mb-8 lg:mb-10 leading-[1.1] tracking-tight font-futuristic uppercase py-2 text-slate-900 pb-2">
              Scale Your <span className="text-indigo-600">Team</span> with <br className="hidden sm:block" />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 pr-4 pb-2">Elite Developers</span>
            </h1>
            <p className="text-lg lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium">
              Get flexible access to vetted Sierra Leonean engineers who integrate directly into your existing development team and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Visual Section */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group">
              <img
                src="/images/verified_integration.jpeg"
                alt="Direct Integration"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-indigo-300 font-bold uppercase tracking-widest text-xs mb-2 block">VERIFIED_INTEGRATION</span>
                <h3 className="text-3xl font-bold font-futuristic uppercase">Seamless Remote Sync</h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <Badge variant="primary" className="mb-4">SYNC_EFFICIENCY</Badge>
            <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Zero Friction Onboarding</h2>
            <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
              We train our developers in Agile best practices and global standard tools (Jira, GitHub, Slack) long before they reach your team. They hit the ground running on day one.
            </p>
            <ul className="space-y-6">
              {[
                { icon: "fa-bolt", text: "Same-day deployment to internal sprints." },
                { icon: "fa-shield", text: "Enterprise-grade data security compliance." },
                { icon: "fa-clock", text: "Significant overlap with GMT/EST timezones." }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-slate-900 font-bold text-lg lg:text-xl">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 lg:py-48 relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="HIRE_MODELS"
            title="Flexible Engagement"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
            {engagementModels.map((model, i) => (
              <Card key={i} padding="lg">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-indigo-50 border border-indigo-100 rounded-2xl lg:rounded-3xl flex items-center justify-center text-indigo-600 text-2xl lg:text-4xl mb-8 lg:mb-16 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <i className={`fa-solid ${model.icon}`}></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-10 font-futuristic uppercase leading-tight tracking-tight">{model.title}</h3>
                <p className="text-base lg:text-xl text-slate-600 leading-relaxed font-medium">{model.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PageCTA type="client" onAction={onNavigate} />
    </div>
  );
};

export default StaffAugmentation;