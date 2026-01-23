
import React from 'react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

interface HomeProps {
    onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="bg-white mesh-gradient overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-3/5 text-left opacity-0 animate-fade-in-up">
                        <Badge className="mb-8 lg:mb-10">GLOBAL_TALENT_UPLINK</Badge>
                        <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-extrabold text-slate-900 leading-[1.1] lg:leading-[0.95] mb-8 lg:mb-10 tracking-tight font-futuristic uppercase pb-2">
                            When <span className="text-indigo-600 italic">talent </span>meets <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">opportunity</span>
                        </h1>

                        <p className="text-lg lg:text-3xl text-slate-600 mb-10 lg:mb-16 leading-relaxed font-medium max-w-2xl opacity-0 animate-fade-in-up delay-100">
                            Connecting world-class African engineering talent with global startups, <b>built by founders for founders</b> to deliver efficient scaling, lower burn rates, and faster execution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-200">
                            <Button
                                variant="primary"
                                onClick={() => onNavigate('contact')}
                            >
                                Hire Vetted Talent
                            </Button>
                            <Button
                                variant="white"
                                onClick={() => onNavigate('about')}
                            >
                                Our Story
                            </Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 relative opacity-0 animate-scale-in delay-300">
                        <div className="absolute -inset-8 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative glass-panel rounded-[2.5rem] lg:rounded-[4.5rem] p-2 lg:p-3.5 border-slate-100 shadow-2xl animate-subtle-float">
                            <img
                                src="/images/homepage.png"
                                className="rounded-[3rem] w-full aspect-[4/5] object-cover shadow-2xl"
                                alt="Software Engineer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Freetown Tech Hub Section */}
            <section className="py-24 lg:py-48 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                            <img
                                src="/images/silicon_mountains.png"
                                alt="Freetown Innovation"
                                className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Badge className="mb-4">LOCAL_ORIGINS</Badge>
                        <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Born in Freetown, <br /> Built for the Founders</h2>
                        <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-12 italic">
                            Our engineers are based in Sierra Leone and led by U.S.-based management, providing startups with world-class talent and seamless collaboration.
                        </p>
                        <button onClick={() => onNavigate('about')} className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600 flex items-center gap-4 hover:gap-6 transition-all">
                            Explore Our Hub <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-24 lg:py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        badge="THE_JUNCTION_EDGE"
                        title="Beyond Outsourcing"
                        className="opacity-0 animate-fade-in"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
                        {[
                            { title: 'Neural Matching', desc: 'Our proprietary process finds developers that fit your culture and tech debt, not just a list of keywords.', icon: 'fa-brain', delay: 'delay-100' },
                            { title: 'Local Roots', desc: 'Direct roots in Sierra Leonean universities ensure we reach talent before the competition even knows they exist.', icon: 'fa-location-dot', delay: 'delay-200' },
                            { title: 'Risk Abstraction', desc: 'Trial periods and satisfaction guarantees built into every contract. We only win when you succeed.', icon: 'fa-shield-heart', delay: 'delay-300' }
                        ].map((item, i) => (
                            <Card key={i} className={`opacity-0 animate-fade-in-up ${item.delay}`} padding="lg">
                                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-xl lg:rounded-[2.5rem] flex items-center justify-center text-indigo-600 text-xl lg:text-3xl mb-8 lg:mb-14 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                    <i className={`fa-solid ${item.icon} group-hover:rotate-6 transition-transform`}></i>
                                </div>
                                <h3 className="text-xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-8 font-futuristic leading-tight uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-base lg:text-xl">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 lg:py-64 bg-[#020617] text-white relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1200px] h-[800px] lg:h-[1200px] bg-indigo-600/5 rounded-full blur-[160px] animate-pulse"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge variant="outline" className="text-indigo-500 border-indigo-500/30 mb-12 lg:mb-20">MISSION_CORE</Badge>

                    <div className="relative inline-block py-12 lg:py-24 px-6 lg:px-24 border-x border-indigo-500/20 opacity-0 animate-fade-in">
                        <h2 className="text-3xl lg:text-[80px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tighter font-futuristic uppercase mb-8 lg:mb-12">
                            <span className="text-indigo-400">To empower</span> <br />
                            <span className="text-indigo-400 italic">African Engineers</span> <br />
                            <span className="text-white opacity-90 text-lg lg:text-4xl normal-case font-medium max-w-3xl mx-auto block mt-8 lg:mt-12 leading-relaxed px-2 lg:px-0">
                                By building and scaling full-stack products for global startups—crafting high-performance frontends and secure, scalable backend systems, delivered by developers in
                            </span>
                            <span className="text-indigo-400 block mt-6 lg:mt-10">SIERRA LEONE</span>
                        </h2>
                    </div>

                    <div className="mt-16 lg:mt-24 opacity-0 animate-fade-in delay-200">
                        <Button
                            variant="outline"
                            className="text-indigo-400 border-indigo-500/30 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-full"
                            onClick={() => onNavigate('about')}
                        >
                            Learn Our Story <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 lg:py-48">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="text-center relative overflow-hidden shadow-2xl shadow-indigo-50 group" padding="xl">
                        <h2 className="text-4xl lg:text-[100px] font-bold text-slate-900 mb-8 lg:mb-16 tracking-tighter font-futuristic uppercase relative z-10 leading-[1] lg:leading-[0.9] py-2 lg:py-4 transition-transform group-hover:scale-[1.01] duration-700">Ready to expand?</h2>
                        <p className="text-lg lg:text-4xl text-slate-500 mb-12 lg:mb-24 max-w-4xl mx-auto font-medium relative z-10 italic px-2 lg:px-0">
                            Connect with the most resilient technical talent pool in Africa today.
                        </p>
                        <Button
                            size="lg"
                            variant="primary"
                            onClick={() => onNavigate('contact')}
                            className="relative z-10"
                        >
                            Partner With Us
                        </Button>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Home;
