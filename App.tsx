import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StaffAugmentation from './pages/StaffAugmentation';
import TechnicalExpertise from './pages/TechnicalExpertise';
import QualityAssurance from './pages/QualityAssurance';
import DeveloperOpportunity from './pages/DeveloperOpportunity';
import ApplyAsDeveloper from './pages/ApplyAsDeveloper';
import FellowshipProgram from './pages/FellowshipProgram';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'get-started':
        return <Contact />;
      case 'staff-augmentation':
        return <StaffAugmentation onNavigate={handleNavigate} />;
      case 'technical-expertise':
        return <TechnicalExpertise onNavigate={handleNavigate} />;
      case 'quality-assurance':
        return <QualityAssurance onNavigate={handleNavigate} />;
      case 'developer-opportunity':
        return <DeveloperOpportunity onNavigate={handleNavigate} />;
      case 'apply-developer':
        return <ApplyAsDeveloper />;
      case 'fellowship-program':
        return <FellowshipProgram onNavigate={handleNavigate} />;
      default:
        return (
          <div className="bg-white mesh-gradient overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full lg:w-3/5 text-left opacity-0 animate-fade-in-up">
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[10px] lg:text-[11px] font-bold mb-8 lg:mb-10 tracking-[0.4em] uppercase font-futuristic">
                    [ GLOBAL_TALENT_UPLINK ]
                  </span>
                  <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-extrabold text-slate-900 leading-[1.1] lg:leading-[0.95] mb-8 lg:mb-10 tracking-tight font-futuristic uppercase pb-2">
                    When <span className="text-indigo-600 italic">talent</span> meets <br className="hidden sm:block" /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">opportunity</span>
                  </h1>
                  
                  <p className="text-lg lg:text-3xl text-slate-600 mb-10 lg:mb-16 leading-relaxed font-medium max-w-2xl opacity-0 animate-fade-in-up delay-100">
                    Connecting world-class African engineering talent with the global innovation economy. Direct, transparent, and built for speed.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-200">
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="bg-indigo-600 text-white px-8 lg:px-14 py-4 lg:py-6 rounded-2xl font-bold text-[11px] lg:text-[13px] uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 active:scale-95 hover:translate-y-[-2px]"
                    >
                      Hire Vetted Talent
                    </button>
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="bg-white text-slate-900 border border-slate-200 px-8 lg:px-14 py-4 lg:py-6 rounded-2xl font-bold text-[11px] lg:text-[13px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 hover:translate-y-[-2px]"
                    >
                      Our Story
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-2/5 relative opacity-0 animate-scale-in delay-300">
                   <div className="absolute -inset-8 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                   <div className="relative glass-panel rounded-[2.5rem] lg:rounded-[4.5rem] p-2 lg:p-3.5 border-slate-100 shadow-2xl animate-subtle-float">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                        className="rounded-[2.3rem] lg:rounded-[4rem] w-full aspect-[4/5] object-cover"
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
                        src="https://images.unsplash.com/photo-1544332402-99933f7c358f?auto=format&fit=crop&q=80&w=1200" 
                        alt="Freetown Innovation" 
                        className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply"></div>
                       <div className="absolute bottom-10 left-10 text-white font-futuristic">
                          <span className="block text-4xl font-bold uppercase">Silicon</span>
                          <span className="block text-6xl font-black italic -mt-2">Mountains</span>
                       </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <span className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">LOCAL_ORIGINS</span>
                    <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-futuristic uppercase leading-tight">Born in Freetown, <br/> Built for the World</h2>
                    <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium mb-12 italic">
                      "We aren't just an outsourcing agency. We are a community of developers in Sierra Leone working on the hardest problems in global tech."
                    </p>
                    <button onClick={() => handleNavigate('about')} className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-600 flex items-center gap-4 hover:gap-6 transition-all">
                       Explore Our Hub <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
               </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-24 lg:py-48 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-32 opacity-0 animate-fade-in">
                  <span className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">THE_JUNCTION_EDGE</span>
                  <h2 className="text-3xl lg:text-7xl font-bold text-slate-900 tracking-tighter font-futuristic uppercase leading-tight">Beyond Outsourcing</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
                  {[
                    { title: 'Neural Matching', desc: 'Our proprietary process finds developers that fit your culture and tech debt, not just a list of keywords.', icon: 'fa-brain', delay: 'delay-100' },
                    { title: 'Local Roots', desc: 'Direct roots in Sierra Leonean universities ensure we reach talent before the competition even knows they exist.', icon: 'fa-location-dot', delay: 'delay-200' },
                    { title: 'Risk Abstraction', desc: 'Trial periods and satisfaction guarantees built into every contract. We only win when you succeed.', icon: 'fa-shield-heart', delay: 'delay-300' }
                  ].map((item, i) => (
                    <div key={i} className={`bg-slate-50 p-10 lg:p-16 rounded-[2.5rem] lg:rounded-[4rem] border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-700 group shadow-sm opacity-0 animate-fade-in-up ${item.delay}`}>
                      <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white border border-slate-200 rounded-xl lg:rounded-[2.5rem] flex items-center justify-center text-indigo-600 text-xl lg:text-3xl mb-8 lg:mb-14 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        <i className={`fa-solid ${item.icon} group-hover:rotate-6 transition-transform`}></i>
                      </div>
                      <h3 className="text-xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-8 font-futuristic leading-tight uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium text-base lg:text-xl">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 lg:py-64 bg-[#020617] text-white relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1200px] h-[800px] lg:h-[1200px] bg-indigo-600/5 rounded-full blur-[160px] animate-pulse"></div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-[10px] lg:text-[11px] font-bold text-indigo-500 uppercase tracking-[0.8em] mb-12 lg:mb-20 block font-futuristic">MISSION_CORE</span>
                
                <div className="relative inline-block py-12 lg:py-24 px-6 lg:px-24 border-x border-indigo-500/20 opacity-0 animate-fade-in">
                  <h2 className="text-3xl lg:text-[80px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tighter font-futuristic uppercase mb-8 lg:mb-12">
                    <span className="text-indigo-400">To empower</span> <br />
                    <span className="text-indigo-400 italic">African Engineers</span> <br />
                    <span className="text-white opacity-90 text-lg lg:text-4xl normal-case font-medium max-w-3xl mx-auto block mt-8 lg:mt-12 leading-relaxed px-2 lg:px-0">
                      Through access, training, and opportunity—helping startups thrive while changing the narrative of what's possible from
                    </span>
                    <span className="text-indigo-400 block mt-6 lg:mt-10">Sierra Leone.</span>
                  </h2>
                </div>

                <div className="mt-16 lg:mt-24 opacity-0 animate-fade-in delay-200">
                  <button 
                    onClick={() => handleNavigate('about')}
                    className="group relative px-10 lg:px-14 py-4 lg:py-6 rounded-full border border-indigo-500/30 text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px] overflow-hidden hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Learn Our Story <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 lg:py-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-12 lg:p-40 rounded-[2.5rem] lg:rounded-[5rem] border border-slate-100 text-center relative overflow-hidden shadow-2xl shadow-indigo-50 group">
                  <h2 className="text-4xl lg:text-[100px] font-bold text-slate-900 mb-8 lg:mb-16 tracking-tighter font-futuristic uppercase relative z-10 leading-[1] lg:leading-[0.9] py-2 lg:py-4 transition-transform group-hover:scale-[1.01] duration-700">Ready to expand?</h2>
                  <p className="text-lg lg:text-4xl text-slate-500 mb-12 lg:mb-24 max-w-4xl mx-auto font-medium relative z-10 italic px-2 lg:px-0">
                    Connect with the most resilient technical talent pool in Africa today.
                  </p>
                  <button 
                    onClick={() => handleNavigate('contact')}
                    className="relative z-10 bg-indigo-600 text-white px-10 lg:px-24 py-5 lg:py-9 rounded-2xl lg:rounded-[2.5rem] font-bold text-base lg:text-2xl uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl active:scale-95 hover:translate-y-[-4px]"
                  >
                    Partner With Us
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-['Inter'] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-white text-slate-500 py-16 lg:py-40 border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-24 mb-16 lg:mb-32">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-10 lg:space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                    <i className="fa-solid fa-j text-indigo-600 text-xl lg:text-3xl font-bold"></i>
                  </div>
                  <span className="text-xl lg:text-4xl font-bold text-slate-900 tracking-tighter uppercase font-futuristic">Junction Rails</span>
                </div>
                <p className="max-w-md text-lg lg:text-2xl text-slate-500 leading-relaxed font-medium">
                  The primary technical uplink for Sierra Leonean engineering talent. Building the foundation of the next digital frontier.
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
                  <li><button onClick={() => handleNavigate('home')} className="hover:text-indigo-600 transition-colors">Home</button></li>
                  <li><button onClick={() => handleNavigate('about')} className="hover:text-indigo-600 transition-colors">About</button></li>
                  <li><button onClick={() => handleNavigate('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
                  <li><button onClick={() => handleNavigate('login')} className="hover:text-indigo-600 transition-colors">Login</button></li>
                </ul>
              </div>

              <div className="space-y-8 lg:space-y-12">
                <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px]">Capabilities</h4>
                <ul className="space-y-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                  <li><button onClick={() => handleNavigate('staff-augmentation')} className="hover:text-indigo-600 transition-colors">Staff Augmentation</button></li>
                  <li><button onClick={() => handleNavigate('technical-expertise')} className="hover:text-indigo-600 transition-colors">Technical Expertise</button></li>
                  <li><button onClick={() => handleNavigate('quality-assurance')} className="hover:text-indigo-600 transition-colors">Quality Assurance</button></li>
                </ul>
              </div>

              <div className="space-y-8 lg:space-y-12">
                <h4 className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] lg:text-[11px]">Talent Network</h4>
                <ul className="space-y-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                  <li><button onClick={() => handleNavigate('developer-opportunity')} className="hover:text-indigo-600 transition-colors">Opportunities</button></li>
                  <li><button onClick={() => handleNavigate('fellowship-program')} className="hover:text-indigo-600 transition-colors">Fellowship</button></li>
                  <li><button onClick={() => handleNavigate('apply-developer')} className="hover:text-indigo-600 transition-colors">Apply Now</button></li>
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
    </div>
  );
};

export default App;