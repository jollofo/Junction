
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import StaffAugmentation from './pages/StaffAugmentation';
import TechnicalExpertise from './pages/TechnicalExpertise';
import QualityAssurance from './pages/QualityAssurance';
import DeveloperOpportunity from './pages/DeveloperOpportunity';
import ApplyAsDeveloper from './pages/ApplyAsDeveloper';
import FellowshipProgram from './pages/FellowshipProgram';
import HowItWorks from './pages/HowItWorks';

import { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
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
      case 'how-it-works':
        return <HowItWorks onNavigate={handleNavigate} />;
      case 'developer-opportunity':
        return <DeveloperOpportunity onNavigate={handleNavigate} />;
      case 'apply-developer':
        return <ApplyAsDeveloper />;
      case 'fellowship-program':
        return <FellowshipProgram onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-['Inter'] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;