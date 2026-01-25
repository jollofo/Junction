
import React from 'react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-white text-slate-500 py-16 lg:py-40 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-24 mb-16 lg:mb-32">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-10 lg:space-y-16">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 overflow-hidden">
                                    <img src="/images/logo.png" alt="Junction Rails Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xl lg:text-4xl font-bold text-slate-900 tracking-tighter uppercase font-futuristic">Junction Rails</span>
                            </div>
                            <p className="max-w-md text-lg lg:text-2xl text-slate-500 leading-relaxed font-medium">
                                Connecting full-stack African engineering talent with global startups. <b>Built by founders for founders</b>
                            </p>
                        </div>

                        <div className="flex gap-4 lg:gap-6">
                            {[
                                { id: 'linkedin-in', label: 'LinkedIn' },
                                { id: 'x-twitter', label: 'X (Twitter)' },
                                { id: 'github', label: 'GitHub' }
                            ].map((icon) => (
                                <a
                                    key={icon.id}
                                    href="#"
                                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1.2rem] lg:rounded-[1.5rem] bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-white hover:shadow-xl transition-all group"
                                    aria-label={icon.label}
                                >
                                    <i className={`fa-brands fa-${icon.id} text-lg lg:text-2xl group-hover:scale-110 transition-transform`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3 gap-8 lg:gap-24">
                        <div className="space-y-8 lg:space-y-12">
                            <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px]">Platform</h4>
                            <ul className="space-y-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                                <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">Home</button></li>
                                <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors">About</button></li>
                                <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
                                <li><button onClick={() => onNavigate('login')} className="hover:text-indigo-600 transition-colors">Login</button></li>
                            </ul>
                        </div>

                        <div className="space-y-8 lg:space-y-12">
                            <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px]">Capabilities</h4>
                            <ul className="space-y-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                                <li><button onClick={() => onNavigate('staff-augmentation')} className="hover:text-indigo-600 transition-colors">Staff Augmentation</button></li>
                                <li><button onClick={() => onNavigate('technical-expertise')} className="hover:text-indigo-600 transition-colors">Technical Expertise</button></li>
                                <li><button onClick={() => onNavigate('quality-assurance')} className="hover:text-indigo-600 transition-colors">Quality Assurance</button></li>
                            </ul>
                        </div>

                        <div className="space-y-8 lg:space-y-12">
                            <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px]">Talent Network</h4>
                            <ul className="space-y-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                                <li><button onClick={() => onNavigate('developer-opportunity')} className="hover:text-indigo-600 transition-colors">Opportunities</button></li>
                                <li><button onClick={() => onNavigate('fellowship-program')} className="hover:text-indigo-600 transition-colors">Fellowship</button></li>
                                <li><button onClick={() => onNavigate('apply-developer')} className="hover:text-indigo-600 transition-colors">Apply Now</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-12 lg:pt-24 border-t border-slate-100 text-[9px] lg:text-[12px] font-bold uppercase tracking-[0.3em] flex flex-col md:flex-row justify-between items-center opacity-40 gap-6">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} JUNCTION RAILS. ALL RIGHTS RESERVED.</p>
                    <p>DESIGNED FOR GLOBAL CONNECTIVITY.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
