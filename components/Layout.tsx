
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Menu, X, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Tous les sujets', path: '/explore' },
    { name: 'À propos', path: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-una-blue rounded-lg flex items-center justify-center text-white shadow-sm">
                <BookOpen size={24} />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 block leading-tight">Sujethèque</span>
                <span className="text-xs text-blue-500 font-semibold tracking-wider">UNA • UNIVERSITÉ</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-una-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all flex items-center space-x-2 shadow-md shadow-blue-100"
            >
              <Search size={16} />
              <span>Rechercher</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-gray-500 text-sm">Aide</Link>
            <Link to="/about" className="text-gray-400 hover:text-gray-500 text-sm">Mention Légales</Link>
            <Link to="/about" className="text-gray-400 hover:text-gray-500 text-sm">UNA</Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex items-center justify-center md:justify-start">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Université Nangui Abrogoua. Sujethèque - Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
