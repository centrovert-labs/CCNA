
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const WHATSAPP_LINK = "https://wa.me/6562227500";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex flex-col items-center group py-2">
            <div className="relative px-2">
              {/* Logo Swoosh */}
              <svg 
                className="absolute -top-3 left-0 w-full h-8 text-[#4A90E2] overflow-visible" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
              >
                <path d="M5,20 Q50,-5 95,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-2xl font-light tracking-[0.25em] text-[#4A90E2] serif-font uppercase leading-none block pt-2">
                CHRIS CHUA
              </span>
            </div>
            <span className="text-[9px] tracking-[0.35em] text-slate-500 font-medium uppercase mt-1 leading-none">
              & ASSOCIATES LLC
            </span>
            <span className="text-[7px] tracking-[0.5em] text-slate-400 font-normal uppercase mt-1.5 leading-none">
              ADVOCATES & SOLICITORS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? 'text-[#4A90E2] border-b-2 border-[#4A90E2]' : 'text-slate-600'
                } pb-1`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4A90E2] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-sm ml-4"
            >
              Consultation
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-sm font-bold uppercase tracking-widest rounded-md ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-[#4A90E2]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#4A90E2] text-white px-4 py-3 rounded-md font-bold text-center uppercase tracking-widest text-sm"
              >
                Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
