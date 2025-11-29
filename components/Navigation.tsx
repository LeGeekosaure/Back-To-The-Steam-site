import logo from 'figma:asset/8bf9306281aa64a8dbaee4629b299149f053197b.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin';
  onNavigate: (page: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: Array<{page: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin', label: string}> = [
    { page: 'home', label: 'Accueil' },
    { page: 'project', label: 'Projet' },
    { page: 'progress', label: 'Avancement' },
    { page: 'news', label: 'Actualités' },
    { page: 'team', label: 'Équipe' },
    { page: 'engineering', label: 'Ingénierie' },
    { page: 'partners', label: 'Partenaires' },
    { page: 'faq', label: 'FAQ' }
  ];

  const handleNavigate = (page: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin') => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigate('home')} 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="Back to the Steam" className="h-10 md:h-12" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`hover:text-blue-400 transition-colors px-3 py-2 rounded ${
                currentPage === item.page ? 'text-blue-400 bg-gray-700' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <button 
          className="lg:hidden p-2 hover:bg-gray-700 rounded transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-xl">
          <div className="flex flex-col py-4">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-left px-6 py-3 hover:bg-gray-700 transition-colors ${
                  currentPage === item.page ? 'text-blue-400 bg-gray-700 border-l-4 border-blue-400' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}