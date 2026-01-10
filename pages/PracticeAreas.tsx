import React from 'react';
import { useTranslation } from 'react-i18next';
import { PRACTICE_AREAS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Contact, Building, Building2, Package, HandHelping, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  Contact,
  Building,
  Building2,
  Package,
  HandHelping,
  TrendingUp
};

const PracticeAreas: React.FC = () => {
  const { t } = useTranslation();
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950 serif-font uppercase tracking-tight">{t('expertise.header.title')}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {t('expertise.header.description')}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-[0.15em] mb-12">{t('expertise.what_we_do')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = iconMap[area.icon] || ArrowRight;
            return (
              <div key={area.id} className="bg-white p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 group">
                <div className="mb-8 text-[#4A90E2]">
                  <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{t(area.title)}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-light text-sm">
                  {t(area.description)}
                </p>
                <Link
                  to="/contact"
                  className="mt-auto text-[10px] font-bold text-[#4A90E2] uppercase tracking-[0.2em] hover:text-blue-800 transition-colors"
                >
                  {t('expertise.learn_more')}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 serif-font">{t('expertise.cta.title')}</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('expertise.cta.description')}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A90E2] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all inline-block shadow-xl"
          >
            {t('expertise.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;