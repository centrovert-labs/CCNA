import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, ShieldCheck, Contact, Building, Building2, Package, HandHelping, TrendingUp } from 'lucide-react';
import { PRACTICE_AREAS, MOCK_ARTICLES } from '../constants';
import ArticleCard from '../components/ArticleCard';

const iconMap: Record<string, any> = {
  Contact,
  Building,
  Building2,
  Package,
  HandHelping,
  TrendingUp
};

const Home: React.FC = () => {
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Legal Excellence"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Reliable Legal Partners in Singapore</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight serif-font">
              Experienced Advocacy. <br />
              <span className="text-[#4A90E2]">Proven Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Chris Chua & Associates LLC is a premier full-service law firm dedicated to providing 
              exceptional legal services with integrity, diligence, and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A90E2] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-xl text-center"
              >
                Free Case Evaluation
              </a>
              <Link to="/practice-areas" className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center">
                Explore Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">20+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">1k+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Successful Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">15+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Legal Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">98%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Client Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4 serif-font uppercase tracking-tight">What We Do</h2>
            <div className="w-24 h-1 bg-[#4A90E2] mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Strategic counsel and representation across core legal disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => {
              const IconComponent = iconMap[area.icon] || ArrowRight;
              return (
                <div key={area.id} className="bg-white p-10 rounded-lg border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="mb-6 text-[#4A90E2] group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {area.description}
                  </p>
                  <Link to="/practice-areas" className="mt-auto text-[#4A90E2] font-bold text-[10px] inline-flex items-center hover:text-blue-700 transition-colors uppercase tracking-[0.2em]">
                    Learn More <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4 serif-font">Legal Insights</h2>
              <p className="text-slate-600 max-w-xl">
                Stay updated with the latest legal developments and expert analysis.
              </p>
            </div>
            <Link to="/articles" className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-all uppercase tracking-widest text-xs">
              View All Articles <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 serif-font">Committed to Justice, Driven by Excellence.</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center text-blue-100 space-x-3">
              <Award className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">Certified Excellence</span>
            </div>
            <div className="flex items-center text-blue-100 space-x-3">
              <Users className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">Client-Centric Approach</span>
            </div>
            <div className="flex items-center text-blue-100 space-x-3">
              <ShieldCheck className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">Trusted Confidentiality</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;