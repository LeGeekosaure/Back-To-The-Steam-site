import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { ProjectOverview } from './components/ProjectOverview';
import { Timeline } from './components/Timeline';
import { Navigation } from './components/Navigation';
import { TeamPage } from './components/TeamPage';
import { ProjectPage } from './components/ProjectPage';
import { ProgressPage } from './components/ProgressPage';
import { NewsPage } from './components/NewsPage';
import { EngineeringPage } from './components/EngineeringPage';
import { PartnersPage } from './components/PartnersPage';
import { FAQPage } from './components/FAQPage';
import { AdminFAQPage } from './components/AdminFAQPage';
import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin'>('home');

  // Check hash on mount and when hash changes
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentPage('admin');
      }
    };
    
    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <main id="workshop" className="max-w-7xl mx-auto px-4 py-12 space-y-16">
            <FeatureCards />
            <ProjectOverview />
            <Timeline />
          </main>
        </>
      )}
      
      {currentPage === 'project' && <ProjectPage />}
      {currentPage === 'progress' && <ProgressPage />}
      {currentPage === 'news' && <NewsPage />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'engineering' && <EngineeringPage />}
      {currentPage === 'partners' && <PartnersPage />}
      {currentPage === 'faq' && <FAQPage />}
      {currentPage === 'admin' && <AdminFAQPage />}
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Back to the Steam - Course en Cours. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}