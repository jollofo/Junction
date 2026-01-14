
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const isServicesActive = ['staff-augmentation', 'technical-expertise', 'quality-assurance'].includes(currentPage);
  const isDevelopersActive = ['developer-opportunity', 'apply-developer', 'fellowship-program'].includes(currentPage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-panel rounded-2xl px-6 flex justify-between items-center h-20 border border-slate-200/50 shadow-xl">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handlePageClick('home')}
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-500/10 blur-lg rounded-full animate-pulse"></div>
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center border border-indigo-100">
                <i className="fa-solid fa-j text-indigo-600 text-xl font-bold"></i>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors font-futuristic uppercase">
              Junction Rails
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handlePageClick('home')}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${currentPage === 'home' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Home
            </button>
            
            <button 
              onClick={() => handlePageClick('about')}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${currentPage === 'about' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest transition-all py-4 ${isServicesActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Services <i className="fa-solid fa-chevron-down text-[8px] mt-0.5 opacity-50"></i>
              </button>
              
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-100 rounded-xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <button onClick={() => handlePageClick('staff-augmentation')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'staff-augmentation' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-microchip opacity-50 w-4"></i> Staff Augmentation
                </button>
                <button onClick={() => handlePageClick('technical-expertise')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'technical-expertise' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-code-branch opacity-50 w-4"></i> Technical Expertise
                </button>
                <button onClick={() => handlePageClick('quality-assurance')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'quality-assurance' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-shield-halved opacity-50 w-4"></i> Quality Assurance
                </button>
              </div>
            </div>

            {/* For Developers Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest transition-all py-4 ${isDevelopersActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                For Developers <i className="fa-solid fa-chevron-down text-[8px] mt-0.5 opacity-50"></i>
              </button>
              
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-100 rounded-xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <button onClick={() => handlePageClick('developer-opportunity')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'developer-opportunity' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-briefcase opacity-50 w-4"></i> Opportunity
                </button>
                <button onClick={() => handlePageClick('fellowship-program')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'fellowship-program' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-graduation-cap opacity-50 w-4"></i> Fellowship
                </button>
                <button onClick={() => handlePageClick('apply-developer')} className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-4 ${currentPage === 'apply-developer' ? 'text-indigo-600' : 'text-slate-600'}`}>
                   <i className="fa-solid fa-file-signature opacity-50 w-4"></i> Apply Now
                </button>
              </div>
            </div>

            <button 
              onClick={() => handlePageClick('contact')}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${currentPage === 'contact' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Contact
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => handlePageClick('login')}
              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-all"
            >
              Login
            </button>
            <button 
              onClick={() => handlePageClick('get-started')}
              className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all active:scale-95 shadow-lg border border-indigo-400/20"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-900 text-xl focus:outline-none w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg active:scale-90 transition-transform"
              >
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 p-8 space-y-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <button onClick={() => handlePageClick('home')} className={`block w-full text-left font-bold uppercase tracking-widest text-[12px] py-2 transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-slate-900'}`}>Home</button>
            <button onClick={() => handlePageClick('about')} className={`block w-full text-left font-bold uppercase tracking-widest text-[12px] py-2 transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-slate-900'}`}>About</button>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Capabilities</p>
            <div className="grid gap-4">
              <button onClick={() => handlePageClick('staff-augmentation')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'staff-augmentation' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-microchip w-5 opacity-40"></i> Staff Augmentation
              </button>
              <button onClick={() => handlePageClick('technical-expertise')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'technical-expertise' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-code-branch w-5 opacity-40"></i> Technical Expertise
              </button>
              <button onClick={() => handlePageClick('quality-assurance')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'quality-assurance' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-shield-halved w-5 opacity-40"></i> Quality Assurance
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Talent Uplink</p>
            <div className="grid gap-4">
              <button onClick={() => handlePageClick('developer-opportunity')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'developer-opportunity' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-briefcase w-5 opacity-40"></i> Opportunities
              </button>
              <button onClick={() => handlePageClick('fellowship-program')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'fellowship-program' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-graduation-cap w-5 opacity-40"></i> Fellowship
              </button>
              <button onClick={() => handlePageClick('apply-developer')} className={`flex items-center gap-4 w-full text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${currentPage === 'apply-developer' ? 'text-indigo-600' : 'text-slate-600'}`}>
                <i className="fa-solid fa-file-signature w-5 opacity-40"></i> Apply Now
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-slate-100">
            <button onClick={() => handlePageClick('contact')} className={`block w-full text-left font-bold uppercase tracking-widest text-[12px] py-2 ${currentPage === 'contact' ? 'text-indigo-600' : 'text-slate-900'}`}>Contact</button>
            <button onClick={() => handlePageClick('login')} className={`block w-full text-left font-bold uppercase tracking-widest text-[12px] py-2 ${currentPage === 'login' ? 'text-indigo-600' : 'text-slate-900'}`}>Login</button>
            <button onClick={() => handlePageClick('get-started')} className="w-full text-center py-5 bg-indigo-600 text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-100 text-[11px] mt-4 active:scale-95 transition-transform">GET STARTED</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
