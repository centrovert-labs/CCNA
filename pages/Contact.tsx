
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/6562227500";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For this build, we follow the instruction to link to WhatsApp.
    // We open WhatsApp in a new tab.
    window.open(WHATSAPP_LINK, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 serif-font">{t('contact.header.title')}</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            {t('contact.header.description')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6 serif-font">{t('contact.info.title')}</h2>
                <p className="text-slate-600 mb-8 max-w-md">
                  {t('contact.info.description')}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t('contact.info.office_location.title')}</h4>
                    <p className="text-slate-600">{t('contact.info.office_location.address')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t('contact.info.phone.title')}</h4>
                    <p className="text-slate-600">{t('contact.info.phone.main')}</p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A90E2] font-bold flex items-center mt-1 hover:underline"
                    >
                      <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                      {t('contact.info.phone.whatsapp')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-900 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t('contact.info.email.title')}</h4>
                    <p className="text-slate-600">{t('contact.info.email.address')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-5 rounded-lg font-bold shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest text-sm"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>{t('contact.info.whatsapp_button')}</span>
                </a>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs">{t('contact.info.office_hours.title')}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>{t('contact.info.office_hours.weekdays')}</div>
                  <div className="font-bold text-slate-900">{t('contact.info.office_hours.weekdays_time')}</div>
                  <div>{t('contact.info.office_hours.weekend')}</div>
                  <div className="font-bold text-slate-900 text-red-600">{t('contact.info.office_hours.weekend_status')}</div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              {submitted ? (
                <div className="bg-green-50 p-12 rounded-2xl border border-green-200 text-center animate-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">{t('contact.form.redirect_title')}</h3>
                  <p className="text-green-800 mb-8">
                    {t('contact.form.redirect_desc')}
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold inline-block hover:bg-green-700">
                    {t('contact.form.redirect_button')}
                  </a>
                </div>
              ) : (
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-blue-950 mb-8 serif-font">{t('contact.form.title')}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('contact.form.full_name')}</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t('contact.form.full_name_placeholder')} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('contact.form.email')}</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t('contact.form.email_placeholder')} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('contact.form.subject')}</label>
                      <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                        <option>{t('contact.form.options.general')}</option>
                        <option>{t('contact.form.options.civil')}</option>
                        <option>{t('contact.form.options.corporate')}</option>
                        <option>{t('contact.form.options.real_estate')}</option>
                        <option>{t('contact.form.options.family')}</option>
                        <option>{t('contact.form.options.other')}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('contact.form.message')}</label>
                      <textarea required rows={5} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t('contact.form.message_placeholder')}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-bold flex items-center justify-center hover:bg-green-700 transition-all shadow-lg shadow-green-900/20 group">
                      {t('contact.form.submit_button')} <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-slate-400 text-center italic mt-4">
                      {t('contact.form.note')}
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-blue-100">
            <MapPin className="w-8 h-8 text-blue-900" />
            <div>
              <h4 className="font-bold text-blue-950">Chris Chua & Associates LLC</h4>
              <p className="text-sm text-slate-600">Guthrie Building, Singapore</p>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1920&h=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60" alt="Singapore Changi Area" />
      </section>
    </div>
  );
};

export default Contact;
