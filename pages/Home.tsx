import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-right-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url("/images/hero_strict_v3.png")',
          backgroundPosition: 'right center' // Desktop default
        }}
      >
        {/* Seamless cinematic blend overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(6, 16, 33, 0.98) 0%, rgba(6, 16, 33, 0.92) 20%, rgba(6, 16, 33, 0.75) 38%, rgba(6, 16, 33, 0.45) 52%, rgba(6, 16, 33, 0.15) 65%, rgba(6, 16, 33, 0.0) 75%)'
          }}
        >
          {/* Mobile gradient override via generic CSS if needed, or we handle via separate div hidden on desktop. 
              The user provided a specific media query for mobile overlay. 
              Let's use a style tag or conditional style for mobile if possible, 
              but for now I'll stick to the desktop one as the base and ensure styling matches. 
              Actually, I should apply the mobile gradient via a class that changes at md breakpoint.
          */}
        </div>

        {/* Mobile Gradient (Only visible on small screens to override/stack) */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(6,16,33,0.95) 0%, rgba(6,16,33,0.75) 50%, rgba(6,16,33,0.3) 100%)'
          }}
        ></div>

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-[620px] px-6 py-10 md:p-20 text-white">
            <span className="inline-block px-[14px] py-[6px] border border-[#78a0ff]/40 rounded-[20px] text-[11px] xl:text-[12px] tracking-[0.6px] mb-6 uppercase">
              Reliable Legal Partners in Singapore
            </span>

            <h1 className="serif-font font-medium text-[34px] leading-[1.2] tracking-[-0.2px] md:text-[42px] md:leading-[1.15] lg:text-[48px] xl:text-[56px] xl:leading-[1.12] xl:tracking-[-0.4px] mb-5">
              Experienced Advocacy.<br />
              <span className="text-[#6fa3ff] font-semibold block md:inline">Proven Results.</span>
            </h1>

            <p className="text-[14.5px] leading-[1.6] md:text-[14.8px] md:max-w-full lg:text-[15px] lg:max-w-[520px] xl:text-[15.5px] xl:leading-[1.65] opacity-90 mb-8">
              Chris Chua & Associates LLC is a premier full-service law firm dedicated
              to providing exceptional legal services with integrity, diligence,
              and professionalism.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b82f6] text-white px-[26px] py-[14px] rounded-md font-semibold text-[14px] text-center hover:bg-blue-600 transition-colors"
              >
                FREE CASE EVALUATION
              </a>
              <Link
                to="/practice-areas"
                className="border border-white/40 text-white px-[26px] py-[14px] rounded-md font-semibold text-[14px] text-center hover:bg-white/10 transition-colors"
              >
                EXPLORE OUR EXPERTISE
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile background position fix via inline style override check not easy in pure inline, 
            so adding a standard style block for the specific media query behavior requested by user */}
        <style>{`
          @media (max-width: 768px) {
            section {
              background-position: center !important;
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">20+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('home.stats.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">1k+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('home.stats.cases')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">15+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('home.stats.specialists')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-1">98%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('home.stats.trust')}</div>
            </div>
          </div>
        </div>
      </section >

      {/* Practice Areas */}
      < section className="py-24 bg-slate-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4 serif-font uppercase tracking-tight">{t('home.services.title')}</h2>
            <div className="w-24 h-1 bg-[#4A90E2] mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t(area.title)}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {t(area.description)}
                  </p>
                  <Link to="/practice-areas" className="mt-auto text-[#4A90E2] font-bold text-[10px] inline-flex items-center hover:text-blue-700 transition-colors uppercase tracking-[0.2em]">
                    {t('home.services.learn_more')} <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section >

      {/* Latest Insights */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4 serif-font">{t('home.insights.title')}</h2>
              <p className="text-slate-600 max-w-xl">
                {t('home.insights.description')}
              </p>
            </div>
            <Link to="/articles" className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-all uppercase tracking-widest text-xs">
              {t('home.insights.view_all')} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section >

      {/* Trust Banner */}
      < section className="bg-blue-900 py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 serif-font">{t('home.trust.title')}</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center text-blue-100 space-x-3">
              <Award className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">{t('home.trust.certified')}</span>
            </div>
            <div className="flex items-center text-blue-100 space-x-3">
              <Users className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">{t('home.trust.client_centric')}</span>
            </div>
            <div className="flex items-center text-blue-100 space-x-3">
              <ShieldCheck className="w-6 h-6 text-[#4A90E2]" />
              <span className="font-bold uppercase tracking-widest text-xs">{t('home.trust.confidentiality')}</span>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;