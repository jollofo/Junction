
import React from 'react';
import PageCTA from '../components/PageCTA';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';

interface HowItWorksProps {
    onNavigate: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
    const steps = [
        {
            step: '01',
            title: 'Discovery & Alignment',
            desc: 'We understand your product, technical stack, timeline, and goals to define clear scope and success criteria.',
            icon: 'fa-magnifying-glass',
            color: 'from-indigo-50',
            border: 'hover:border-indigo-200',
            shadow: 'hover:shadow-indigo-100'
        },
        {
            step: '02',
            title: 'Talent Matching',
            desc: 'We match you with vetted engineers whose experience aligns with your stack, stage, and delivery needs.',
            icon: 'fa-user-check',
            color: 'from-cyan-50',
            border: 'hover:border-cyan-200',
            shadow: 'hover:shadow-cyan-100'
        },
        {
            step: '03',
            title: 'Kickoff & Integration',
            desc: 'Engineers integrate into your tools, workflows, and team, contributing alongside your internal developers.',
            icon: 'fa-rocket',
            color: 'from-blue-50',
            border: 'hover:border-blue-200',
            shadow: 'hover:shadow-blue-100'
        },
        {
            step: '04',
            title: 'Build & Collaborate',
            desc: 'Engineers design, develop, and iterate on frontend and backend systems in close collaboration with your team.',
            icon: 'fa-code',
            color: 'from-slate-50',
            border: 'hover:border-slate-300',
            shadow: 'hover:shadow-slate-200'
        },
        {
            step: '05',
            title: 'Scale & Continue',
            desc: 'Easily scale your team up or down, extend scope, or transition support as your product evolves.',
            icon: 'fa-arrow-up-right-dots',
            color: 'from-emerald-50',
            border: 'hover:border-emerald-200',
            shadow: 'hover:shadow-emerald-100'
        }
    ];

    return (
        <div className="animate-in fade-in duration-1000 bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
                        className="w-full h-full object-cover opacity-10"
                        alt="Process and Collaboration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white to-white"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="mb-8 lg:mb-10">EXECUTION_FRAMEWORK</Badge>
                        <h1 className="text-4xl lg:text-8xl font-bold mb-8 lg:mb-10 leading-[1.1] tracking-tight font-futuristic uppercase text-slate-900">
                            Working With <span className="text-indigo-600">Junction</span>
                        </h1>
                        <p className="text-lg lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            From Alignment to Execution
                        </p>
                    </div>
                </div>
            </section>

            {/* Lifecycle Section */}
            <section className="py-16 lg:py-40 bg-slate-50 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[140px] left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
                            {steps.map((step, i) => (
                                <div key={i} className="group h-full">
                                    <Card
                                        className={`bg-gradient-to-br ${step.color} to-transparent h-full flex flex-col items-center text-center relative overflow-hidden group-hover:translate-y-[-8px] transition-all duration-500 ${step.shadow} ${step.border}`}
                                        padding="none"
                                    >
                                        {/* Ghost Numbering */}
                                        <div className="absolute -top-4 -right-4 text-7xl lg:text-8xl font-bold text-slate-100 italic font-futuristic select-none group-hover:text-indigo-50/50 transition-colors pointer-events-none">
                                            {step.step}
                                        </div>

                                        <div className="p-8 lg:p-10 flex flex-col items-center h-full">
                                            {/* Icon Container */}
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-2xl lg:rounded-3xl flex items-center justify-center text-indigo-600 text-2xl lg:text-3xl mb-8 lg:mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 z-10 shadow-sm">
                                                <i className={`fa-solid ${step.icon}`}></i>
                                            </div>

                                            <div className="z-10 flex flex-col flex-grow">
                                                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 lg:mb-4 block">Phase_{step.step}</span>
                                                <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-4 tracking-tight font-futuristic uppercase leading-tight h-14 flex items-center justify-center">
                                                    {step.title}
                                                </h4>
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

export default HowItWorks;
