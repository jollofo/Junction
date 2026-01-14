import React from 'react';

interface PageCTAProps {
  type: 'client' | 'developer';
  onAction: (page: string) => void;
}

const PageCTA: React.FC<PageCTAProps> = ({ type, onAction }) => {
  const isClient = type === 'client';
  const headingId = `cta-heading-${type}`;
  
  const bgImage = isClient 
    ? "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
    : "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1920";

  return (
    <section 
      className="py-24 lg:py-40 relative overflow-hidden bg-white"
      aria-labelledby={headingId}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-24 border overflow-hidden group shadow-2xl transition-all duration-700 ${
          isClient 
            ? 'bg-indigo-600 border-indigo-500 shadow-indigo-100' 
            : 'bg-[#0f172a] border-slate-800 shadow-slate-900/20'
        }`}>
          
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 z-0">
             <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110" />
             <div className={`absolute inset-0 ${isClient ? 'bg-indigo-600/80' : 'bg-[#0f172a]/90'}`}></div>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-10"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700 z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 text-white text-center lg:text-left">
            <div className="w-full lg:max-w-3xl">
              <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.3em] mb-8 lg:mb-12 ${
                isClient ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isClient ? 'bg-indigo-200' : 'bg-indigo-400'}`}></span>
                {isClient ? 'Build Your Squad' : 'Scale Your Career'}
              </div>
              
              <h2 id={headingId} className="font-bold mb-8 lg:mb-10 tracking-tighter font-futuristic uppercase leading-[1.1]">
                {isClient ? (
                  <span className="text-4xl sm:text-6xl lg:text-8xl block">
                    Ready to scale <br />
                    <span className="text-indigo-200 italic">your team?</span>
                  </span>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2 normal-case font-medium block">Apply for the 2025</span>
                    <span className="text-5xl sm:text-7xl lg:text-[110px] font-black italic text-white tracking-[-0.04em] block drop-shadow-sm">
                      FELLOWSHIP
                    </span>
                  </div>
                )}
              </h2>
              
              <p className={`text-lg lg:text-2xl mb-10 lg:mb-0 ${isClient ? 'text-indigo-100' : 'text-slate-400'} leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0`}>
                {isClient 
                  ? "Stop wasting time with hit-or-miss recruitment. Connect with the continent's most resilient engineering talent."
                  : "Bridging the gap between raw potential and global standards. Our rigorous training prepares you for the world's most innovative startups."
                }
              </p>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <button 
                onClick={() => onAction(isClient ? 'contact' : 'fellowship-program')}
                aria-label={isClient ? "Contact Junction Solutions to hire vetted talent" : "Join our developer network and apply for the 2025 fellowship"}
                className={`group/btn w-full lg:w-auto px-12 lg:px-16 py-6 lg:py-8 rounded-2xl lg:rounded-[2.5rem] font-bold text-lg lg:text-xl uppercase tracking-widest transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-6 hover:translate-y-[-4px] focus:ring-4 focus:outline-none ${
                  isClient 
                    ? 'bg-white text-indigo-600 shadow-indigo-700/20 focus:ring-white/50' 
                    : 'bg-[#4f46e5] text-white shadow-indigo-600/30 focus:ring-indigo-500/50'
                }`}
              >
                <span>{isClient ? "Partner With Us" : "Join Network"}</span>
                <i className="fa-solid fa-arrow-right opacity-70 group-hover/btn:translate-x-2 transition-transform" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;