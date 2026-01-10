
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-8 group">
              <div className="bg-white p-2 rounded-sm inline-block">
                <img
                  src="/images/logo.png"
                  alt="Chris Chua & Associates LLC"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/chris-chua-&-associates/?originalSubdomain=sg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/ccnalawllc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ccna.law/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">{t('footer.our_firm')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">{t('nav.our_attorneys')}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('nav.practice_areas')}</Link></li>
              <li><Link to="/articles" className="hover:text-blue-400 transition-colors">{t('nav.articles')}</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">{t('nav.careers')}</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">{t('footer.specializations')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('practice_areas.personal_law.title')}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('practice_areas.corporate_law.title')}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('practice_areas.estate_planning.title')}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('practice_areas.business_law.title')}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">{t('practice_areas.family_office.title')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">{t('footer.contact_us')}</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#4A90E2] mr-3 mt-1 flex-shrink-0" />
                <span>150 Changi Road, #03-05 Guthrie Building, <br />Singapore 419973</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                <span>+65 6222 7500</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>WhatsApp: +65 6222 7500</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                <span>talktous@ccnalaw.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Chris Chua & Associates LLC. {t('footer.rights_reserved')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-300">{t('footer.privacy_policy')}</Link>
            <Link to="/terms" className="hover:text-slate-300">{t('footer.terms_of_service')}</Link>
            <Link to="/disclaimer" className="hover:text-slate-300">{t('footer.legal_disclaimer')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
