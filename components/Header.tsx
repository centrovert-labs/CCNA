
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.practice_areas'), path: '/practice-areas' },
    { name: t('nav.articles'), path: '/articles' },
    { name: t('nav.contact'), path: '/contact' },
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
            <img
              src="/images/logo.png"
              alt="Chris Chua & Associates LLC"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${isActive(link.path) ? 'text-[#4A90E2] border-b-2 border-[#4A90E2]' : 'text-slate-600'
                  } pb-1`}
              >
                {link.name}
              </Link>
            ))}

            <div className="ml-4 pl-4 border-l border-slate-200">
              <LanguageSwitcher />
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4A90E2] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-sm ml-4"
            >
              {t('nav.consultation')}
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
                className={`block px-3 py-4 text-sm font-bold uppercase tracking-widest rounded-md ${isActive(link.path)
                  ? 'bg-blue-50 text-[#4A90E2]'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            <div className="px-3 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#4A90E2] text-white px-4 py-3 rounded-md font-bold text-center uppercase tracking-widest text-sm"
              >
                {t('nav.consultation')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
