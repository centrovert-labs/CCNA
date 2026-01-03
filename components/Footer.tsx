
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex flex-col items-start mb-8 group">
              <div className="relative px-0.5">
                <svg
                  className="absolute -top-3 left-0 w-full h-8 text-[#4A90E2] overflow-visible"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M2,20 Q50,-5 98,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-xl font-light tracking-[0.2em] text-white serif-font uppercase pt-2 block">
                  CHRIS CHUA
                </span>
              </div>
              <span className="text-[8px] tracking-[0.3em] text-slate-400 font-medium uppercase mt-1">
                & ASSOCIATES LLC
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Excellence in legal advocacy since 2004. Chris Chua & Associates LLC is committed to protecting
              our clients' interests with unparalleled dedication and expertise in Singapore.
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
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Our Firm</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Our Attorneys</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Practice Areas</Link></li>
              <li><Link to="/articles" className="hover:text-blue-400 transition-colors">Legal Insights</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Specializations</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Civil Litigation</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Corporate Governance</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Real Estate Transactions</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Criminal Defense</Link></li>
              <li><Link to="/practice-areas" className="hover:text-blue-400 transition-colors">Insurance Law</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
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
          <p>© {new Date().getFullYear()} Chris Chua & Associates LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-slate-300">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
